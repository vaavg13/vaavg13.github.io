import { ArrowUpRight, Github } from "lucide-react";
import { PROJECTS } from "../constants";
import { ArenaSketch } from "./Illustrations";
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
          number="03"
          label="Out of the notebook, into the world"
          title={<span id="projects-title">Ideas like to be built.</span>}
          description="Experiments, side quests, and things I make to find out what happens."
        />
        <div className="project-list">
          {PROJECTS.map((project, index) => (
            <article className="project-card" key={project.id}>
              <div className="project-illustration">
                <span className="project-index">
                  EXPERIMENT / {String(index + 1).padStart(2, "0")}
                </span>
                <ArenaSketch />
                <span className="project-art-caption">
                  A little play. A lot to learn.
                </span>
              </div>
              <div className="project-content">
                <p className="eyebrow">Agents at play</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.techStack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-6 mt-8">
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="button button-ink"
                    >
                      <Github size={17} /> Explore the code{" "}
                      <ArrowUpRight size={18} />
                    </a>
                  ) : null}
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-link"
                    >
                      Try the demo <ArrowUpRight size={18} />
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
