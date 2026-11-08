"""Cache conservative title/author matches from Open Library; retain manual overrides."""
import json
import re
import subprocess
import time
import unicodedata
from difflib import SequenceMatcher
from pathlib import Path
from urllib.parse import urlencode

ROOT = Path(__file__).resolve().parents[1]
CACHE = ROOT / "src/data/book-covers.json"


def normalize(value):
    for original, latin in {"Достоевский": "Dostoevsky", "刘慈欣": "Cixin Liu", "Πλάτων": "Plato"}.items():
        value = value.replace(original, latin)
    value = unicodedata.normalize("NFKD", value).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", " ", value.lower()).strip()


def fetch(url):
    return subprocess.check_output([
        "curl", "--location", "--fail", "--silent", "--show-error", "--max-time", "20",
        "--user-agent", "BillBookshelf/1.0 (personal book catalogue)", url,
    ], stderr=subprocess.PIPE)


def main():
    source = (ROOT / "src/books.ts").read_text()
    books = json.loads(source.split("const catalogue: Book[] = ", 1)[1].split(";\n\nexport", 1)[0])
    matches = json.loads(CACHE.read_text())
    report = {}
    for book in books:
        if book["id"] in matches:
            continue
        if book.get("needsReview"):
            report[book["id"]] = "Identification needs review; cover lookup skipped."
            continue
        try:
            query = urlencode({
                "q": f'{book["title"].replace("-", " ")} {book["author"].split(" & ")[0]} language:eng',
                "limit": 10,
                "fields": "key,title,author_name,cover_i,editions,editions.title,editions.cover_i,editions.language",
                "lang": "en",
            })
            candidates = json.loads(fetch("https://openlibrary.org/search.json?" + query))["docs"]
            title = normalize(book["title"])
            title_head = normalize(book["title"].split(":")[0])
            surname = normalize(book["author"].split(" & ")[0]).split()[-1]
            ranked = []
            for candidate in candidates:
                editions = candidate.get("editions", {}).get("docs", [])
                edition = next((item for item in editions if item.get("cover_i") and "eng" in item.get("language", [])), None)
                if edition:
                    candidate = {**candidate, "title": edition["title"], "cover_i": edition["cover_i"]}
                candidate_title = normalize(candidate["title"].split(" (")[0])
                authors = normalize(" ".join(candidate.get("author_name", [])))
                score = SequenceMatcher(None, title, candidate_title).ratio()
                if normalize(candidate["title"].split(":")[0]) == title:
                    score = 1
                if candidate_title == title_head:
                    score = 1
                candidate_base = re.sub(r"^(the|a|an) ", "", candidate_title)
                title_base = re.sub(r"^(the|a|an) ", "", title)
                if candidate_base.removesuffix(" of " + normalize(book["author"])) == title_base:
                    score = 1
                if " and " in candidate_title and " and " not in title:
                    continue
                author_match = any(SequenceMatcher(None, surname, token).ratio() >= 0.8 for token in authors.split())
                if author_match and candidate.get("cover_i") and score >= 0.78:
                    ranked.append((score, candidate))
            if not ranked:
                report[book["id"]] = {"reason": "No confident cover match", "candidates": candidates}
                print("REVIEW", book["title"], flush=True)
            else:
                candidate = max(ranked, key=lambda item: item[0])[1]
                cover_id = candidate["cover_i"]
                asset = fetch(f"https://covers.openlibrary.org/b/id/{cover_id}-M.jpg?default=false")
                if len(asset) < 1000 or not asset.startswith(b"\xff\xd8"):
                    raise ValueError("Cover response was not a usable JPEG")
                destination = ROOT / "public/book-covers" / f"{book['id']}.jpg"
                destination.parent.mkdir(exist_ok=True)
                destination.write_bytes(asset)
                matches[book["id"]] = {
                    "coverUrl": f"/book-covers/{book['id']}.jpg",
                    "sourceUrl": "https://openlibrary.org" + candidate["key"],
                    "matchedTitle": candidate["title"],
                    "matchedAuthor": candidate.get("author_name", []),
                    "coverId": cover_id,
                }
                CACHE.write_text(json.dumps(matches, ensure_ascii=False, indent=2) + "\n")
                print("MATCH", book["title"], "→", candidate["title"], flush=True)
        except (subprocess.CalledProcessError, ValueError, KeyError) as error:
            report[book["id"]] = {"reason": str(error)}
            print("UNAVAILABLE", book["title"], flush=True)
        time.sleep(1.1)
    (ROOT / "docs/book-cover-review.json").write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n")
    print(f"{len(matches)}/{len(books)} covers cached; {len(report)} entries need review.", flush=True)


if __name__ == "__main__":
    main()
