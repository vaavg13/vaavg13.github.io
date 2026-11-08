import type { Project } from "../types";
import { ArenaSketch, NetworkSketch } from "./Illustrations";

const drawings = {
  world: (
    <>
      <circle cx="345" cy="86" r="28" fill="var(--yellow)" />
      <path
        d="m63 92 116-27 119 37 116-24v169l-116 27-119-37-116 24Z"
        fill="var(--illustration-paper)"
        stroke="var(--line)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M179 65v172m119-135v172" stroke="var(--line)" strokeWidth="2" />
      <path
        d="m82 187 39-65 41 68m34 13 40-56 45 72m35-4 39-77 41 65"
        fill="var(--sage)"
        stroke="var(--line)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m110 225 36-19 75 21 45-24 73 32 41-17"
        stroke="var(--line)"
        strokeWidth="2"
        strokeDasharray="5 5"
        strokeLinecap="round"
      />
      <path
        d="m239 99 4 14 14 4-14 4-4 14-4-14-14-4 14-4Z"
        fill="var(--yellow)"
        stroke="var(--line)"
        strokeWidth="2"
      />
    </>
  ),
  companies: (
    <>
      <path
        d="M100 220h280M145 128l95-45 95 45m-190 0v36m190-36v36m-95-81v81"
        stroke="var(--line)"
        strokeWidth="2"
        strokeDasharray="5 5"
      />
      <rect
        x="72"
        y="165"
        width="110"
        height="86"
        rx="8"
        fill="var(--sage)"
        stroke="var(--line)"
        strokeWidth="2.5"
      />
      <rect
        x="199"
        y="113"
        width="83"
        height="138"
        rx="8"
        fill="var(--illustration-paper)"
        stroke="var(--line)"
        strokeWidth="2.5"
      />
      <rect
        x="298"
        y="165"
        width="110"
        height="86"
        rx="8"
        fill="var(--glass)"
        stroke="var(--line)"
        strokeWidth="2.5"
      />
      <circle
        cx="240"
        cy="63"
        r="27"
        fill="var(--yellow)"
        stroke="var(--line)"
        strokeWidth="2.5"
      />
      <path
        d="m229 63 8 8 14-16M219 139h11m18 0h11m-40 23h11m18 0h11m-40 23h11m18 0h11m-154 4h18m17 0h18m-53 23h18m17 0h18m173-23h18m17 0h18m-53 23h18m17 0h18"
        stroke="var(--line)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M230 251v-33h22v33"
        fill="var(--sage)"
        stroke="var(--line)"
        strokeWidth="2"
      />
    </>
  ),
  library: (
    <>
      <rect
        x="116"
        y="58"
        width="160"
        height="202"
        rx="10"
        transform="rotate(-10 196 159)"
        fill="var(--sage)"
        stroke="var(--line)"
        strokeWidth="2.5"
      />
      <rect
        x="163"
        y="64"
        width="160"
        height="202"
        rx="10"
        transform="rotate(5 243 165)"
        fill="var(--illustration-paper)"
        stroke="var(--line)"
        strokeWidth="2.5"
      />
      <path
        d="m190 103 98 9m-100 11 70 6m-73 23 98 9m-100 11 62 6m-65 22 98 9m-100 11 62 6"
        stroke="var(--line)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="324"
        cy="208"
        r="43"
        fill="var(--glass)"
        stroke="var(--line)"
        strokeWidth="2.5"
      />
      <path
        d="m355 239 32 32"
        stroke="var(--line)"
        strokeWidth="11"
        strokeLinecap="round"
      />
      <path
        d="M315 194h-9v26h9m19-26h9v26h-9"
        stroke="var(--line)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </>
  ),
};

export default function ProjectIllustration({
  kind,
}: {
  kind: Project["illustration"];
}) {
  if (kind === "arena") return <ArenaSketch />;
  if (kind === "memory") return <NetworkSketch />;
  return (
    <svg
      className="platform-sketch"
      viewBox="0 0 480 330"
      fill="none"
      aria-hidden="true"
    >
      <ellipse
        cx="240"
        cy="167"
        rx="194"
        ry="126"
        fill="var(--project-cloud)"
      />
      {drawings[kind]}
    </svg>
  );
}
