"use client";
import React, { useContext } from "react";
import { useEffect, useState } from "react";
import projects from "../../../../utils/ProjectData";
import Pagination from "../../../global/pagination/Pagination";
import ProjectTypeInfoCard from "./project-types/ProjectTypeInfoCard";
import ProjectListPageHeader from "./ProjectListPageHeader";
import projectListFilters from "./project-filter/ProjectListFiltering";
import { projectChips, sdgChips } from "./ProjectListConstants";
import ProjectFilters from "./project-filter/ProjectFilters";
import ProjectListSection from "./project-filter/ProjectListSection";
import ProjectCard from "../project-utils/ProjectCard";
import { ProjectContext } from "@/context/ProjectContext";
import { projectViews } from "@/app/schema/Project";
import { AuthContext } from "@/context/AuthContext";

const ProjectList = () => {
  const {verifiedProjects} = useContext(ProjectContext);
  const {currentUser} = useContext(AuthContext);
  const [selectedChips, setSelectedChips] = useState(["Upcoming"]);
  const [selectedSDGChips, setSelectedSDGChips] = useState([]);
  const [currentFilteredProjects, setCurrentFilteredProjects] = useState(
    Array.from(new Set([...verifiedProjects]))
  );
  const toggleChip = (chip) => {

    setSelectedChips((chipList) => {
      if (chipList.includes(chip)) {
        return chipList.filter((item) => item !== chip);
      } else {
        return [...chipList, chip];
      }
    });
  };

  const toggleSdgChip = (chip) =>{
    setSelectedSDGChips((chipList) => {
      if (chipList.includes(chip)) {
        return chipList.filter((item) => item !== chip);
      } else {
        return [...chipList, chip];
      }
    });
  }
  useEffect(() => {
    const updatedProjectsList = projectListFilters(verifiedProjects, selectedChips, selectedSDGChips);
    setCurrentFilteredProjects(Array.from(new Set([...updatedProjectsList])));
    //console.log("UPDATED PROJECT LIST>>>>", updatedProjectsList);
  }, [selectedChips, selectedSDGChips, verifiedProjects]);

  if (verifiedProjects == []) {
    return;
  }
  return (
    <div className="my-1 mt-2 xs:mt-4 xs:my-2 md:m-4 md:mt-8">
      <div className=" flex flex-col">
        <div className="flex justify-center">
          <div className="global-box-layout">
            <ProjectListPageHeader />
            <ProjectTypeInfoCard />
            <div className="rounded-3xl bg-default-100/50 px-4 xs:px-4 md:px-8 pb-8 pt-4 mt-8 shadow-md">
              <ProjectListSection />
              <ProjectFilters
                projectChips={projectChips}
                sdgChips={sdgChips}
                selectedChips={selectedChips}
                selectedSDGChips={selectedSDGChips}
                toggleChipValue={toggleChip}
                toggleSDGChipValue={toggleSdgChip}
              />
              <Pagination
                listOfItems={currentFilteredProjects}
                noSearchResultsAnimationTitle={"No Results Found!"}
                noSearchResultsAnimationDescription={
                  "It's pretty much empty here! Your search results didn't yeild any results! Maybe, try searching some different categories or try changing your filters."
                }
              >
                {(item) => <ProjectCard key={item.project_id} currentProject={item} currentProjectView={projectViews.PROJECTLIST}/>}
              </Pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
