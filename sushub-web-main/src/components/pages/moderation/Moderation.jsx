"use client";
import { React, useContext, useState } from "react";
import { Button } from "@nextui-org/react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from "next-nprogress-bar";
import { detailPageBackButtonLabel } from "../project/project-detail/ProjectDetailConstants";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { ModeratorContext } from "@/context/ModeratorContext";
import NoneSelected from "./moderation-sections/NoneSelected";
import VerifyProjects from "./moderation-sections/verify-projects/VerifyProjects";
import RemoveProjects from "./moderation-sections/remove-projects/RemoveProjects";
import AddEvents from "./moderation-sections/add-events.jsx/AddEvents";
import RemoveEvents from "./moderation-sections/remove-events.jsx/RemoveEvents";
import AddOpportunities from "./moderation-sections/add-opportunities/AddOpportunities";
import RemoveOpportunities from "./moderation-sections/remove-opportunties/RemoveOpportunities";
import AddPeople from "./moderation-sections/add-people/AddPeople";
import RemovePeople from "./moderation-sections/remove-people/RemovePeople";
import VerifyOrganizations from "./moderation-sections/verify-organizations/VerifyOrganizations";
import AddFeatured from "./moderation-sections/add-featured.jsx/AddFeatured";
import RemoveFeatured from "./moderation-sections/remove-featured.jsx/RemoveFeatured";
import Lottie from "lottie-react";
import animationData from "/public/lottie/view-unavailable.json";
import { ScreenShare } from "lucide-react";
import accessRestricted from "/public/lottie/note-not-found.json";
import AccessRestricted from "@/components/global/access-restricted/AccessRestricted";
const Moderation = () => {
  const router = useRouter();
  const { isModerator, moderatorLoading } = useContext(ModeratorContext);
  const [sectionTitle, setSectionTitle] = useState("Moderation Options");
  const [sectionDescription, setSectionDescription] = useState(
    "Please select the desired option from the moderation controls menu inorder to add, remove projects, events, opportunities and people."
  );
  const [activeSection, setActiveSection] = useState("none");
  const [currentButtonToggleValues, setCurrentButtonToggleValues] = useState({
    "verify-project": {
      isActive: false,
      title: "Verify/Archive Projects",
      description:
        "The verify/archive projects section allows you to verify or archive the projects created by the organizers. You can view the project in detail by clicking on the project card.",
    },
    "remove-project": {
      isActive: false,
      title: "Remove Projects",
      description:
        "The remove projects section allows you to remove the projects created by the organizers from the sustainability hub platform. You can view the project in detail by clicking on the project card.",
    },
    "add-event": {
      isActive: false,
      title: "Add Events",
      description:
        "The add event section allows you to create new events on the sustainability hub platform. Start creating events by clicking on the create event button.",
    },
    "remove-event": {
      isActive: false,
      title: "Remove Events",
      description:
        "The remove event section allows you to remove events on the sustainability hub platform. Simply click on the remove button on the event card to remove the event.",
    },
    "add-opportunity": {
      isActive: false,
      title: "Add Opportunities",
      description:
        "The add opportunity section allows you to create new opportunities on the sustainability hub platform. Start creating opportunities by clicking on the create opportunity button.",
    },
    "remove-opportunity": {
      isActive: false,
      title: "Remove Opportunities",
      description:
        "The remove opportunity section allows you to remove opportunities on the sustainability hub platform. Simply click on the remove button on the opportunity card to remove the opportunity.",
    },
    "add-people": {
      isActive: false,
      title: "Add People",
      description:
        "The add people section allows you to add new people to the sustainability hub platform, click on add people to start adding new people.",
    },
    "remove-people": {
      isActive: false,
      title: "Remove People",
      description:
        "The remove people section allows you to remove people to the sustainability hub platform, click on remove button on the card to remove people.",
    },
    "verify-organization": {
      isActive: false,
      title: "Verify Organization",
      description:
        "The verify organization section allows you to verify people or organizations. Click on verify to get people or organizations verified.",
    },
    "add-featured": {
      isActive: false,
      title: "Add Featured Content",
      description:
        "The add featured content section allows you to add featured content to sustainability hub platform. Click on create button to start creating featured content.",
    },
    "remove-featured": {
      isActive: false,
      title: "Remove Featured Content",
      description:
        "The remove featured content section allows you to remove featured content from the sustainability hub platform. Simply click on remove button on the card to remove the content.",
    },
    none: {
      isActive: false,
      title: "Moderation Options",
      description:
        "Please select the desired option from the moderation controls menu inorder to add, remove projects, events, opportunities and people.",
    },
  });
  const handleShare = async () => {
    if (navigator.share) {
      try {
        const currentUrl = window.location.href;
        await navigator.share({
          title: "Moderation Panel",
          text: "Moderation Panel allows managing events, opportunities, projects, organizers and much more in a single and compact view.",
          url: currentUrl,
        });
        //console.log("Content shared successfully");
      } catch (error) {
        //console.error("Error sharing content:", error);
      }
    } else {
      //alert("Share functionality is not supported on your device.");
    }
  };
  const currentSection = (sectionName) => {
    switch (sectionName) {
      case "verify-project":
        return <VerifyProjects />;
      case "remove-project":
        return <RemoveProjects />;
      case "add-event":
        return <AddEvents />;
      case "remove-event":
        return <RemoveEvents />;
      case "add-opportunity":
        return <AddOpportunities />;
      case "remove-opportunity":
        return <RemoveOpportunities />;
      case "add-people":
        return <AddPeople />;
      case "remove-people":
        return <RemovePeople />;
      case "verify-organization":
        return <VerifyOrganizations />;
      case "add-featured":
        return <AddFeatured />;
      case "remove-featured":
        return <RemoveFeatured />;
      default:
        return <NoneSelected />;
    }
  };
  const handleButtonClick = (buttonId) => {
    setCurrentButtonToggleValues((currentValues) => {
      const updatedValues = {};
      let wasAnyButtonSetActive = false;
      Object.keys(currentValues).forEach((key) => {
        const isActive = key === buttonId;
        updatedValues[key] = {
          ...currentValues[key],
          isActive: isActive,
        };
        if (isActive) {
          setSectionTitle(currentValues[key].title);
          setSectionDescription(currentValues[key].description);
          setActiveSection(buttonId);
          //console.log(activeSection);
          wasAnyButtonSetActive = true;
        }
      });

      if (!wasAnyButtonSetActive) {
        setSectionTitle("Moderation Options");
        setSectionDescription(
          "Please select the desired option from the moderation controls menu in order to add, remove projects, events, opportunities, and people."
        );
      }

      return updatedValues;
    });
  };

  if (!isModerator) {
    return (
      <AccessRestricted />
    );
  }
  return (
    <div className="my-1 mt-2 xs:mt-4 xs:my-2 md:m-4 md:mt-8">
      <div className=" flex flex-col">
        <div className="flex justify-center items-center">
          <div className="global-box-layout">
            <div className="flex justify-start items-center">
              <Button
                color="default"
                variant="light"
                startContent={<IoIosArrowRoundBack size={20} />}
                onClick={() => router.back()}
                className="text-black/60 mb-4 font-semibold"
              >
                {detailPageBackButtonLabel}
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="block md:hidden mt-8 w-full h-auto lg:h-[60vh]">
            <div className=" flex flex-col justify-center items-center w-full md:w-1/2">
              <Lottie
                className="w-2/3"
                animationData={animationData}
                autoPlay={true}
                loop={true}
                height={50}
              />
            </div>
            <div className="mt-8 text-center w-full flex justify-center items-center flex-col">
              <div className="text-black px-4 global-title flex items-center justify-center">
                {
                  "We tried to squeeze everything in, but the pixels are rebelling. See you on desktop!"
                }
              </div>
              <div className="my-4 px-4 global-title-description">
                {
                  "Unfortunately, the moderation panel cannot be accessed from mobile devices at this point. Try accessing it from your desktop or simply click on the send link button to send this page directly to your devices."
                }
              </div>
              <div className="w-full px-4">
                <Button
                  className="w-full bg-black text-white mb-12 mt-4"
                  onClick={handleShare}
                  startContent={<ScreenShare size={20} />}
                >
                  Send Link to My Devices
                </Button>
              </div>
            </div>
          </div>
          <div className="hidden md:block global-box-layout">
            <div className="flex flex-row">
              <div className="w-2/3 flex-col">
                <div className="w-full text-black flex items-center text-3xl font-bold">
                  {"Sustainability Hub Moderation"}
                </div>
                <div className="text-black/60 flex items-center text-md font-semibold pb-4 pt-1">
                  {
                    "Welcome to the moderation section of Sustainability Hub. You can add/remove events, opportunities, people and projects from here. For any queries, you can write email to sustainability hub team."
                  }
                </div>
              </div>
            </div>
            <div className="w-full rounded-3xl bg-default-100/50 px-8 pb-8 pt-4 mt-8 shadow-md">
              <div>
                <div className="text-black font-semibold text-xl">
                  {"Moderation Panel"}
                </div>
                <div className="text-black/30 flex items-center text-md font-semibold pb-4 pt-1 w-2/3">
                  {
                    "As a moderator, you can control the Sustainability Hub platform and make changes to the project status, events, opportunities, people by clicking the buttons on the left."
                  }
                </div>
              </div>
              <div className="flex justify-start flex-row">
                <div className="w-2/6 mt-8 mb-8 rounded-3xl bg-default-100/50 shadow-md p-4 h-full flex flex-col">
                  <div className="mt-2 flex justify-start items-center flex-row">
                    <div className="text-xl font-semibold text-black">
                      Moderation Controls
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="">
                      <div className="mt-2 flex justify-start items-center flex-row">
                        <div className="text-lg font-semibold text-black/60">
                          Projects
                        </div>
                      </div>
                      <div className="flex flex-row">
                        <div className="w-1/2 aspect-video p-2">
                          <Button
                            variant="flat"
                            onClick={() => handleButtonClick("verify-project")}
                            className="bg-yellow-500 text-white w-full h-[80%] rounded-xl aspect-video"
                            startContent={
                              <IoMdCheckmarkCircleOutline size={20} />
                            }
                          >
                            Verify
                          </Button>
                        </div>
                        <div className="w-1/2 aspect-video p-2">
                          <Button
                            variant="flat"
                            onClick={() => handleButtonClick("remove-project")}
                            className="bg-yellow-500 text-white w-full rounded-xl h-[80%] aspect-video"
                            startContent={<IoMdRemoveCircleOutline size={20} />}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="">
                      <div className="mt-2 flex justify-start items-center flex-row">
                        <div className="text-lg font-semibold text-black/60">
                          Events
                        </div>
                      </div>
                      <div className="flex flex-row">
                        <div className="w-1/2 aspect-video p-2">
                          <Button
                            variant="flat"
                            onClick={() => handleButtonClick("add-event")}
                            className="bg-green-500 text-white w-full rounded-xl h-[80%] aspect-video"
                            startContent={<IoMdAddCircleOutline size={20} />}
                          >
                            Add
                          </Button>
                        </div>
                        <div className="w-1/2 aspect-video p-2">
                          <Button
                            variant="flat"
                            onClick={() => handleButtonClick("remove-event")}
                            className="bg-green-500 text-white w-full rounded-xl h-[80%] aspect-video"
                            startContent={<IoMdRemoveCircleOutline size={20} />}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="mt-2 flex justify-start items-center flex-row">
                        <div className="text-lg font-semibold text-black/60">
                          Opportunity
                        </div>
                      </div>
                      <div className="flex flex-row">
                        <div className="w-1/2 aspect-video p-2">
                          <Button
                            variant="flat"
                            onClick={() => handleButtonClick("add-opportunity")}
                            className="bg-blue-500 text-white w-full rounded-xl h-[80%] aspect-video"
                            startContent={<IoMdAddCircleOutline size={20} />}
                          >
                            Add
                          </Button>
                        </div>
                        <div className="w-1/2 aspect-video p-2">
                          <Button
                            variant="flat"
                            onClick={() =>
                              handleButtonClick("remove-opportunity")
                            }
                            className="bg-blue-500 text-white w-full rounded-xl h-[80%] aspect-video"
                            startContent={<IoMdRemoveCircleOutline size={20} />}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="mt-2 flex justify-start items-center flex-row">
                        <div className="text-lg font-semibold text-black/60">
                          People
                        </div>
                      </div>
                      <div className="flex flex-row">
                        <div className="w-1/2 aspect-video p-2">
                          <Button
                            variant="flat"
                            onClick={() => handleButtonClick("add-people")}
                            className="bg-black text-white w-full rounded-xl h-[80%] aspect-video"
                            startContent={<IoMdAddCircleOutline size={20} />}
                          >
                            Add
                          </Button>
                        </div>
                        <div className="w-1/2 aspect-video p-2">
                          <Button
                            variant="flat"
                            onClick={() => handleButtonClick("remove-people")}
                            className="bg-black text-white w-full rounded-xl h-[80%] aspect-video"
                            startContent={<IoMdRemoveCircleOutline size={20} />}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="flex flex-row">
                        <div className="w-full p-2">
                          <Button
                            variant="flat"
                            onClick={() =>
                              handleButtonClick("verify-organization")
                            }
                            className="bg-black text-white w-full h-20 rounded-xl"
                            startContent={
                              <IoMdCheckmarkCircleOutline size={20} />
                            }
                          >
                            Verify Organization
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="mt-4 flex justify-start items-center flex-row">
                        <div className="text-lg font-semibold text-black/60">
                          Featured
                        </div>
                      </div>
                      <div className="flex flex-row">
                        <div className="w-1/2 aspect-video p-2">
                          <Button
                            variant="flat"
                            onClick={() => handleButtonClick("add-featured")}
                            className="bg-black text-white w-full rounded-xl h-[80%] aspect-video"
                            startContent={<IoMdAddCircleOutline size={20} />}
                          >
                            Add
                          </Button>
                        </div>
                        <div className="w-1/2 aspect-video p-2">
                          <Button
                            variant="flat"
                            onClick={() => handleButtonClick("remove-featured")}
                            className="bg-black text-white w-full rounded-xl h-[80%] aspect-video"
                            startContent={<IoMdRemoveCircleOutline size={20} />}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-2/3 ml-8 rounded-3xl bg-default-100/50 px-4 pb-8 pt-4 mt-8 shadow-md">
                  <div>
                    <div>
                      <div className="mt-2">
                        <div className="text-black font-semibold text-xl">
                          {sectionTitle}
                        </div>
                        <div className="text-black/30 flex items-center text-md font-semibold pb-4 pt-1 w-full">
                          {sectionDescription}
                        </div>
                      </div>
                      {currentSection(activeSection)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moderation;
