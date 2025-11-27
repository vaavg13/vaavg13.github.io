export interface SocialLink {
  platform: string;
  url: string;
  iconName: 'github' | 'linkedin' | 'mail' | 'scholar' | 'twitter';
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
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
  description: string;
  techStack: string[];
  imageUrl?: string;
  repoUrl?: string;
  demoUrl?: string;
}