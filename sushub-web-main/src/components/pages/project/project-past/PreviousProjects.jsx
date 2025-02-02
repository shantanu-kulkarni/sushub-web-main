"use client";
import React, { useContext } from "react";
import { useEffect, useState } from "react";
import Pagination from "../../../global/pagination/Pagination";
import projectListFilters from "../project-list/project-filter/ProjectListFiltering";
import { projectChips } from "../project-list/ProjectListConstants";
import ProjectFilters from "../project-list/project-filter/ProjectFilters";
import ProjectCard from "../project-utils/ProjectCard";
import { Button } from "@nextui-org/react";
import { MdEvent } from "react-icons/md";
import { useRouter } from "next-nprogress-bar";
import { userData } from "../../../../utils/UserData";
import { UserContext } from "@/context/UserContext";
import { projectViews } from "@/app/schema/Project";
import AccessRestricted from "@/components/global/access-restricted/AccessRestricted";
const PreviousProjects = () => {
  const router = useRouter();
  const { userInfo } = useContext(UserContext);
  if (userInfo == null) {
    return <AccessRestricted />;
  }
  const pastProjects = Object.values(userInfo?.past_projects ?? []);
  return (
    <div className="my-1 mt-2 xs:mt-4 xs:my-2 md:m-4 md:mt-8">
      <div className=" flex flex-col">
        <div className="flex justify-center">
          <div className="global-box-layout">
            <div className=" flex flex-col md:flex-row">
              <div className="w-full flex-col">
                <div className="global-title">
                  {"My Previous Projects"}
                </div>
                <div className="global-title-description">
                  {
                    "You can find the projects that you registered for previously in this section, you can filter the projects based on your choice!"
                  }
                </div>
              </div>
              <div className="global-element-layout">
                <Button
                  className="border-black selection:border-black text-black w-full"
                  variant="bordered"
                  startContent={<MdEvent size={20} className="text-black" />}
                  onClick={() => router.push("list")}
                >
                  {"View Current Projects"}
                </Button>
              </div>
            </div>
            <div className="rounded-3xl bg-default-100/50 px-4 xs:px-4 md:px-8 pb-8 pt-4 mt-8 shadow-md">
              <Pagination
                listOfItems={Object.values(pastProjects)}
                noSearchResultsAnimationTitle={"No Results Found!"}
                noSearchResultsAnimationDescription={
                  "It's pretty much empty here! Your search results didn't yeild any results! Maybe, try searching some different categories or try changing your filters."
                }
              >
                {(item) => (
                  <ProjectCard key={item.project_id} currentProject={item} currentProjectView={projectViews.UNAUTHENTICATED}/>
                )}
              </Pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousProjects;
