import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";
import CopyEmailButton from "./CopyEmailButton";
import { PROFILE } from "../constants";

const icons: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export default function SocialLinks() {
  return (
    <div className="social-links">
      {PROFILE.socials.map((social) => {
        if (social.iconName === "mail") {
          return (
            <CopyEmailButton
              key={social.platform}
              address={social.url.replace(/^mailto:/, "")}
            />
          );
        }
        const Icon = icons[social.iconName] ?? Mail;
        return (
          <a
            key={social.platform}
            href={social.url}
            className="button button-yellow"
            aria-label={social.platform}
            title={social.platform}
            target="_blank"
            rel="noreferrer"
          >
            {social.iconName === "twitter" ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l8.2-9.4L.8 2h6.5l4.4 6.8L18.9 2Zm-1.1 18h1.7L6.3 3.9H4.5L17.8 20Z" />
              </svg>
            ) : (
              <Icon size={19} strokeWidth={1.8} />
            )}
          </a>
        );
      })}
    </div>
  );
}
