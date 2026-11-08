import { ArrowUpRight } from "lucide-react";
import { BOOKS } from "../books";
import ReadingGoal from "./ReadingGoal";

const previewIds = [
  "the-three-body-problem",
  "the-selfish-gene",
  "east-of-eden",
  "the-coming-wave",
  "the-count-of-monte-cristo",
];

export default function ReadingCard() {
  return (
    <a className="reading-card" id="reading" href="/books/">
      <div className="reading-card-covers" aria-hidden="true">
        {previewIds.map((id) => {
          const book = BOOKS.find((entry) => entry.id === id);
          return book?.coverUrl ? (
            <img key={id} src={book.coverUrl} alt="" width="60" height="90" loading="lazy" />
          ) : null;
        })}
      </div>
      <div className="reading-card-copy">
        <h2>Reading</h2>
        <ReadingGoal />
      </div>
      <ArrowUpRight size={20} aria-hidden="true" />
    </a>
  );
}
