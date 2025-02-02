import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const ProjectDetailLocationInfo = (props) => {
  return (
    <div className=" text-lg text-white/60 w-full flex flex-row justify-start items-center md:pt-2">
      <div className="px-2">
        <IoLocationOutline size={20} />
      </div>
      {props.projectLocation}
    </div>
  );
};

export default ProjectDetailLocationInfo;
