import { useCallback, useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
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

  useEffect(() => {
    const color =
      layout === 1
        ? nightMode
          ? "#143c6b"
          : "#69a2eb"
        : nightMode
          ? "#182b38"
          : "#f8f4e9";
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", color);
  }, [layout, nightMode]);

  function toggleTheme() {
    const nextNightMode = !nightMode;
    document.documentElement.dataset.theme = nextNightMode ? "night" : "day";
    setNightMode(nextNightMode);
  }

  return (
    <div className={`site${layout === 1 ? " site--split" : ""}`}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="theme-control">
        <button
          className="theme-button"
          type="button"
          onClick={toggleTheme}
          aria-pressed={nightMode}
          aria-label={nightMode ? "Switch to day mode" : "Switch to night mode"}
          title={nightMode ? "Switch to day mode" : "Switch to night mode"}
        >
          {nightMode ? <Sun size={20} /> : <Moon size={19} />}
        </button>
      </div>
      <main id="main" tabIndex={-1}>
        <div key={layout}>
          {layout === 0 ? <IllustratedLayout /> : <SplitLayout />}
        </div>
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
