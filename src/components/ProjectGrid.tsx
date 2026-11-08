import { ArrowUpRight, Github } from "lucide-react";
import { PROJECTS } from "../constants";
import ProjectIllustration from "./ProjectIllustration";
import SectionHeading from "./SectionHeading";

export default function ProjectGrid() {
  return (
    <section
      className="projects-section section-space"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="page-width">
        <SectionHeading
          number="02"
          label="Selected work"
          title={<span id="projects-title">Products & platforms.</span>}
          description="What I’m building now, and things I’ve worked on before."
        />
        <div className="project-list">
          {PROJECTS.map((project) => (
            <article
              className={`project-card${project.illustration === "arena" ? " project-card--wide" : ""}`}
              key={project.id}
              data-project={project.id}
            >
              <div className="project-illustration">
                <span className="project-index">{project.category}</span>
                <ProjectIllustration kind={project.illustration} />
              </div>
              <div className="project-content">
                <span className="project-status">{project.status}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {project.siteUrl || project.repoUrl ? (
                  <div className="project-links flex flex-wrap items-center gap-6">
                    {project.siteUrl ? (
                      <a
                        href={project.siteUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="button button-ink"
                      >
                        Visit {project.title}
                        <ArrowUpRight size={18} />
                      </a>
                    ) : null}
                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="button button-ink"
                      >
                        <Github size={17} />
                        Explore the code
                        <ArrowUpRight size={18} />
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
