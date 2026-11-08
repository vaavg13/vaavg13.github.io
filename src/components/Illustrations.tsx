type IllustrationProps = { className?: string };

export function Sparkle({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 2c1.5 12.5 5.5 16.5 18 18-12.5 1.5-16.5 5.5-18 18C18.5 25.5 14.5 21.5 2 20 14.5 18.5 18.5 14.5 20 2Z"
        fill="currentColor"
        stroke="var(--line)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Ufo({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 180"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m78 106-23 65m68-62-1 66m42-70 23 57"
        stroke="#fff3bd"
        strokeWidth="2"
        strokeLinecap="round"
        opacity=".65"
      />
      <path
        d="M79 71c2-26 18-46 44-46s43 20 45 46"
        fill="var(--glass)"
        stroke="var(--line)"
        strokeWidth="2.5"
      />
      <path
        d="M91 54c5-11 13-16 24-18"
        stroke="#eefbff"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <ellipse
        cx="121"
        cy="83"
        rx="105"
        ry="34"
        fill="var(--yellow)"
        stroke="var(--line)"
        strokeWidth="2.5"
        transform="rotate(8 121 83)"
      />
      <path
        d="M18 77c19 22 76 40 127 39 32 0 60-7 76-20"
        stroke="var(--line)"
        strokeWidth="2"
      />
      <ellipse
        cx="120"
        cy="84"
        rx="41"
        ry="13"
        fill="#b39767"
        stroke="var(--line)"
        strokeWidth="2"
        transform="rotate(8 120 84)"
      />
      <ellipse
        cx="120"
        cy="83"
        rx="15"
        ry="7"
        fill="#fff8cb"
        transform="rotate(8 120 83)"
      />
      <path
        d="m49 80 6 2m121 13 6 2m-93 5 7 1"
        stroke="var(--line)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Satellite({ className }: IllustrationProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 180 160"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m54 84-39 43 10 12 43-34m49-48 39-37 12 9-36 45"
        fill="var(--illustration-paper)"
        stroke="var(--line)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M55 43c-21 15-24 44-8 64 17 22 46 24 66 8 21-16 26-45 10-65-16-21-47-23-68-7Z"
        fill="var(--sage)"
        stroke="var(--line)"
        strokeWidth="2.5"
      />
      <path d="M59 42c-10 23-4 52 19 70" stroke="var(--line)" strokeWidth="2" />
      <ellipse
        cx="96"
        cy="77"
        rx="12"
        ry="16"
        fill="var(--glass)"
        stroke="var(--line)"
        strokeWidth="2.5"
        transform="rotate(-25 96 77)"
      />
      <path
        d="m119 108 24 19m-8-4 10-10"
        stroke="var(--line)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle
        cx="149"
        cy="130"
        r="7"
        fill="var(--illustration-paper)"
        stroke="var(--line)"
        strokeWidth="2.5"
      />
    </svg>
  );
}

export function MountainLandscape() {
  return (
    <svg
      className="mountain-landscape"
      viewBox="0 0 1600 350"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 39 76 88l58-19 108 91 85-22 123 100 93-36 148 101 113-73 108 54 147-119 63 22 120-101 55 9L1501 19l99 42v289H0Z"
        fill="var(--mountain-back)"
        stroke="var(--line)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m0 39 77 49-28 56 85-75-42 104 150-13-10 74 95-96 28 147 95-47L242 326 76 226 0 190Zm1501-20-89 130-5-54-96 126 41-125-121 151-67-60-96 129 245-38 187-125Z"
        fill="var(--mountain-middle)"
      />
      <path
        d="m0 176 93 40 81 58 81-15 127 58 102-14 120 47H0Zm1600-45-109 96-70-13-131 85-87-18-111 69h508Z"
        fill="var(--mountain-front)"
        stroke="var(--line)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m0 270 121 28 79 52H0Zm1600-37-102 77-130 40h232Z"
        fill="var(--mountain-near)"
      />
    </svg>
  );
}

