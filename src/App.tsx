import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import SplitLayout from "./layouts/SplitLayout";

export default function App() {
  const [nightMode, setNightMode] = useState(
    () => document.documentElement.dataset.theme === "night",
  );

  useEffect(() => {
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", nightMode ? "#143c6b" : "#69a2eb");
  }, [nightMode]);

  function toggleTheme() {
    const nextNightMode = !nightMode;
    document.documentElement.dataset.theme = nextNightMode ? "night" : "day";
    setNightMode(nextNightMode);
  }

  return (
    <div className="site site--split">
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
        <SplitLayout />
      </main>
    </div>
  );
}
