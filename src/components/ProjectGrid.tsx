import React from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink } from 'lucide-react';

const ProjectGrid: React.FC = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="md:w-48 shrink-0 pt-2">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted dark:text-muted-dark sticky top-24">
            Projects &<br/>Code
          </h2>
        </div>
        
        <div className="flex-1 flex flex-col">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group py-8 first:pt-0 border-b border-border dark:border-border-dark last:border-0 flex flex-col gap-3"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
                <h3 className="text-xl font-serif font-medium text-foreground dark:text-foreground-dark leading-tight flex items-center gap-3">
                  {project.title}
                  
                  <div className="flex gap-3 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                    {project.repoUrl && (
                      <a 
                        href={project.repoUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-muted dark:text-muted-dark hover:text-primary dark:hover:text-primary-dark transition-colors"
                        aria-label="GitHub Repo"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-muted dark:text-muted-dark hover:text-primary dark:hover:text-primary-dark transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </h3>
              </div>
              
              <p className="text-muted dark:text-muted-dark font-sans text-sm leading-relaxed max-w-3xl">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-1">
                {project.techStack.map(tech => (
                  <span key={tech} className="text-[10px] font-mono text-primary dark:text-primary-dark bg-primary/5 dark:bg-primary-dark/10 px-1.5 py-0.5 border border-primary/10 dark:border-primary-dark/10">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;