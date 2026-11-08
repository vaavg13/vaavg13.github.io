import { PROFILE } from "../constants";

export default function AboutSummary() {
  return (
    <section className="about-summary" id="about" aria-labelledby="about-title">
      <h2 id="about-title">A bit about me</h2>
      <p>
        I’m Bill, based in Athens. I build things that seem interesting to me,
        usually with AI somewhere in the mix. Some start with a problem I’ve run
        into; others start with “I wonder if this would work.”
      </p>
      <p>
        {PROFILE.aboutLead} The projects here are where I follow my own ideas.
      </p>
    </section>
  );
}
