import React from "react";
import { detailPageSubTitle } from "../ProjectDetailConstants";

const ProjectDetailTitle = ({ currentProjectTitle }) => {
  return (
    <div className="w-full md:w-2/3 flex-col">
      <div className="global-title">
        {currentProjectTitle}
      </div>
      <div className="global-title-description">
        {detailPageSubTitle}
      </div>
    </div>
  );
};

export default ProjectDetailTitle;
