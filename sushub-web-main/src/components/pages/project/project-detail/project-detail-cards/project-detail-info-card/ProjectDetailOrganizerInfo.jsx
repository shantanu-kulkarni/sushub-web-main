import React from "react";
import { detailPageOrganizerNameLabel } from "../../ProjectDetailConstants";

const ProjectDetailOrganizerInfo = (props) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <div className="text-md text-white/60 text-medium xs:text-medium md:text-lg">
            {detailPageOrganizerNameLabel}
          </div>
          <div className=" text-white w-full text-medium xs:text-medium md:text-xl font-semibold">
            {props.organizationName}
          </div>
        </div>
        <div className="w-full md:w-1/2 text-lg text-white flex items-center justify-start md:justify-end">
          <div
            class={`h-4 w-4 ${
              props.projectType == 0 
                ? "bg-blue-500"
                : props.projectType == 1
                ? "bg-yellow-500"
                : "bg-green-500"
            } rounded-full`}
          ></div>

          <div className="px-2 pb-1">{props.projectType == 0 ? "Project" : props.projectType == 1 ? "Project Idea" : "Project Group" }</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailOrganizerInfo;
