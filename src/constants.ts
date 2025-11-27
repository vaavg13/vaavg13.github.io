import { Profile, Project, Publication } from './types';
import avatarImg from './assets/images/profile.jpeg';

// ==========================================
// EDIT YOUR DETAILS HERE
// ==========================================

export const PROFILE: Profile = {
  name: "Vasilis Avgerinos",
  title: "PHD student at UPC",
  tagline: "Working on Intelligent Cloud-Edge Systems through Agentic LLM-Powered Autonomy",
  location: "Athens, Greece",
  avatarUrl: avatarImg,
  about: `I am a researcher in AI-driven cloud–edge systems and next-generation telecommunications, currently contributing to Horizon Europe projects and advancing my PhD work at Athena Research Center & Universitat Politècnica de Catalunya (UPC). My research focuses on agentic LLM-powered systems for adaptive and resilient distributed deployments, particularly in intent-based and SLA-aware management. Beyond collaborative research, I actively pursue personal projects in AI model adaptation and fine-tuning, exploring PEFT methods for Transformer-based models. Additionally, I have designed systems to improve performance in tasks like research indexing and knowledge extraction, structuring scientific content to enable more efficient access and retrieval by LLMs.`,
  socials: [
    { platform: "GitHub", url: "https://github.com/vaavg13", iconName: "github" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/vasilis-avgerinos-09468425a/", iconName: "linkedin" },
    { platform: "Google Scholar", url: "https://scholar.google.com/citations?user=ZypVDRAAAAAJ&hl=en", iconName: "scholar" },
    { platform: "Email", url: "mailto:x.v.avgerinos@gmail.com", iconName: "mail" },
  ]
};

export const PUBLICATIONS: Publication[] = [
  {
    id: "p1",
    title: "Workload Prediction for Volatile Nodes in Multi-Access Edge Networks",
    authors: "V. Avgerinos, K. Ramantas, A. Ksentini, L. Alonso, C. Verikoukis",
    conference: "IEEE ICC 2025",
    year: 2025,
    url: "https://ieeexplore.ieee.org/abstract/document/11162043",
    tags: ["Semantic Comms", "LLM", "6G"]
  },
  // {
  //   id: "p2",
  //   title: "Deep Reinforcement Learning for Massive MIMO Beamforming",
  //   authors: "V. Avgerinos, J. Doe",
  //   conference: "NeurIPS Workshop on AI for Science",
  //   year: 2023,
  //   url: "#",
  //   tags: ["RL", "MIMO", "Optimization"]
  // },
];

export const PROJECTS: Project[] = [
  {
    id: "prj1",
    title: "Code Names LLM Arena",
    description: "Namesbench evaluates a pair of LangChain agents (spymaster + player) that play a Codenames-style game using Dixit artwork. The objective is to reveal every friendly card in as few rounds as possible while avoiding opponent hits.",
    techStack: ["Python", "Langchain"],
    repoUrl: "https://github.com/vaavg13/codenames-llm-arena",
    imageUrl: "#"
  },
  // {
  //   id: "prj2",
  //   title: "LLM-Net-Optimizer",
  //   description: "An agentic workflow using Gemini 1.5 Pro to automatically tune network parameters based on log anomaly detection.",
  //   techStack: ["TypeScript", "LangChain", "Gemini API"],
  //   repoUrl: "https://github.com",
  //   imageUrl: "https://picsum.photos/601/400"
  // },
  // {
  //   id: "prj3",
  //   title: "SignalGAN",
  //   description: "Generating realistic channel state information (CSI) datasets using Generative Adversarial Networks for training robust channel estimators.",
  //   techStack: ["TensorFlow", "GANs", "MATLAB"],
  //   repoUrl: "https://github.com",
  //   imageUrl: "https://picsum.photos/602/400"
  // }
];