import React from 'react';
import { PUBLICATIONS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const PublicationList: React.FC = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="md:w-48 shrink-0 pt-2">
          <h2 className="text-sm font-mono uppercase tracking-widest text-muted dark:text-muted-dark sticky top-24">
            Selected<br/>Publications
          </h2>
        </div>
        
        <div className="flex-1 flex flex-col">
          {PUBLICATIONS.map((pub) => (
            <div 
              key={pub.id} 
              className="group py-8 first:pt-0 border-b border-border dark:border-border-dark last:border-0 flex flex-col gap-3"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
                <h3 className="text-xl font-serif font-medium text-foreground dark:text-foreground-dark leading-tight max-w-2xl">
                  {pub.url ? (
                    <a href={pub.url} target="_blank" rel="noreferrer" className="hover:text-primary dark:hover:text-primary-dark transition-colors inline-flex items-baseline gap-2">
                      {pub.title}
                      <ArrowUpRight size={14} className="opacity-50" />
                    </a>
                  ) : (
                    pub.title
                  )}
                </h3>
                <span className="font-mono text-sm text-primary dark:text-primary-dark shrink-0">
                  {pub.year}
                </span>
              </div>
              
              <p className="text-muted dark:text-muted-dark font-sans text-sm italic">
                {pub.authors}
              </p>
              
              <div className="flex flex-wrap items-center gap-3 mt-1">
                <span className="font-mono text-xs font-bold text-foreground dark:text-foreground-dark uppercase tracking-wider">
                  {pub.conference}
                </span>
                <span className="text-border dark:text-border-dark text-xs">|</span>
                <div className="flex flex-wrap gap-2">
                  {pub.tags.map(tag => (
                     <span key={tag} className="text-xs font-mono text-muted dark:text-muted-dark px-1.5 py-0.5 bg-zinc-200/50 dark:bg-white/5 rounded-sm">
                       {tag}
                     </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationList;