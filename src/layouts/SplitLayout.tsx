import { MapPin } from "lucide-react";
import { PROFILE } from "../constants";
import { MountainLandscape, Sparkle, Ufo } from "../components/Illustrations";
import SocialLinks from "../components/SocialLinks";
import ProjectGrid from "../components/ProjectGrid";
import AboutSummary from "../components/AboutSummary";
import PublicationList from "../components/PublicationList";

export default function SplitLayout() {
  return (
    <div className="page-width split-layout" id="home">
      <aside className="founder-profile" aria-label="About Bill">
        <div className="founder-scene">
          <Ufo className="founder-ufo" />
          <figure className="portrait-postcard">
            <div className="portrait-tape" aria-hidden="true" />
            <div className="portrait-window">
              <img
                src={PROFILE.avatarUrl}
                alt={`${PROFILE.name} overlooking New York City`}
                width="768"
                height="1024"
                fetchPriority="high"
              />
            </div>
            <figcaption>
              <span>blip blop. allegedly human.</span>
              <Sparkle />
            </figcaption>
          </figure>
          <MountainLandscape />
        </div>
        <h1>
          Bill Avgerinos<span>.</span>
        </h1>
        <p className="founder-role">{PROFILE.title}</p>
        <p className="founder-intro">{PROFILE.tagline}</p>
        <p className="founder-location">
          <MapPin size={14} />
          {PROFILE.location}
        </p>
        <SocialLinks />
      </aside>
      <div className="split-content">
        <ProjectGrid />
        <AboutSummary />
        <PublicationList />
      </div>
    </div>
  );
}