export function NetworkSketch() {
  return (
    <svg
      className="network-sketch"
      viewBox="0 0 300 200"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m44 61 105 38 104-54M149 99l71 66M44 61l31 102 74-64m-74 64 145 2"
        stroke="var(--line)"
        strokeWidth="2"
        strokeDasharray="5 5"
      />
      <circle
        cx="149"
        cy="99"
        r="31"
        fill="var(--yellow)"
        stroke="var(--line)"
        strokeWidth="2.5"
      />
      <path
        d="m137 100 8 8 17-18"
        stroke="var(--line)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="22"
        y="39"
        width="44"
        height="44"
        rx="11"
        fill="var(--glass)"
        stroke="var(--line)"
        strokeWidth="2.5"
      />
      <rect
        x="233"
        y="25"
        width="40"
        height="40"
        rx="20"
        fill="var(--sage)"
        stroke="var(--line)"
        strokeWidth="2.5"
      />
      <rect
        x="55"
        y="145"
        width="40"
        height="35"
        rx="8"
        fill="var(--sage)"
        stroke="var(--line)"
        strokeWidth="2.5"
      />
      <rect
        x="200"
        y="145"
        width="40"
        height="40"
        rx="10"
        fill="var(--glass)"
        stroke="var(--line)"
        strokeWidth="2.5"
      />
      <path
        d="M33 54h22M33 62h13m200-20h14m-7-7v14M66 157h18m-18 8h10m134-5h20m-20 8h12"
        stroke="var(--line)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ArenaSketch() {
  return (
    <svg
      className="arena-sketch"
      viewBox="0 0 480 330"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M49 188c-23-88 28-151 134-135 64-62 173-11 187 55 96 39 70 143-25 151-53 65-184 59-207-1-49 13-84-15-89-70Z"
        fill="var(--project-cloud)"
      />
      <path
        d="M66 72c48-41 144-48 210-12m107 66c43 57 15 121-26 144"
        stroke="var(--line)"
        strokeWidth="1.5"
        strokeDasharray="5 7"
        strokeLinecap="round"
      />
      <g transform="rotate(-12 164 164)">
        <rect
          x="91"
          y="86"
          width="137"
          height="175"
          rx="13"
          fill="var(--illustration-paper)"
          stroke="var(--line)"
          strokeWidth="2.5"
        />
        <rect
          x="102"
          y="98"
          width="115"
          height="124"
          rx="7"
          fill="var(--sage)"
          stroke="var(--line)"
          strokeWidth="2"
        />
        <path
          d="m111 213 33-65 21 33 21-49 23 81"
          fill="#5a8465"
          stroke="var(--line)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle
          cx="135"
          cy="122"
          r="12"
          fill="var(--yellow)"
          stroke="var(--line)"
          strokeWidth="2"
        />
        <path
          d="M132 240h53"
          stroke="var(--line)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>
      <g transform="rotate(12 297 158)">
        <rect
          x="229"
          y="70"
          width="137"
          height="175"
          rx="13"
          fill="var(--illustration-paper)"
          stroke="var(--line)"
          strokeWidth="2.5"
        />
        <rect
          x="240"
          y="82"
          width="115"
          height="124"
          rx="7"
          fill="var(--glass)"
          stroke="var(--line)"
          strokeWidth="2"
        />
        <path
          d="M277 143c0-19 34-19 34 0v23h-34Z"
          fill="var(--yellow)"
          stroke="var(--line)"
          strokeWidth="2"
        />
        <path
          d="M294 117v-9m-22 24h-8m59 0h-8m-30 44v9m19-9v9"
          stroke="var(--line)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="287" cy="145" r="3" fill="var(--line)" />
        <circle cx="302" cy="145" r="3" fill="var(--line)" />
        <path
          d="M268 224h53"
          stroke="var(--line)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>
      <path
        d="m389 49 3 11 11 3-11 3-3 11-3-11-11-3 11-3Zm-329 187 3 11 11 3-11 3-3 11-3-11-11-3 11-3Z"
        fill="var(--yellow)"
        stroke="var(--line)"
        strokeWidth="1.5"
      />
    </svg>
  );
}
