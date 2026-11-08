import { useState } from "react";
import { ArrowLeft, BookOpen } from "lucide-react";
import { BOOKS, type Book } from "../books";
import SiteBackdrop from "./SiteBackdrop";
import ReadingGoal from "./ReadingGoal";

const shelves = [
  { id: "reading", title: "Reading now" },
  { id: "finished", title: "Finished" },
  { id: "up-next", title: "Up next" },
] as const;

function BookEntry({ book }: { book: Book }) {
  const [coverFailed, setCoverFailed] = useState(false);

  return (
    <li className="book-entry" data-shelf={book.status}>
      <div className="book-cover" aria-hidden="true">
        {book.coverUrl && !coverFailed ? (
          <img
            src={book.coverUrl}
            alt=""
            width="160"
            height="240"
            loading="lazy"
            onError={() => setCoverFailed(true)}
          />
        ) : (
          <>
            <BookOpen size={22} />
            <span>{book.title}</span>
          </>
        )}
      </div>
      <div className="book-details">
        <h3>
          {book.url ? (
            <a href={book.url} target="_blank" rel="noreferrer">
              {book.title}
            </a>
          ) : book.title}
        </h3>
        <p className="book-author">{book.author}</p>
        {book.status === "finished" && book.finishedOn ? (
          <time className="book-date" dateTime={book.finishedOn}>
            Finished {new Date(`${book.finishedOn}T00:00:00Z`).toLocaleDateString("en-GB", {
              day: "numeric", month: "short", year: "numeric", timeZone: "UTC",
            })}
          </time>
        ) : null}
        {book.note ? <p className="book-note">{book.note}</p> : null}
      </div>
    </li>
  );
}

export default function BooksPage() {
  return (
    <div className="split-world books-world">
      <SiteBackdrop />
      <div className="page-width books-page">
        <a href="/" className="text-link books-back">
          <ArrowLeft size={16} aria-hidden="true" />Back
        </a>
        <header className="books-header">
          <h1>Bookshelf</h1>
          <ReadingGoal />
        </header>
        {shelves.map((shelf) => {
          const books = BOOKS
            .filter((book) => book.status === shelf.id)
            .sort((a, b) => shelf.id === "finished"
              ? (b.finishedOn ?? "").localeCompare(a.finishedOn ?? "")
              : 0);

          if (!books.length) return null;

          return (
            <section
              className="book-shelf"
              id={shelf.id}
              aria-labelledby={`${shelf.id}-title`}
              key={shelf.id}
            >
              <div className="shelf-heading">
                <h2 id={`${shelf.id}-title`}>{shelf.title}</h2>
              </div>
              <ul className="book-list">
                {books.map((book) => <BookEntry book={book} key={book.id} />)}
              </ul>
            </section>
          );
        })}
        <footer className="books-footer">
          Covers via <a href="https://openlibrary.org" target="_blank" rel="noreferrer">Open Library</a>; editions may vary.
        </footer>
      </div>
    </div>
  );
}
