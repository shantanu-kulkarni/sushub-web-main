"use client";
import React, { useContext, useEffect, useState } from "react";
import { Button, Select, SelectItem } from "@nextui-org/react";
import CustomPagination from "@/components/global/pagination/Pagination";
import { useRouter } from "next-nprogress-bar";
import { UserContext } from "@/context/UserContext";
import { AuthContext } from "@/context/AuthContext";
import { PeopleContext } from "@/context/PeopleContext";
import Lottie from "lottie-react";
import {
  MailOpen,
  BadgeCheck,
  Send,
  Settings2,
  FilePlus2,
  UserRoundCheck,
} from "lucide-react";
import ProjectDetailBackButton from "../project-detail/project-detail-header/ProjectDetailBackButton";
import { OrganizerContext } from "@/context/OrganizerContext";
import { ProjectContext } from "@/context/ProjectContext";
import ProjectCard from "../project-utils/ProjectCard";
import { projectViews } from "@/app/schema/Project";
import accessRestricted from "/public/lottie/note-not-found.json";
import AccessRestricted from "@/components/global/access-restricted/AccessRestricted";

const ManageProjects = () => {
  const { people } = useContext(PeopleContext);
  const { userInfo } = useContext(UserContext);
  const { currentUser } = useContext(AuthContext);
  const {currentOrganizer} = useContext(OrganizerContext);
  const {project} = useContext(ProjectContext);
  const [value, setValue] = useState(new Set(["verified"]));
  const [organizerVerifiedProjects, setOrganizerVerifiedProjects] = useState([]);
  const [organizerUnverifiedProjects, setOrganizerUnverifiedProjects] = useState([]);
  const router = useRouter();
  const sendEmailToGreenOffice = () => {
    window.location = "mailto:greenoffice.sustainabilityhub@uni-konstanz.de";
  };
  //console.log("Value: ", [...value.values()][0]);
  const getProjectData = () => {
    let verifiedProjects = [];
    let unverifiedProjects = [];
  
    //console.log("project_id:", project);
    project.forEach((p) => {
      if (currentOrganizer?.organizer_verifiedProjects.includes(p.project_id)) {
        verifiedProjects.push(p);
      }
      if (currentOrganizer?.organizer_unverifiedProjects.includes(p.project_id)) {
        unverifiedProjects.push(p);
      }
    });
  
    return { verifiedProjects, unverifiedProjects };
  };
  

  useEffect(() => {
    const { verifiedProjects, unverifiedProjects } = getProjectData();
    setOrganizerVerifiedProjects(verifiedProjects);
    setOrganizerUnverifiedProjects(unverifiedProjects);
  }, [project]);
  
  if (userInfo && !userInfo.isOrganizer || userInfo == null) {
    return <AccessRestricted />;
  }
  return (
    <div className="my-1 mt-2 xs:mt-4 xs:my-2 md:m-4 md:mt-8">
      <div className=" flex flex-col">
        <ProjectDetailBackButton />
        <div className="flex justify-center">
          <div className="global-box-layout">
            <div className=" flex flex-col md:flex-row">
              <div className="w-full flex-col">
                <div className="global-title">
                  Manage Projects
                </div>
                <div className="global-title-description">
                  Manage the projects that you created and check their
                  verification status and the registered users for your
                  projects.
                </div>
              </div>
              <div className="global-element-layout">
                <Button
                  className="border-black selection:border-black text-black w-full"
                  variant="bordered"
                  startContent={<Send size={20} className="text-black" />}
                  onClick={sendEmailToGreenOffice}
                >
                  {"Have Troubles? Contact Us"}
                </Button>
              </div>
            </div>
            {userInfo && currentOrganizer && <div
              className={`w-full rounded-3xl bg-default-100/50 text-black font-bold text-lg px-4 xs:px-4 md:px-8 pb-4 pt-4 mt-8 shadow-md flex flex-col items-start justify-center gap-2`}
            >
              <div className="global-subtitle">
              {userInfo && `Hey ${userInfo.user_name.split(" ")[0]},`}
              </div>
              <div className="flex flex-row justify-center items-center text-sm xs:text-sm md:text-medium font-semibold">
              <div className="w-auto h-auto p-2">
              <MailOpen size={24} />
              </div>             
              <span className="ml-1 my-4">
                You are a verified organizer. Your <span className="text-blue-500">Organization id</span> is {<span className="text-blue-500">{userInfo && userInfo.organization_id}</span>}. You currently have <span className="text-green-500">{currentOrganizer && currentOrganizer.organizer_verifiedProjects.length} verified</span> and <span className="text-yellow-500">{currentOrganizer && currentOrganizer.organizer_unverifiedProjects.length} unverified</span> projects.
              </span>
              </div>
                
            </div>}
            <div className="text-black flex justify-center">
              <div className="w-full rounded-3xl bg-default-100/50 px-4 xs:px-4 md:px-8 pb-8 pt-4 mt-8 shadow-md">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full flex-col">
                    <div className="global-subtitle">
                      Project Dashboard
                    </div>
                    <div className="global-subtitle-description">
                      You can find the list of verified and unverified projects
                      that you created in this section along with the
                      participant details for your verified projects.
                    </div>
                  </div>
                  <div className="global-element-layout">
                  <Select
                    label="Project Status"
                    variant="bordered"
                    placeholder="Select your option"
                    className=" text-black"
                    defaultSelectedKeys={["verified"]}
                    value={value}
                    onSelectionChange={(key) => setValue(key)}
                  >
                    <SelectItem
                      key={"verified"}
                      value="Verified Projects"
                      className="text-black"
                    >
                      Verified Projects
                    </SelectItem>
                    <SelectItem
                      key={"unverified"}
                      value="Unverified Projects"
                      className="text-black"
                    >
                      Unverified Projects
                    </SelectItem>
                  </Select>
                  </div>
                </div>
                <div className="">
                  <CustomPagination listOfItems={[...value.values()][0] === "verified" ? organizerVerifiedProjects : organizerUnverifiedProjects} noSearchResultsAnimationTitle={"No Results Found!"}
                noSearchResultsAnimationDescription={
                  "It's pretty much empty here! Your search results didn't yeild any results! Maybe, try searching some different categories or try changing your filters."
                }>
                    {(project) => (
                      <ProjectCard currentProject={project} currentProjectView={projectViews.MANAGEPROJECT}/>
                    )}
                  </CustomPagination>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProjects;
