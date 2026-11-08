import { MapPin } from "lucide-react";
import { PROFILE } from "../constants";
import {
  MountainLandscape,
  Satellite,
  Sparkle,
  Ufo,
} from "../components/Illustrations";
import SocialLinks from "../components/SocialLinks";
import ProjectGrid from "../components/ProjectGrid";
import GithubActivity from "../components/GithubActivity";
import AboutSummary from "../components/AboutSummary";
import PublicationList from "../components/PublicationList";

export default function SplitLayout() {
  return (
    <div className="split-world" id="home">
      <div className="split-backdrop" aria-hidden="true">
        <Ufo className="sky-ufo sky-ufo--large" />
        <Ufo className="sky-ufo sky-ufo--small" />
        <Satellite className="sky-satellite" />
        <Sparkle className="sky-sparkle sky-sparkle--one" />
        <Sparkle className="sky-sparkle sky-sparkle--two" />
        <Sparkle className="sky-sparkle sky-sparkle--three" />
        <span className="sky-star sky-star--one" />
        <span className="sky-star sky-star--two" />
        <span className="sky-star sky-star--three" />
        <MountainLandscape />
      </div>
      <div className="page-width split-layout">
        <div className="founder-column">
          <aside className="founder-profile" aria-label="About Bill">
            <div className="founder-scene">
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
          <AboutSummary />
        </div>
      </div>
    </div>
  );
}
