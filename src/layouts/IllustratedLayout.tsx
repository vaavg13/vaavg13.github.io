import Header from "../components/Header";
import ProjectGrid from "../components/ProjectGrid";
import GithubActivity from "../components/GithubActivity";
import AboutSummary from "../components/AboutSummary";
import PublicationList from "../components/PublicationList";

export default function IllustratedLayout() {
  return (
    <>
      <Header />
      <div className="page-width portfolio-content">
        <ProjectGrid />
        <GithubActivity />
        <PublicationList />
        <AboutSummary />
      </div>
    </>
  );
}
