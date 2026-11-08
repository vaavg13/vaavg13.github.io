import { useCallback, useEffect, useState } from "react";
import { ArrowUpRight, Moon, Sun } from "lucide-react";
import IllustratedLayout from "./layouts/IllustratedLayout";
import SplitLayout from "./layouts/SplitLayout";
import LayoutPicker, { type LayoutVariant } from "./components/LayoutPicker";
import SocialLinks from "./components/SocialLinks";
import { Sparkle } from "./components/Illustrations";
import { PROFILE } from "./constants";

export default function App() {
  const [nightMode, setNightMode] = useState(
    () => document.documentElement.dataset.theme === "night",
  );
  const [layout, setLayout] = useState<LayoutVariant>(() =>
    new URLSearchParams(window.location.search).get("v") === "2" ? 1 : 0,
  );
  const changeLayout = useCallback((next: LayoutVariant) => {
    setLayout(next);
    const url = new URL(window.location.href);
    url.searchParams.set("v", String(next + 1));
    url.hash = "";
    window.history.replaceState(null, "", url);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  useEffect(() => {
    const syncLayout = () =>
      setLayout(
        new URLSearchParams(window.location.search).get("v") === "2" ? 1 : 0,
      );
    window.addEventListener("popstate", syncLayout);
    return () => window.removeEventListener("popstate", syncLayout);
  }, []);
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
            <a href="#projects">Products</a>
            <a href="#about">About</a>
            <a href="#other">Other work</a>
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
        <div key={layout}>
          {layout === 0 ? <IllustratedLayout /> : <SplitLayout />}
        </div>
        <section
          className="compact-contact page-width"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div>
            <p className="eyebrow">Say hello</p>
            <h2 id="contact-title">Let’s make something.</h2>
          </div>
          <a href={email.url} className="button button-yellow">
            Email me <ArrowUpRight size={20} />
          </a>
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
      <LayoutPicker value={layout} onChange={changeLayout} />
    </div>
  );
}
