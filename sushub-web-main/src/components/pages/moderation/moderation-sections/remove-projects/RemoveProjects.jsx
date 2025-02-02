import React, { useContext } from "react";
import CustomPagination from "@/components/global/pagination/Pagination";
import projects from "@/utils/ProjectData";
import {
  noEventFoundAnimationTitle,
  noEventFoundAnimationDescription,
} from "@/components/pages/events-and-opportunities/event/EventConstants";
import ProjectCard from "@/components/pages/project/project-utils/ProjectCard";
import { ProjectContext } from "@/context/ProjectContext";
import { projectViews } from "@/app/schema/Project";
const RemoveProjects = () => {
  const { project } = useContext(ProjectContext);
  //console.log("PROJECT VALUE>>>>", project)
  if (project == []) {
    return;
  }
  return (
    <div className="mt-4">
      <div className="mt-2">
        <CustomPagination
          listOfItems={project}
          noSearchResultsAnimationTitle={noEventFoundAnimationTitle}
          noSearchResultsAnimationDescription={noEventFoundAnimationDescription}
        >
          {(projectItem) => (
            <ProjectCard
              key={projectItem.project_id}
              currentProject={projectItem}
              currentProjectView={projectViews.REMOVE}
              isModerator={true}
              isArchive={true}
              isVerify={false}
            />
          )}
        </CustomPagination>
      </div>
    </div>
  );
};

export default RemoveProjects;
