import React, { useContext } from "react";
import CustomPagination from "@/components/global/pagination/Pagination";
import projects from "@/utils/ProjectData";
import ProjectCard from "@/components/pages/project/project-utils/ProjectCard";
import { ProjectContext } from "@/context/ProjectContext";
import { projectViews } from "@/app/schema/Project";
const VerifyProjects = () => {
  const { unverifiedProjects } = useContext(ProjectContext);
  if (unverifiedProjects == []) {
    return;
  }
  return (
    <CustomPagination
      listOfItems={unverifiedProjects}
      noSearchResultsAnimationTitle={"No Results Found!"}
      noSearchResultsAnimationDescription={
        "It's pretty much empty here! Your search results didn't yeild any results! Maybe, try searching some different categories or try changing your filters."
      }
    >
      {(projectItem) => (
        <ProjectCard
          key={projectItem.project_id}
          currentProject={projectItem}
          currentProjectView={projectViews.VERIFY}
          isModerator={true}
          isArchive={false}
          isVerify={true}
        />
      )}
    </CustomPagination>
  );
};

export default VerifyProjects;
