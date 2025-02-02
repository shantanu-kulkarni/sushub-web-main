import React, { useState, useContext, useEffect } from "react";
import { Button, Image, Card, Checkbox, Spinner } from "@nextui-org/react"; // Import Spinner from NextUI
import SdgCard from "../../../global/sdg-card/SdgCard";
import { useRouter } from "next-nprogress-bar";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import RemoveProjectButton from "../../moderation/moderation-sections/remove-projects/RemoveProjectButton";
import ArchiveProjectButton from "../../moderation/moderation-sections/remove-projects/ArchiveProjectButton";
import toast from "react-hot-toast";
import { Project, projectViews } from "@/app/schema/Project";
import { ProjectContext } from "@/context/ProjectContext";
import { OrganizerContext } from "@/context/OrganizerContext";
import { BadgeCheck } from "lucide-react";
import { AuthContext } from "@/context/AuthContext";

const ProjectCard = ({
  currentProject,
  currentProjectView,
  isModerator = false,
  isVerify = false,
  isArchive = false,
}) => {
  const router = useRouter();

  const {
    organizer,
    unverifiedOrganizer,
    setOrganizer,
    setVerifiedOrganizer,
    setUnverifiedOrganizer,
  } = useContext(OrganizerContext);
  const { setProject, setVerifiedProjects, setUnverifiedProjects, currentView, setCurrentView } =
    useContext(ProjectContext);
  const {currentUser} = useContext(AuthContext);
  const [isVerifying, setIsVerifying] = useState(false); // Loading state for verification

  const navigateToDetails = (projectId) => {
    router.push(`${projectId}`);
  }
  const [isSelected, setIsSelected] = useState(
    currentProject.project_isUnderQualin
  );
  
  const notify = () => {
    toast(`Project ${currentProject.project_title} has been verified!`, {
      position: "bottom-right",
      style: {
        color: "#fff",
        backgroundColor: "#000",
      },
    });
  };
  
  if (currentProject == []) {
    return;
  }

  const handleVerifyClick = () => {
    setIsVerifying(true);
    Project.moveProjectToVerified(
      currentProject.project_id,
      organizer,
      unverifiedOrganizer,
      setOrganizer,
      setVerifiedOrganizer,
      setUnverifiedOrganizer
    )
      .then((updatedProjectsList) => {
        const { individualData, mergedData } = updatedProjectsList;
        setProject(mergedData);
        setVerifiedProjects(individualData["verified"]);
        setUnverifiedProjects(individualData["unverified"]);
        notify();
      })
      .catch((e) => {
        console.error(
          "There was an error in getting the updated projects list:",
          e
        );
      })
      .finally(() => {
        setIsVerifying(false);
      });
  };

  return (
    <Card
      translate="no"
      onClick={() =>{
        setCurrentView(currentProjectView);
        navigateToDetails(`/project/detail?id=${currentProject.project_id}`);
      }
      }
      isPressable
      className={`capitalize w-full h-72 xs:h-[26rem] md:h-56 aspect-square md:aspect-video text-xl font-bold ${
        currentProject.project_type == 0
          ? "bg-blue-500"
          : currentProject.project_type == 1
          ? "bg-yellow-500"
          : "bg-green-500"
      } text-white flex flex-col items-start justify-start md:flex-row md:items-start md:justify-start p-0 hover:scale-105 shadow-md`}
    >
      <div
        className={`${
          isArchive || isVerify ? "w-1/3" : "w-full md:w-1/4"
        } h-40 xs:h-56 md:h-56 flex items-center`}
      >
        <Image
          alt="Image"
          isZoomed
          radius="none"
          className="h-40 w-screen xs:h-56 md:h-56 scale-100 object-fill md:object-cover md:rounded-l-lg md:rounded-r-none hover:rounded-l-lg hover:rounded-r-none"
          shadow="sm"
          src={currentProject.project_imageUrl}
        />
      </div>
      <div className="w-full md:w-3/4">
        <div
          className={`w-full flex flex-col items-start ${
            isModerator ? " py-4 px-4" : "px-4 py-2 md:p-4"
          }`}
        >
          <div className="text-medium xs:text-lg md:text-2xl font-bold line-clamp-1 z-10 text-white">
            {currentProject.project_title}
          </div>
          <div
            className={`${
              isModerator
                ? "md:text-xs pt-2 line-clamp-1"
                : "text-xs md:text-sm pt-2 md:pt-4 line-clamp-1 xs:line-clamp-2 md:line-clamp-3"
            } font-normal text-left z-10 text-white/75`}
          >
            {currentProject.project_description}
          </div>
          <div
            className={`${
              isModerator ? "pt-2" : "pt-2 md:pt-4"
            } font-normal text-start text-sm xs:text-sm md:text-medium text-black/60 z-10`}
          >
            <p className="font-bold line-clamp-1">
              Organization Name: {currentProject.project_organizerName}
            </p>
          </div>
          <div
            className="w-full flex flex-row mt-1 xs:mt-2"
            onClick={(event) => event.stopPropagation()}
          >
            <div className={`${isArchive ? "w-2/3" : "w-full"} flex flex-row`}>
              <div className="mr-2" translate="no">
                <Button
                  disableRipple
                  radius="none"
                  className={`bg-black/60 text-white px-4 rounded-md ${
                    isModerator ? "h-unit-6" : "h-unit-6 md:h-unit-8"
                  }`}
                  size="sm"
                >
                  SDGs
                </Button>
              </div>
              <div className="flex flex-row line-clamp-1">
                {currentProject.project_sdgs.length <= 5 ? (
                  currentProject.project_sdgs.map((sdg, index) => {
                    return (
                      <div className="mx-1" key={index}>
                        <SdgCard
                          currentSdg={sdg}
                          isDetailPage={false}
                          isModerator={isModerator}
                        />
                      </div>
                    );
                  })
                ) : (
                  <>
                    {currentProject.project_sdgs
                      .slice(0, 5)
                      .map((sdg, index) => (
                        <div className="mx-1" key={index}>
                          <SdgCard
                            currentSdg={sdg}
                            isDetailPage={false}
                            isModerator={isModerator}
                          />
                        </div>
                      ))}
                    <span className="mx-1 py-1 text-sm flex items-center justify-center self-center">
                      +{currentProject.project_sdgs.length - 5} more
                    </span>
                  </>
                )}
              </div>
            </div>
            {isArchive ? (
              <div className="w-1/3 text-white">
                <Checkbox
                  color="default"
                  className="text-white"
                  isSelected={isSelected}
                  onValueChange={(value) => {
                    Project.addOrRemoveProjectFromisUnderQualiN(
                      currentProject.project_id,
                      value
                    )
                      .then((updatedProjectsList) => {
                        const { individualData, mergedData } =
                          updatedProjectsList;
                        setProject(mergedData);
                        setVerifiedProjects(individualData["verified"]);
                        setUnverifiedProjects(individualData["unverified"]);
                        setIsSelected(value);
                        toast(
                          `The QualiN status for Project ${currentProject.project_title} has been updated!`,
                          {
                            position: "bottom-right",
                            style: {
                              color: "#fff",
                              backgroundColor: "#000",
                            },
                          }
                        );
                      })
                      .catch((e) => {
                        console.error(
                          "There was an error in getting the updated projects list:",
                          e
                        );
                      });
                  }}
                >
                  <p className="text-white text-sm">Is Under QualiN</p>
                </Checkbox>
              </div>
            ) : null}
          </div>
          {!isModerator &&
          !isArchive &&
          currentProject.project_isUnderQualin ? (
            <div className="w-full mt-4 flex flex-row items-center">
              <div>
                <BadgeCheck size={24} />
              </div>
              <div className="text-sm ml-2">Is QualiN</div>
            </div>
          ) : null}
          {isModerator ? (
            <div className="flex flex-row w-full mt-4">
              {isVerify ? (
                <div className="w-full px-2">
                  <Button
                    className="bg-black text-white w-full h-12 px-2"
                    variant="flat"
                    onClick={handleVerifyClick}
                    startContent={
                      isVerifying ? (
                        <Spinner size="sm" color="white" />
                      ) : (
                        <IoMdCheckmarkCircleOutline size={20} />
                      )
                    }
                    isDisabled={isVerifying}
                  >
                    {isVerifying ? "Verifying..." : "Verify"}
                  </Button>
                </div>
              ) : null}
              {isArchive ? (
                <div className="w-full flex flex-row">
                  <div className="w-1/2 px-2">
                    <ArchiveProjectButton
                      key={currentProject.project_id}
                      projectItem={currentProject}
                      isProjectArchived={currentProject.project_isArchived}
                    />
                  </div>
                  <div className="w-1/2 px-2">
                    <RemoveProjectButton
                      key={currentProject.project_id}
                      projectItem={currentProject}
                    />
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
