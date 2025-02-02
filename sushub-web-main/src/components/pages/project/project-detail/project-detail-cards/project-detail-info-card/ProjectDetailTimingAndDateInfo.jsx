import React from "react";
import { FaRegCalendar } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import moment from "moment";
const ProjectDetailTimingAndDateInfo = (props) => {
  return (
    <div
      className={`flex flex-col md:flex-row w-full ${
        props.projectType == 0 ? "md:pt-2" : "md:pt-4"
      }`}
    >
      {props.projectType == 0 ? (
        <div className="flex flex-1 items-center">
          <div className="px-2">
            <MdOutlineAccessTime size={20} />
          </div>
          {props.projectTimings}
        </div>
      ) : null}
      <div className="flex flex-1 items-center">
        <div className="px-2">
          <FaRegCalendar size={20} />
        </div>
        {props.projectType != 0 ? "Created on: " : null}
        {moment(props.projectStartDate.toDate()).format("DD-MM-YY") ==
        moment(props.projectEndDate.toDate()).format("DD-MM-YY")
          ? `${moment(props.projectStartDate.toDate()).format("DD-MM-YY")}`
          : `${moment(props.projectStartDate.toDate()).format(
              "DD-MM-YY"
            )} to ${moment(props.projectEndDate.toDate()).format("DD-MM-YY")} `}
        {props.projectDates}
      </div>
    </div>
  );
};

export default ProjectDetailTimingAndDateInfo;
