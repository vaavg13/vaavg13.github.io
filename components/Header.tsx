import React from 'react';
import { PROFILE } from '../constants';
import { Github, Linkedin, Mail, BookOpen, MapPin, FileText } from 'lucide-react';

const IconMap: Record<string, React.FC<any>> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  scholar: BookOpen,
  twitter: FileText // Fallback icon
};

const Header: React.FC = () => {
  return (
    <header className="pt-24 pb-8">
      <div className="flex flex-col-reverse md:flex-row gap-12 items-start justify-between">
        
        {/* Left Column: Text Info */}
        <div className="flex-1 max-w-2xl">
          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl font-bold font-serif text-foreground dark:text-foreground-dark tracking-tight leading-[1.1]">
              {PROFILE.name}
            </h1>
            <p className="text-lg md:text-xl font-mono text-primary dark:text-primary-dark mt-4 pl-1">
              {PROFILE.title}
            </p>
            <p className="mt-3 text-sm md:text-base text-muted dark:text-muted-dark max-w-xl">
              {PROFILE.tagline}
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-6 mt-8 mb-10">
             <a 
              href="/cv.pdf" 
              className="group flex items-center gap-2 text-foreground dark:text-foreground-dark font-mono text-sm uppercase tracking-wider hover:text-primary dark:hover:text-primary-dark transition-colors"
            >
              <span className="border-b-2 border-primary dark:border-primary-dark pb-0.5 group-hover:border-transparent transition-all">Download CV</span>
            </a>

            <div className="h-4 w-px bg-border dark:bg-border-dark hidden sm:block"></div>

            <div className="flex gap-5">
              {PROFILE.socials.map((social) => {
                const Icon = IconMap[social.iconName] || Mail;
                return (
                  <a 
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted dark:text-muted-dark hover:text-primary dark:hover:text-primary-dark transition-colors"
                    aria-label={social.platform}
                  >
                    <Icon size={20} strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="text-lg leading-relaxed text-foreground dark:text-foreground-dark/90 font-serif max-w-xl">
            <p>
              {PROFILE.about}
            </p>
          </div>
        </div>

        {/* Right Column: Image with accent border */}
        <div className="w-full md:w-auto shrink-0 md:mt-2">
          <div className="relative group">
            {/* Minimal accent corner or border */}
            <div className="absolute -inset-2 border border-primary dark:border-primary-dark/50 opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="w-48 h-48 md:w-56 md:h-56 bg-zinc-200 dark:bg-[#252526] overflow-hidden relative">
              <img 
                src={PROFILE.avatarUrl} 
                alt={PROFILE.name} 
                className="w-full h-full object-cover transition-all duration-500"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                  const fallback = document.createElement('div');
                  fallback.className = "text-4xl font-mono text-primary dark:text-primary-dark font-bold";
                  fallback.innerText = "VA";
                  e.currentTarget.parentElement?.appendChild(fallback);
                }}
              />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs font-mono text-muted dark:text-muted-dark uppercase tracking-widest">
            <MapPin size={12} className="text-primary dark:text-primary-dark" />
            {PROFILE.location}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;