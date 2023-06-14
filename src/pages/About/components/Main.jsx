import React from "react";

import Cards from "./Cards";
import OverView from "./Overview";
import ProjectGallery from "../../../components/project-gallery/ProjectGallery";

const Main = () => {
  return (
    <div className="flex-grow">
      <OverView />
      <Cards />
      <ProjectGallery />
    </div>
  );
};

export default Main;
