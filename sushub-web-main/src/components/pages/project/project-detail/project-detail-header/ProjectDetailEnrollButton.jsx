import React, { useContext, useEffect, useState } from "react";
import { Button, Spinner } from "@nextui-org/react";
import { AuthContext } from "@/context/AuthContext";
import { UserContext } from "@/context/UserContext";
import { ProjectContext } from "@/context/ProjectContext";
import { useRouter } from "next-nprogress-bar";
import { Project } from "@/app/schema/Project";
import { projectViews } from "@/app/schema/Project";
import { OrganizerContext } from "@/context/OrganizerContext";
import toast from "react-hot-toast";
import { LogIn, Disc, ClockAlert, CircleCheckBig, UserX } from "lucide-react";
import confetti from "canvas-confetti";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import RemoveProjectButton from "@/components/pages/moderation/moderation-sections/remove-projects/RemoveProjectButton";
import ArchiveProjectButton from "@/components/pages/moderation/moderation-sections/remove-projects/ArchiveProjectButton";
const ProjectDetailEnrollButton = ({
  currentDate,
  currentProject,
  projectView,
}) => {
  //console.log("Current Project View: ", projectView);
  const router = useRouter();
  const { currentUser } = useContext(AuthContext);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const {
    setProject,
    verifiedProjects,
    setVerifiedProjects,
    setUnverifiedProjects,
  } = useContext(ProjectContext);
  const {
    organizer,
    unverifiedOrganizer,
    setOrganizer,
    setVerifiedOrganizer,
    setUnverifiedOrganizer,
  } = useContext(OrganizerContext);
  const [buttonLabel, setButtonLabel] = useState("Log In To Enroll");
  const [isDisabled, setIsDisabled] = useState(true);
  const [isEnrolling, setIsEnrolling] = useState(false);
  const [isVerifiedProject, setIsVerifiedProject] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      setButtonLabel("Log In To Enroll");
      setIsDisabled(false);
    } else {
      if (new Date(currentProject.project_endDate.toDate()) < currentDate) {
        setButtonLabel("Project Ended");
        setIsDisabled(true);
      } else if (
        currentProject.project_currentPeople.length >=
        currentProject.project_capacity
      ) {
        setButtonLabel("Project Full");
        setIsDisabled(true);
      } else if (
        userInfo &&
        Object.keys(userInfo.past_projects)
          .map((key) => parseInt(key, 10))
          .includes(currentProject.project_id)
      ) {
        setButtonLabel("Enrolled");
        setIsDisabled(true);
      } else {
        setButtonLabel("Enroll Now");
        setIsDisabled(false);
      }
    }
  }, [currentUser, currentProject, currentDate, userInfo]);

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

  const handleEnrollment = () => {
    if (currentUser) {
      setIsEnrolling(true);
      Project.enrollForVerifiedProject(
        currentProject.project_id,
        userInfo.user_email,
        setUserInfo,
        setIsEnrolling
      )
        .then((updatedProjectList) => {
          const { individualData, mergedData } = updatedProjectList;
          setProject(mergedData);
          setVerifiedProjects(individualData["verified"]);
          setUnverifiedProjects(individualData["unverified"]);
  
          const end = Date.now() + 5000;
          
  
          (function frame() {
            confetti({
              angle: 60,
              spread: 55,
              particleCount: 3,
              origin: { x: 0, y: 0.5 },
              colors: ["#eab308", "#3b82f6", "#22c55e"],
            });
            confetti({
              angle: 120,
              spread: 55,
              particleCount: 3,
              origin: { x: 1, y: 0.5 },
              colors: ["#eab308", "#3b82f6", "#22c55e"],
            });
  
            if (Date.now() < end) {
              requestAnimationFrame(frame);
            }
          })();
        })
        .catch((e) => {
          console.error(
            "There was an error in getting the updated projects list:",
            e
          );
        })
        .finally(() => {
          setIsEnrolling(false);
        });
    } else {
      router.push("/auth");
    }
  };
  
  useEffect(() => {
    if (currentProject && currentProject.project_endDate > currentDate) {
      setIsDisabled(true);
      setButtonLabel("Project Overdue");
    } else if (
      currentProject &&
      currentProject.project_currentPeople.length >=
        currentProject.project_capacity
    ) {
      setIsDisabled(true);
      setButtonLabel("Project Full");
    } else if (
      userInfo &&
      Object.keys(userInfo.past_projects)
        .map((key) => parseInt(key, 10))
        .includes(currentProject.project_id)
    ) {
      setIsDisabled(true);
      setButtonLabel("Enrolled");
    } else {
      if (currentProject) {
        setIsDisabled(false);
        setButtonLabel("Enroll");
      }
    }
  }, [currentDate, currentProject, userInfo]);

  useEffect(() => {
    const checkIfCurrentProjectIsVerified = () => {
      if (
        !currentProject ||
        !verifiedProjects ||
        !Array.isArray(verifiedProjects)
      ) {
        console.warn(
          "currentProject or verifiedProjects is undefined or not an array"
        );
        return;
      }

      const isVerified = verifiedProjects.some(
        (project) => project?.project_id === currentProject?.project_id
      );

      setIsVerifiedProject(isVerified);
    };

    checkIfCurrentProjectIsVerified();
  }, [currentProject, verifiedProjects]);

  const DisplayedButton = ({ projectView }) => {
    //console.log("Project View:", projectView);
    switch (projectView) {
      case projectViews.UNAUTHENTICATED:
        return;

      case projectViews.PROJECTLIST:
        return (
          <Button
            className="bg-black disabled:bg-black/60 text-white shadow-md h-12 w-full md:w-1/3 xl:1/4"
            isDisabled={isDisabled || isEnrolling}
            onClick={handleEnrollment}
            startContent={
              isEnrolling ? (
                <Spinner size="sm" color="white" />
              ) : buttonLabel == "Project Overdue" ? (
                <ClockAlert size={20} />
              ) : buttonLabel == "Project Full" ? (
                <UserX size={20} />
              ) : buttonLabel == "Enrolled" ? (
                <CircleCheckBig />
              ) : (
                <Disc size={20} />
              )
            }
          >
            {buttonLabel}
          </Button>
        );

      case projectViews.VERIFY:
        return (
          <Button
            className="bg-black text-white w-full h-12 md:w-1/3 xl:1/4"
            variant="flat"
            onClick={handleVerifyClick}
            startContent={
              isVerifying ? (
                <Spinner size="sm" color="white" />
              ) : (
                <IoMdCheckmarkCircleOutline size={20} />
              )
            }
            isDisabled={isVerifying || isVerifiedProject}
          >
            {isVerifying ? "Verifying..." : isVerifiedProject ? "Verified" : "Verify"}
          </Button>
        );

      case projectViews.REMOVE:
        return (
          <div className="flex flex-row w-full md:w-2/3 xl:1/2">
            <div className="m-1 w-1/2">
              <ArchiveProjectButton
                projectItem={currentProject}
                isProjectArchived={currentProject.project_isArchived}
              />
            </div>
            <div className="m-1 w-1/2">
              <RemoveProjectButton
                projectItem={currentProject}
                isDetailPage={true}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  //console.log("Is verified project:", isVerifiedProject);
  return (
    <div className="w-full flex justify-end items-end global-box-layout">
      {currentProject && userInfo ? (
        <DisplayedButton projectView={projectView} />
      ) : null}
    </div>
  );
};

export default ProjectDetailEnrollButton;
