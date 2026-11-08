import { useState } from "react";
import { ArrowUpRight, Moon, Sun } from "lucide-react";
import Header from "./components/Header";
import PublicationList from "./components/PublicationList";
import ProjectGrid from "./components/ProjectGrid";
import SectionHeading from "./components/SectionHeading";
import SocialLinks from "./components/SocialLinks";
import { NetworkSketch, Sparkle, Ufo } from "./components/Illustrations";
import { PROFILE } from "./constants";

export default function App() {
  const [nightMode, setNightMode] = useState(false);
  const email = PROFILE.socials.find((social) => social.iconName === "mail")!;

  return (
    <div className="site" data-theme={nightMode ? "night" : "day"}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <nav className="site-nav" aria-label="Main navigation">
        <div className="page-width nav-inner">
          <a
            href="#home"
            className="brand"
            aria-label="Vasilis Avgerinos, home"
          >
            <span className="brand-symbol">
              <Sparkle />
            </span>
            <span>
              vasilis<span className="brand-dot">.</span>
            </span>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#research">Research</a>
            <a href="#projects">Projects</a>
            <a href="#contact">
              Say hello <ArrowUpRight size={15} />
            </a>
          </div>
          <button
            className="theme-button"
            type="button"
            onClick={() => setNightMode((value) => !value)}
            aria-pressed={nightMode}
            aria-label={
              nightMode ? "Switch to day mode" : "Switch to night mode"
            }
            title={nightMode ? "Switch to day mode" : "Switch to night mode"}
          >
            {nightMode ? <Sun size={20} /> : <Moon size={19} />}
          </button>
        </div>
      </nav>
      <main id="main" tabIndex={-1}>
        <Header />
        <section
          className="about-section section-space"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="page-width about-grid">
            <div>
              <SectionHeading
                number="01"
                label="A little context"
                title={
                  <span id="about-title">
                    Research with a<br />
                    builder’s mindset.
                  </span>
                }
              />
              <div className="about-sketch">
                <NetworkSketch />
                <span>
                  Connecting the dots.
                  <br />
                  Then seeing what’s possible.
                </span>
              </div>
            </div>
            <div className="about-copy">
              <p className="about-lead">
                I explore how intelligent systems can make complex
                infrastructure more adaptive, autonomous, and resilient.
              </p>
              <p>{PROFILE.about}</p>
              <div className="focus-areas">
                <p className="eyebrow">Currently exploring</p>
                <div className="tags">
                  <span>Agentic AI</span>
                  <span>Cloud–edge systems</span>
                  <span>Autonomous management</span>
                </div>
              </div>
              <SocialLinks />
            </div>
          </div>
        </section>
        <PublicationList />
        <ProjectGrid />
        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="page-width contact-inner">
            <div className="contact-copy">
              <p className="eyebrow">There’s always another good question</p>
              <h2 id="contact-title">
                What are you
                <br />
                curious about<span>?</span>
              </h2>
              <p>
                Research, a project, or an interesting idea.
                <br />
                I’d love to hear what you’re thinking.
              </p>
              <a href={email.url} className="button button-yellow">
                Let’s talk <ArrowUpRight size={20} />
              </a>
            </div>
            <div className="contact-illustration">
              <Ufo />
              <span>
                Good ideas can come
                <br />
                from anywhere.
              </span>
              <Sparkle className="contact-sparkle" />
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="page-width footer-inner">
          <a href="#home" className="brand">
            <span className="brand-symbol">
              <Sparkle />
            </span>
            <span>vasilis.</span>
          </a>
          <p>
            © {new Date().getFullYear()} Vasilis Avgerinos
            <span>Made with curiosity, in Athens.</span>
          </p>
          <SocialLinks />
        </div>
      </footer>
    </div>
  );
}
