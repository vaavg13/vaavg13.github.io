import { BOOKS, READING_GOAL } from "../books";

export default function ReadingGoal() {
  const finished = BOOKS.filter((book) => book.status === "finished").length;

  return (
    <div className="reading-goal">
      <p><strong>{finished}</strong> / {READING_GOAL} books</p>
      <progress
        value={Math.min(finished, READING_GOAL)}
        max={READING_GOAL}
        aria-label={`Reading goal: ${finished} of ${READING_GOAL} books finished`}
      />
    </div>
  );
}
