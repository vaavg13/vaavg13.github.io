import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../constants";

export default function ProjectGrid() {
  return (
    <section
      className="product-section"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="product-heading">
        <div>
          <h2 id="projects-title">
            What I’m building<span>.</span>
          </h2>
        </div>
      </div>
      <div className="product-grid">
        {PROJECTS.filter((project) => project.id !== "codenames").map(
          (project) => (
            <article
              className="product-card"
              key={project.id}
              data-project={project.id}
            >
              <div
                className={`product-logo product-logo--${project.id}`}
                aria-hidden="true"
              >
                {project.logo ? (
                  <img src={project.logo} alt="" width="56" height="56" />
                ) : (
                  <span>citely.ai</span>
                )}
              </div>
              <div className="product-details">
                <div className="product-title-row">
                  <h3>{project.title}</h3>
                </div>
                <p>{project.description}</p>
                {project.recognition && (
                  <a
                    className="project-recognition"
                    href={project.recognition.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="accelerator-logo">
                      <img
                        src={project.recognition.logo}
                        alt="egg – enter grow go"
                        width="64"
                        height="24"
                      />
                    </span>
                    <span>
                      {project.recognition.label}
                      <span className="recognition-period">
                        {project.recognition.period}
                      </span>
                    </span>
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                )}
                {project.siteUrl && (
                  <a
                    href={project.siteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="button button-yellow product-cta"
                  >
                    Visit {project.title} <ArrowUpRight size={18} />
                  </a>
                )}
                {project.status && (
                  <span className="product-state">
                    <span />
                    {project.status}
                  </span>
                )}
              </div>
            </article>
          ),
        )}
      </div>
    </section>
  );
}
