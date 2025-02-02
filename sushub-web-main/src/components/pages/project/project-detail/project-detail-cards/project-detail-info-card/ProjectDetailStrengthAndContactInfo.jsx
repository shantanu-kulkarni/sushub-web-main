import React from "react";
import Link from "next/link";
import { MdGroup } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import {
  detailPagePositionsFilledLabel,
  detailPageEmailOrganizerLabel,
} from "../../ProjectDetailConstants";

const ProjectDetailStrengthAndContactInfo = (props) => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="flex flex-1 items-center">
        <div className="px-2">
          <MdGroup size={20} />
        </div>
        {props.currentRegisteredPeople.length}/{props.maxPeople}
        {detailPagePositionsFilledLabel}
      </div>
      <div className="flex flex-1 items-center">
        <div className="px-2">
          <MdOutlineEmail size={20} />
        </div>
        <Link href={`mailto:${props.organizationEmail}`}>
          {props.organizationEmail}
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetailStrengthAndContactInfo;
