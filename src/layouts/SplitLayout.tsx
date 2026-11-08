import { MapPin } from "lucide-react";
import { PROFILE } from "../constants";
import { Sparkle } from "../components/Illustrations";
import SiteBackdrop from "../components/SiteBackdrop";
import SocialLinks from "../components/SocialLinks";
import ProjectGrid from "../components/ProjectGrid";
import GithubActivity from "../components/GithubActivity";
import AboutSummary from "../components/AboutSummary";
import PublicationList from "../components/PublicationList";
import ReadingCard from "../components/ReadingCard";

export default function SplitLayout() {
  return (
    <div className="split-world" id="home">
      <SiteBackdrop />
      <div className="page-width split-layout">
        <div className="founder-column">
          <aside className="founder-profile" aria-label="About Bill">
            <div className="founder-scene">
              <figure className="portrait-postcard">
                <div className="portrait-tape" aria-hidden="true" />
                <div className="portrait-window">
                  <img
                    src={PROFILE.avatarUrl}
                    alt={`${PROFILE.name} smiling in mirrored sunglasses against a blue background`}
                    width="768"
                    height="768"
                    fetchPriority="high"
                  />
                </div>
                <figcaption>
                  <span>blip blop. allegedly human.</span>
                  <Sparkle />
                </figcaption>
              </figure>
            </div>
            <h1>
              Bill Avgerinos<span>.</span>
            </h1>
            <p className="founder-intro">{PROFILE.tagline}</p>
            <p className="founder-location">
              <MapPin size={14} />
              {PROFILE.location}
            </p>
            <SocialLinks />
          </aside>
        </div>
        <div className="split-content">
          <ProjectGrid />
          <GithubActivity />
          <PublicationList />
          <div className="personal-grid">
            <AboutSummary />
            <ReadingCard />
          </div>
        </div>
      </div>
    </div>
  );
}
