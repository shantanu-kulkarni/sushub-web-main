import React from "react";
import {
  projectListSectionTitle,
  projectListSectionDescription,
} from "../ProjectListConstants";
const ProjectListSection = () => {
  return (
    <div>
      <div className="global-subtitle">
        {projectListSectionTitle}
      </div>
      <div className="global-subtitle-description">
        {projectListSectionDescription}
      </div>
    </div>
  );
};

export default ProjectListSection;
