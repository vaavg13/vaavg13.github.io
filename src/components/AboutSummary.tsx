import { PROFILE } from "../constants";

export default function AboutSummary() {
  return (
    <section className="about-summary" id="about" aria-labelledby="about-title">
      <h2 id="about-title">A bit about me</h2>
      <p>{PROFILE.about}</p>
    </section>
  );
}
