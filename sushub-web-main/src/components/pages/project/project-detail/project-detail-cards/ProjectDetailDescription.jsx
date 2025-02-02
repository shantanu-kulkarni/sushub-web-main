import React from "react";
import { detailPageDescriptionSectionTitle } from "../ProjectDetailConstants";
import { FaRegCircle, FaRegCalendar } from "react-icons/fa6";
import { MdGroup, MdOutlineEmail, MdOutlineAccessTime } from "react-icons/md";
import PaginationControls from "@/components/global/pagination/PaginationControls";
import CustomPagination from "@/components/global/pagination/Pagination";
import { Button } from "@nextui-org/react";
import { Send } from "lucide-react";
import { projectViews } from "@/app/schema/Project";
import ProjectDetailSdgInfo from "./project-detail-info-card/ProjectDetailSdgInfo";
import ProjectDetailOrganizerInfo from "./project-detail-info-card/ProjectDetailOrganizerInfo";
import { IoLocationOutline } from "react-icons/io5";
import moment from "moment";
import Link from "next/link";
const ProjectDetailDescription = ({ currentProject, projectView }) => {
  const sendEmailToAll = () => {
    const mailtoLink = `mailto:${currentProject.project_currentPeople.join(
      ","
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="global-box-layout flex flex-col md:flex-row">
      <div
        className={`${
          projectView == projectViews.MANAGEPROJECT ? "w-full md:w-2/3" : "w-full"
        } mt-8 mb-4 md:mb-16 min-h-96 p-4 rounded-3xl bg-default-100/50 shadow-md flex flex-col`}
      >
        <div className="text-black text-2xl font-bold">
          {detailPageDescriptionSectionTitle}
        </div>
        {/* Fields */}
        <div className="my-8 bg-black border-2 border-black rounded-3xl p-4">
        <div className="flex flex-col md:flex-row w-full text-white">
          <div className="flex flex-1 items-center my-1 md:my-0 truncate overflow-hidden whitespace-nowrap">
            <div className="px-2">
              <MdGroup size={20} />
            </div>
            {currentProject.project_currentPeople.length}/
            {currentProject.project_capacity}
            {" positions filled!"}
          </div>
          <div className="flex flex-1 items-center my-1 md:my-0">
            <div className="px-2">
              <MdOutlineEmail size={20} />
            </div>
            <Link href={`mailto:${currentProject.project_contactEmail}`} className="truncate overflow-hidden whitespace-nowrap">
              {currentProject.project_contactEmail}
            </Link>
          </div>
        </div>
        <div
          className={` text-white flex flex-col md:flex-row w-full ${
            currentProject.project_type == 0 ? "md:pt-2" : "md:pt-4"
          }`}
        >
          {currentProject.project_type == 0 ? (
            <div className="flex flex-1 items-center my-1 md:my-0">
              <div className="px-2">
                <MdOutlineAccessTime size={20} />
              </div>
              {currentProject.project_timings}
            </div>
          ) : null}
          <div className="flex flex-1 items-center my-1 md:my-0">
            <div className="px-2">
              <FaRegCalendar size={20} />
            </div>
            {currentProject.project_type != 0 ? "Created on: " : null}
            {moment(currentProject.project_startDate.toDate()).format(
              "DD-MM-YY"
            ) ==
            moment(currentProject.project_endDate.toDate()).format("DD-MM-YY")
              ? `${moment(currentProject.project_startDate.toDate()).format(
                  "DD-MM-YY"
                )}`
              : `${moment(currentProject.project_endDate.toDate()).format(
                  "DD-MM-YY"
                )} to ${moment(currentProject.project_endDate.toDate()).format(
                  "DD-MM-YY"
                )} `}
          </div>
        </div>
        <div className=" text-white w-full flex flex-row justify-start items-center md:pt-2 my-1 md:my-0">
          <div className="px-2">
            <IoLocationOutline size={20} />
          </div>
          {currentProject.project_place}
        </div>
        </div>
        {/* Fields End Here */}
        {currentProject.project_type == 0 ? (
          <div className="py-2 text-black/60 text-md flex flex-row">
            <div className="flex justify-center items-center">
              <div className="text-black">
                <FaRegCircle size={20} />
              </div>
              <div className="ml-2 font-bold text-black">{`Special Notes:`}</div>
              <div className="px-1 font-semibold">
                {currentProject.project_specialNote}
              </div>
            </div>
          </div>
        ) : null}
        <div className="py-4 text-black/60 text-xl font-bold">
          Project Description
        </div>
        <div className="text-black/60 font-medium text-left">
          <p>{currentProject.project_description}</p>
        </div>
      </div>
      {projectView == projectViews.MANAGEPROJECT ? (
        <div className="w-full md:w-1/3 mt-8 mb-16 min-h-96 p-4 rounded-3xl bg-default-100/50 shadow-md flex flex-col md:m-2">
          <div className="text-black text-2xl font-bold">Participants</div>
          <div className="text-black/60 font-medium text-left text-md">
            <p>
              Know the participants and email them straight to confirm their
              participation!
            </p>
          </div>
          <div>
            <Button
              variant="default"
              className="bg-black text-white w-full my-4"
              onClick={sendEmailToAll}
              startContent={<Send size={20} />}
            >
              Email Everyone!
            </Button>
          </div>
          <CustomPagination
            listOfItems={currentProject.project_currentPeople}
            noSearchResultsAnimationTitle={"No Results Found!"}
            noSearchResultsAnimationDescription={
              "It's pretty much empty here! Your search results didn't yeild any results! Maybe, try searching some different categories or try changing your filters."
            }
          >
            {(item) => <ParticipantEmailCard email={item} />}
          </CustomPagination>
        </div>
      ) : null}
    </div>
  );
};

export default ProjectDetailDescription;

const ParticipantEmailCard = ({ email }) => {
  const sendEmailToParticipant = (email) => {
    window.location = `mailto:${email}`;
  };
  return (
    <div className="w-full my-1 p-4 rounded-xl bg-default-100/50 shadow-md flex flex-row">
      <div className="w-2/3 text-black flex items-center truncate overflow-hidden whitespace-nowrap">{email}</div>
      <div className="w-1/3 flex justify-end">
        <Button
          startContent={<Send size={20} />}
          className="text-white bg-black"
          size="sm"
          onClick={() => sendEmailToParticipant(email)}
        ></Button>
      </div>
    </div>
  );
};
