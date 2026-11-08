export interface SocialLink {
  platform: string;
  url: string;
  iconName: "github" | "linkedin" | "mail" | "twitter";
}

export interface Profile {
  name: string;
  tagline: string;
  affiliation: string;
  aboutLead: string;
  focusAreas: string[];
  about: string;
  location: string;
  avatarUrl: string;
  socials: SocialLink[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  conference: string;
  year: number;
  url?: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  status: string;
  illustration: "memory" | "companies" | "world" | "library" | "arena";
  description: string;
  logo?: string;
  recognition?: {
    label: string;
    period: string;
    logo: string;
    url: string;
  };
  tags: string[];
  siteUrl?: string;
  repoUrl?: string;
}
