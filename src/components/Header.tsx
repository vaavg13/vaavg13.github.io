import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import { PROFILE } from "../constants";
import { MountainLandscape, Satellite, Sparkle, Ufo } from "./Illustrations";

export default function Header() {
  return (
    <header className="hero" id="home">
      <div className="hero-stars" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="page-width hero-content">
        <div className="hero-copy">
          <h1>
            Bill
            <br />
            <span>
              Avgerinos<span className="name-period">.</span>
            </span>
          </h1>
          <p className="hero-role">Researcher & engineer</p>
          <p className="hero-description">
            Agentic AI & intelligent cloud–edge systems.
          </p>
          <div className="hero-actions flex flex-wrap items-center gap-6">
            <a className="button button-yellow" href="#research">
              Explore my work <ArrowDownRight size={20} />
            </a>
            <a
              className="text-link"
              href={PROFILE.socials[0].url}
              target="_blank"
              rel="noreferrer"
            >
              Find me on GitHub <ArrowUpRight size={17} />
            </a>
          </div>
          <p className="hero-affiliation">
            <span className="status-dot" />
            PhD researcher · UPC & Athena Research Center
          </p>
        </div>
        <div className="portrait-scene">
          <Satellite className="hero-satellite" />
          <div className="hero-ufo">
            <Ufo />
          </div>
          <Sparkle className="portrait-sparkle" />
          <div className="portrait-orbit" aria-hidden="true" />
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
          <div className="location-stamp">
            <MapPin size={14} />
            <span>{PROFILE.location}</span>
          </div>
        </div>
      </div>
      <MountainLandscape />
    </header>
  );
}
