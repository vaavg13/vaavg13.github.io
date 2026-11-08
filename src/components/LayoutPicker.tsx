import { useEffect, useLayoutEffect, useRef } from "react";

export type LayoutVariant = 0 | 1;
const variants = ["Illustrated", "Split"];

export default function LayoutPicker({
  value,
  onChange,
}: {
  value: LayoutVariant;
  onChange: (value: LayoutVariant) => void;
}) {
  const picker = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    function measure() {
      const active =
        picker.current?.querySelector<HTMLElement>("[data-active]");
      const highlight = picker.current?.querySelector<HTMLElement>(
        ".proto-picker-highlight",
      );
      if (active && highlight) {
        highlight.style.width = `${active.offsetWidth}px`;
        highlight.style.transform = `translateX(${active.offsetLeft}px)`;
      }
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [value]);
  useEffect(() => {
    let secondFrame = 0;
    const firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() =>
        picker.current?.setAttribute("data-ready", ""),
      );
    });
    return () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
    };
  }, []);
  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const target = event.target;
      if (
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        event.shiftKey ||
        (target instanceof HTMLElement &&
          (target.isContentEditable ||
            target.closest("[data-keyboard-navigation]") ||
            /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)))
      )
        return;
      if (event.key === "1" || event.key === "2") {
        event.preventDefault();
        onChange(event.key === "1" ? 0 : 1);
      } else if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        onChange(value === 0 ? 1 : 0);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [value, onChange]);
  return (
    <nav className="proto-picker" aria-label="Prototype variants" ref={picker}>
      <span className="proto-picker-highlight" aria-hidden="true" />
      {variants.map((name, index) => (
        <button
          type="button"
          key={name}
          className="proto-picker-item"
          data-active={value === index ? "" : undefined}
          aria-current={value === index ? "true" : undefined}
          onClick={() => onChange(index as LayoutVariant)}
        >
          {name}
        </button>
      ))}
    </nav>
  );
}
