import {
  BookOpen,
  Github,
  Linkedin,
  Mail,
  type LucideIcon,
} from "lucide-react";
import { PROFILE } from "../constants";

const icons: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  scholar: BookOpen,
};

export default function SocialLinks() {
  return (
    <div className="social-links">
      {PROFILE.socials.map((social) => {
        const Icon = icons[social.iconName] ?? Mail;
        return (
          <a
            key={social.platform}
            href={social.url}
            aria-label={social.platform}
            title={social.platform}
            target={social.iconName === "mail" ? undefined : "_blank"}
            rel={social.iconName === "mail" ? undefined : "noreferrer"}
          >
            <Icon size={19} strokeWidth={1.8} />
          </a>
        );
      })}
    </div>
  );
}
