import React from "react";
import { Button, Popover, PopoverTrigger } from "@nextui-org/react";
import ProjectTypeInfo from "./ProjectTypeInfo";
import ProjectIdeaTypeInfo from "./ProjectIdeaTypeInfo";
import ProjectGroupTypeInfo from "./ProjectGroupTypeInfo";
import {
  projectTypeInfoCardTitle,
  projectTypeInfoCardDescription,
} from "./ProjectTypeConstants";

const ProjectTypeInfoCard = () => {

  const projectTypePopup = [
    { title: "Project", popup: <ProjectTypeInfo />, color: "bg-blue-500" },
    { title: "Project Idea", popup: <ProjectIdeaTypeInfo />, color: "bg-yellow-500" },
    { title: "Project Group", popup: <ProjectGroupTypeInfo />, color: "bg-green-500" },
  ];

  return (
    <div className="rounded-3xl bg-default-100/50 px-4 xs:px-4 md:px-8 pb-8 pt-2 xs:pt-4 mt-4 xs:mt-8 shadow-md">
      <div className="text-black font-semibold text-lg xs:text-lg md:text-xl">
        {projectTypeInfoCardTitle}
      </div>
      <div className="text-black/30 flex items-center text-sm xs:text-sm md:text-md font-semibold pb-4 pt-1 w-full h-full md:w-2/3">
        {projectTypeInfoCardDescription}
      </div>
      <div className="flex flex-col xs:flex-row h-20 md:h-32 justify-center mt-8 mb-4 md:mt-8">
        {projectTypePopup.map((currentType, index) => {
          return (
            <div key={index} className="w-full xs:w-1/3 lg:w-1/4 xs:h-full my-1 xs:mx-1 md:mx-2">
              <Popover key="blur" offset={10} placement="top" backdrop="blur">
                <PopoverTrigger>
                  <Button
                    color="default"
                    variant="flat"
                    className={`capitalize line-clamp-1 w-full xs:h-full xs:aspect-video text-sm xs:text-sm md:text-xl font-normal s:font-bold ${currentType.color} text-white shadow-md hover:scale-105`}
                  >
                    {currentType.title}
                  </Button>
                </PopoverTrigger>
                {currentType.popup}
              </Popover>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectTypeInfoCard;
