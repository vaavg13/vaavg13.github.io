import { MountainLandscape, Satellite, Sparkle, Ufo } from "./Illustrations";

export default function SiteBackdrop() {
  return (
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
  );
}
