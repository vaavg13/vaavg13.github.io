import { PROFILE } from "../constants";

export default function AboutSummary() {
  return (
    <section className="about-summary" id="about" aria-labelledby="about-title">
      <p className="eyebrow">A bit about me</p>
      <h2 id="about-title">From idea to working product.</h2>
      <p>
        I’m Bill, a founder and AI engineer in Athens. I’m building Skilltap and
        Trailblazer, previously worked on One Realm, and ran Citely.
      </p>
      <p>
        {PROFILE.aboutLead} I work across product, engineering, and the messy
        bits in between.
      </p>
    </section>
  );
}
