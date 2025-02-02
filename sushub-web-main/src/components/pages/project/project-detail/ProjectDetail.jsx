"use client";
import React, { useState, useContext, useEffect } from "react";
import ProjectDetailBackButton from "./project-detail-header/ProjectDetailBackButton";
import ProjectDetailTitle from "./project-detail-header/ProjectDetailTitle";
import ProjectDetailEnrollButton from "./project-detail-header/ProjectDetailEnrollButton";
import ProjectDetailDescription from "./project-detail-cards/ProjectDetailDescription";
import ProjectDetailInfoCard from "./project-detail-cards/project-detail-info-card/ProjectDetailInfoCard";
import { useSearchParams } from "next/navigation";
import { ProjectContext } from "@/context/ProjectContext";
import { AuthContext } from "@/context/AuthContext";
import EventNotSelected from "../../events-and-opportunities/event/EventNotSelected";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Button } from "@nextui-org/react";
import { useRouter } from "next-nprogress-bar";
import ProjectDetailSdgInfo from "./project-detail-cards/project-detail-info-card/ProjectDetailSdgInfo";

const ProjectDetail = () => {
  const { project, currentView } = useContext(ProjectContext);
  const searchParams = useSearchParams();
  const projectId = searchParams.get("id");
  const { currentUser } = useContext(AuthContext);
  const [currentProject, setCurrentProject] = useState(null);
  const router = useRouter();
  const projectMap = project;

  useEffect(() => {
    if (projectId && projectMap) {
      const foundProject = projectMap.find(
        (project) => project.project_id.toString() === projectId.toString()
      );
      setCurrentProject(foundProject);
    }
  }, [projectId, projectMap]);

  useEffect(() => {
    if (currentProject != null) {
      document.title = currentProject.project_title;
    } else {
      document.title = "Sustainability Hub";
    }
  }, [currentProject]);

  if (!currentProject) {
    return (
      <div className="w-full flex items-center justify-center">
        <div className="global-box-layout">
          <EventNotSelected
            animationTitle={"Oops! We couldn't find what you were looking for"}
            animationDescription={
              "The project that you're searching for does not exist or has been deleted. Please check if you've entered the correct details."
            }
          />
        </div>
      </div>
    );
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <div className="m-0 relative">
      <div
        className="absolute inset-0 h-[60vh] w-full bg-cover bg-center rounded-b-3xl blur-[1px]"
        style={{
          backgroundImage: `url(${currentProject.project_imageUrl})`,
        }}
      >
        <div className="absolute w-full rounded-b-3xl inset-0 bg-gradient-to-b from-transparent to-black/70 h-full backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10">
        <div className="w-full flex justify-center h-[40vh]">
          <div className="global-box-layout w-full h-full m-4">
            <div className="flex flex-col md:flex-row text-white h-full w-full">
              <div className="flex justify-start items-start w-full md:w-1/4 h-full">
                <Button
                  color="default"
                  variant="light"
                  startContent={<IoIosArrowRoundBack size={20} />}
                  onClick={() => router.back()}
                  className="text-black/60 mb-4 bg-white/30 font-semibold"
                >
                  {"Back"}
                </Button>
              </div>
              <div className="w-full md:w-3/4 flex flex-col justify-start items-start md:justify-end md:items-end text-start md:text-end">
                <div className="w-full text-white flex justify-start md:justify-end text-2xl xs:text-2xl s:text-2xl md:text-4xl font-bold pt-2 xs:pt-2 md:pt-4 leading-tight">
                  <div
                    className={`${
                      currentProject.project_type == 0
                        ? "bg-blue-500"
                        : currentProject.project_type == 1
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    } flex justify-start md:justify-end text-sm xs:text-sm s:text-sm md:text-medium font-semibold text-white w-auto rounded-3xl py-2 px-4`}
                  >
                    {currentProject.project_type == 0
                      ? "Project"
                      : currentProject.project_type == 1
                      ? "Project Idea"
                      : "Project Group"}
                  </div>
                </div>
                <div className="w-full text-white flex justify-start md:justify-end text-2xl xs:text-2xl s:text-2xl md:text-4xl font-bold pt-2 xs:pt-2 md:pt-4 leading-tight">
                  {currentProject.project_title}
                </div>
                <div className="text-white/60 flex justify-start md:justify-end text-medium xs:text-medium s:text-medium md:text-large font-semibold w-full">
                  {`Organized by: ${currentProject.project_organizerName}`}
                </div>
                <div className="text-white/60 flex justify-start items-start md:items-end md:justify-end text-medium xs:text-medium s:text-medium md:text-large font-semibold pb-2 w-full">
                <ProjectDetailSdgInfo projectSdgs={currentProject.project_sdgs}
            projectType={currentProject.project_type}/>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full my-8 bg-white rounded-3xl py-6 z-20 flex flex-col px-2 xs:px-2 md:px-4 lg:px-8 pb-8 pt-4 mt-8 shadow-md">
          <div className="flex justify-center items-center w-full">
          <ProjectDetailEnrollButton
                currentProject={currentProject}
                currentDate={today}
                projectView={currentView}
              />
          </div>
          <div className="flex justify-center items-center w-full">
          <ProjectDetailDescription
            currentProject={currentProject}
            projectView={currentView}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
