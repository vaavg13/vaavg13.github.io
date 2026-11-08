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
  const [nightMode, setNightMode] = useState(
    () => document.documentElement.dataset.theme === "night",
  );
  const email = PROFILE.socials.find((social) => social.iconName === "mail")!;

  function toggleTheme() {
    const nextNightMode = !nightMode;
    document.documentElement.dataset.theme = nextNightMode ? "night" : "day";
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", nextNightMode ? "#182b38" : "#f8f4e9");
    setNightMode(nextNightMode);
  }

  return (
    <div className="site">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <nav className="site-nav" aria-label="Main navigation">
        <div className="page-width nav-inner">
          <a
            href="#home"
            className="brand"
            aria-label={`${PROFILE.name}, home`}
          >
            <span className="brand-symbol">
              <Sparkle />
            </span>
            <span>
              bill<span className="brand-dot">.</span>
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
            onClick={toggleTheme}
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
                label="About"
                title={<span id="about-title">About my work.</span>}
              />
              <div className="about-sketch">
                <NetworkSketch />
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
              <p className="eyebrow">Contact</p>
              <h2 id="contact-title">
                Get in touch<span>.</span>
              </h2>
              <p>For research, projects, or collaboration.</p>
              <a href={email.url} className="button button-yellow">
                Email me <ArrowUpRight size={20} />
              </a>
            </div>
            <div className="contact-illustration">
              <Ufo />
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
            <span>bill.</span>
          </a>
          <p>
            © {new Date().getFullYear()} {PROFILE.name}
            <span>{PROFILE.location}</span>
          </p>
          <SocialLinks />
        </div>
      </footer>
    </div>
  );
}
