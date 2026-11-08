import { useEffect, useRef, useState, type MouseEvent } from "react";
import { flushSync } from "react-dom";
import { Moon, Sun } from "lucide-react";
import SplitLayout from "./layouts/SplitLayout";
import BooksPage from "./components/BooksPage";

function onBooksPage() {
  return /^\/books(?:\/|$)/.test(window.location.pathname);
}

export default function App() {
  const [isBooksPage, setIsBooksPage] = useState(onBooksPage);
  const homeScrollY = useRef(0);
  const [nightMode, setNightMode] = useState(
    () => document.documentElement.dataset.theme === "night",
  );

  useEffect(() => {
    document.title = isBooksPage ? "Books · Bill Avgerinos" : "Bill Avgerinos";
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", isBooksPage ? "#08090b" : nightMode ? "#143c6b" : "#69a2eb");
  }, [nightMode, isBooksPage]);

  useEffect(() => {
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    function handlePopState() {
      const books = onBooksPage();
      if (books === isBooksPage) return;
      if (books) homeScrollY.current = window.scrollY;
      flushSync(() => setIsBooksPage(books));
      window.scrollTo({ top: books ? 0 : homeScrollY.current, behavior: "instant" });
    }

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.history.scrollRestoration = previousRestoration;
    };
  }, [isBooksPage]);

  function navigate(event: MouseEvent<HTMLDivElement>) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target instanceof Element ? event.target.closest("a") : null;
    if (!link || link.target || link.hasAttribute("download")) return;

    const destination = new URL(link.href);
    if (destination.origin !== window.location.origin || !["/", "/books/"].includes(destination.pathname) || destination.hash) return;
    const enteringBooks = destination.pathname === "/books/";
    if (enteringBooks === isBooksPage) return;

    event.preventDefault();
    if (enteringBooks) homeScrollY.current = window.scrollY;

    function updatePage() {
      window.history.pushState(null, "", destination.pathname);
      flushSync(() => setIsBooksPage(enteringBooks));
      window.scrollTo({ top: enteringBooks ? 0 : homeScrollY.current, behavior: "instant" });
      document.getElementById("main")?.focus({ preventScroll: true });
    }

    if (!enteringBooks || event.detail === 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !document.startViewTransition) {
      updatePage();
      return;
    }

    const bounds = link.getBoundingClientRect();
    const x = bounds.left + bounds.width / 2;
    const y = bounds.top + bounds.height / 2;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
    const root = document.documentElement;
    root.style.setProperty("--portal-x", `${x}px`);
    root.style.setProperty("--portal-y", `${y}px`);
    root.style.setProperty("--portal-radius", `${Math.ceil(radius)}px`);
    root.dataset.pageTransition = "books";

    const transition = document.startViewTransition(updatePage);
    void transition.finished.then(() => {
      delete root.dataset.pageTransition;
      root.style.removeProperty("--portal-x");
      root.style.removeProperty("--portal-y");
      root.style.removeProperty("--portal-radius");
    });
  }

  function toggleTheme() {
    const nextNightMode = !nightMode;
    document.documentElement.dataset.theme = nextNightMode ? "night" : "day";
    setNightMode(nextNightMode);
  }

  return (
    <div className={`site site--split${isBooksPage ? " site--books" : ""}`} onClick={navigate}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      {!isBooksPage ? <div className="theme-control">
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
      </div> : null}
      <main id="main" tabIndex={-1}>
        {isBooksPage ? <BooksPage /> : <SplitLayout />}
      </main>
    </div>
  );
}
