import { ArrowUpRight, FileText, FlaskConical } from "lucide-react";
import { PUBLICATIONS, PROJECTS } from "../constants";

export default function PublicationList() {
  const experiment = PROJECTS.find((project) => project.id === "codenames")!;
  return (
    <section className="other-work" id="other" aria-labelledby="other-title">
      <div className="small-section-heading">
        <h2 id="other-title">
          Other work<span>.</span>
        </h2>
        <span className="eyebrow">Experiments & papers</span>
      </div>
      <a
        className="other-row"
        href={experiment.repoUrl}
        target="_blank"
        rel="noreferrer"
      >
        <FlaskConical size={20} />
        <div>
          <h3>{experiment.title}</h3>
          <p>
            LLM agents playing spymaster and guesser. An open-source experiment.
          </p>
        </div>
        <ArrowUpRight size={18} />
      </a>
      {[...PUBLICATIONS]
        .sort((a, b) => b.year - a.year)
        .map((paper) => (
          <a
            className="other-row"
            href={paper.url}
            target="_blank"
            rel="noreferrer"
            key={paper.id}
          >
            <FileText size={20} />
            <div>
              <h3>{paper.title}</h3>
              <p>
                {paper.conference} · {paper.year}
              </p>
            </div>
            <ArrowUpRight size={18} />
          </a>
        ))}
    </section>
  );
}
