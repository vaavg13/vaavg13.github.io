import { ArrowUpRight, FileText } from "lucide-react";
import { PUBLICATIONS, PROFILE } from "../constants";
import SectionHeading from "./SectionHeading";

export default function PublicationList() {
  const scholar = PROFILE.socials.find(
    (social) => social.iconName === "scholar",
  );
  return (
    <section
      className="research-section section-space"
      id="research"
      aria-labelledby="research-title"
    >
      <div className="page-width">
        <div className="section-topline">
          <SectionHeading
            number="03"
            label="Earlier work"
            title={<span id="research-title">Selected publications.</span>}
            description="Papers from my earlier work in AI and distributed systems."
          />
          {scholar ? (
            <a
              href={scholar.url}
              className="text-link"
              target="_blank"
              rel="noreferrer"
            >
              Google Scholar <ArrowUpRight size={17} />
            </a>
          ) : null}
        </div>
        <div className="publication-grid grid md:grid-cols-2 gap-6">
          {[...PUBLICATIONS]
            .sort((a, b) => b.year - a.year)
            .map((publication, index) => (
              <article
                className={`publication-card publication-card-${index % 2}`}
                key={publication.id}
              >
                <div className="publication-top">
                  <span className="publication-icon">
                    <FileText size={22} strokeWidth={1.6} />
                  </span>
                  <span className="year-label">{publication.year}</span>
                </div>
                <p className="publication-venue">{publication.conference}</p>
                <h3>
                  {publication.url ? (
                    <a href={publication.url} target="_blank" rel="noreferrer">
                      {publication.title}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    publication.title
                  )}
                </h3>
                <p className="publication-authors">{publication.authors}</p>
                <div className="publication-footer">
                  <div className="tags">
                    {publication.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  {publication.url ? (
                    <a
                      href={publication.url}
                      target="_blank"
                      rel="noreferrer"
                      className="round-link"
                      aria-label={`Read paper: ${publication.title}`}
                    >
                      <ArrowUpRight size={20} />
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}
