import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import ProjectDetailOrganizerInfo from "./ProjectDetailOrganizerInfo";
import ProjectDetailTimingAndDateInfo from "./ProjectDetailTimingAndDateInfo";
import ProjectDetailStrengthAndContactInfo from "./ProjectDetailStrengthAndContactInfo";
import ProjectDetailLocationInfo from "./ProjectDetailLocationInfo";
import ProjectDetailSdgInfo from "./ProjectDetailSdgInfo";

const ProjectDetailInfoCard = (props) => {
  return (
    <Card
      className={`w-full md:w-2/3 flex h-auto rounded-3xl bg-black px-4 py-2 mt-8 md:ml-8 shadow-md`}
    >
      <CardBody>
        <ProjectDetailOrganizerInfo
          organizationName={props.currentProject.project_organizerName}
          projectType={props.currentProject.project_type}
        />
        <div className="rounded-3xl border-2 border-white p-2 mt-4 flex flex-col">
          <div className="text-lg text-white/60 flex flex-row justify-start items-center pt-2">
            <ProjectDetailStrengthAndContactInfo
              currentRegisteredPeople={
                props.currentProject.project_currentPeople
              }
              organizationEmail={props.currentProject.project_contactEmail}
              maxPeople={props.currentProject.project_capacity}
            />
          </div>
          <div className="text-lg text-white/60 flex flex-row justify-start items-center">
            <ProjectDetailTimingAndDateInfo
              projectTimings={props.currentProject.project_timings}
              projectStartDate={props.currentProject.project_startDate}
              projectEndDate={props.currentProject.project_endDate}
              projectType={props.currentProject.project_type}
            />
          </div>

          {props.currentProject.project_type == 0 ? (
            <ProjectDetailLocationInfo
              projectLocation={props.currentProject.project_place}
            />
          ) : null}
          <ProjectDetailSdgInfo
            projectSdgs={props.currentProject.project_sdgs}
            projectType={props.currentProject.project_type}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default ProjectDetailInfoCard;
