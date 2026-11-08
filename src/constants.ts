import { Profile, Project, Publication } from "./types";
import avatarImg from "./assets/images/profile.jpeg";

// ==========================================
// EDIT YOUR DETAILS HERE
// ==========================================

export const PROFILE: Profile = {
  name: "Bill Avgerinos",
  title: "Founder & AI engineer",
  tagline: "Building Skilltap and Trailblazer. Turning ideas into products.",
  affiliation: "Building from Athens",
  location: "Athens, Greece",
  avatarUrl: avatarImg,
  aboutLead:
    "I’m an AI Engineer at Tapforce, building AI systems for education and knowledge work.",
  about: `My work spans book ingestion, semantic indexing, and retrieval, alongside tools that turn educational content into slides, videos, and interactive learning experiences.

Outside of work, I’m building Skilltap and Trailblazer. I previously worked on One Realm and ran Citely, an academic literature platform. I like working across the product and the engineering, from shaping an idea to building the systems that make it work.`,
  focusAreas: ["Applied AI", "Knowledge systems", "Product engineering"],
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/vaavg13",
      iconName: "github",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/vasilis-avgerinos-09468425a/",
      iconName: "linkedin",
    },
    {
      platform: "Google Scholar",
      url: "https://scholar.google.com/citations?user=ZypVDRAAAAAJ&hl=en",
      iconName: "scholar",
    },
    {
      platform: "Email",
      url: "mailto:x.v.avgerinos@gmail.com",
      iconName: "mail",
    },
  ],
};

export const PUBLICATIONS: Publication[] = [
  {
    id: "p1",
    title:
      "Workload Prediction for Volatile Nodes in Multi-Access Edge Networks",
    authors: "V. Avgerinos, K. Ramantas, A. Ksentini, L. Alonso, C. Verikoukis",
    conference: "IEEE ICC 2025",
    year: 2025,
    url: "https://ieeexplore.ieee.org/abstract/document/11162043",
    tags: ["GNN", "Time series Forecasting", "6G"],
  },
  {
    id: "p2",
    title:
      "ARM: Autonomous Remediation & Management with LLM Agents for Intent-Driven Control",
    authors: "V. Avgerinos, K. Ramantas, L. Alonso, C. Verikoukis",
    conference: "IEEE Internet of Things Journal",
    year: 2026,
    url: "https://ieeexplore.ieee.org/document/11316483",
    tags: ["LLM", "AIops", "Agentic remediation"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "skilltap",
    title: "Skilltap",
    category: "Team knowledge",
    status: "Coming soon",
    illustration: "memory",
    logo: "/logos/skilltap.svg",
    description:
      "Shared memory for teams and their AI agents. Lessons learned once, reused across the team.",
    tags: ["AI agents", "Team memory", "Developer tools"],
  },
  {
    id: "trailblazer",
    title: "Trailblazer",
    category: "Company intelligence",
    status: "Under development",
    illustration: "companies",
    logo: "/logos/trailblazer.svg",
    description:
      "Company intelligence, from registry records to useful research and lead discovery.",
    tags: ["Company data", "Data pipelines", "Applied AI"],
  },
  {
    id: "one-realm",
    title: "One Realm",
    category: "Worldbuilding & tabletop",
    status: "Previous work",
    illustration: "world",
    logo: "/logos/one-realm.svg",
    description:
      "Worldbuilding and tabletop tools. I worked on the product and AI-assisted play.",
    tags: ["Worldbuilding", "Tabletop", "AI tools"],
    siteUrl: "https://one-realm.com",
  },
  {
    id: "citely",
    title: "Citely",
    category: "Research tools",
    status: "Past venture",
    illustration: "library",
    logo: "/logos/citely.svg",
    description:
      "An AI-powered academic literature platform I ran a few years back.",
    tags: ["Literature discovery", "Knowledge graphs", "AI"],
  },
  {
    id: "codenames",
    title: "Code Names LLM Arena",
    category: "Open-source experiment",
    status: "Open source",
    illustration: "arena",
    description:
      "A Codenames-style game where a pair of LLM agents play spymaster and guesser using Dixit artwork. An experiment in agent communication, reasoning, and coordination.",
    tags: ["Python", "LangChain", "Multi-agent systems"],
    repoUrl: "https://github.com/vaavg13/codenames-llm-arena",
  },
];
