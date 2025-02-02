"use client";
import { React, useContext, useEffect, useState } from "react";
import { Button, Image, CardBody } from "@nextui-org/react";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import SdgCard from "@/components/global/sdg-card/SdgCard";
import { detailPageBackButtonLabel } from "../project/project-detail/ProjectDetailConstants";
import { useRouter } from "next-nprogress-bar";
import { GoOrganization } from "react-icons/go";
import CustomPagination from "@/components/global/pagination/Pagination";
import ProjectCard from "../project/project-utils/ProjectCard";
import { OrganizerContext } from "@/context/OrganizerContext";
import { useSearchParams } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";
import { PeopleContext } from "@/context/PeopleContext";
import { projectViews } from "@/app/schema/Project";
import EventNotSelected from "../events-and-opportunities/event/EventNotSelected";

const PeopleDetailPage = () => {
  const searchParams = useSearchParams();
  const personUserName = searchParams.get("id");
  const { people } = useContext(PeopleContext);
  const { currentUser } = useContext(AuthContext);
  const [currentPerson, setCurrentPerson] = useState(null);
  const [value, setValue] = useState(new Set(["Current Projects"]));
  const router = useRouter();

  useEffect(() => {
    if (personUserName && people) {
      const foundPerson = people.find(
        (person) => person.people_id.toString() === personUserName.toString()
      );
      setCurrentPerson(foundPerson);
    }
  }, [personUserName, people]);

  useEffect(() => {
    if (currentPerson) {
      document.title = `${currentPerson.people_name}'s Profile`;
    } else {
      document.title = "People Detail";
    }
  }, [currentPerson]);

  if (!currentPerson) {
    return (
      <div className="w-full flex items-center justify-center">
        <div className="w-2/3">
          <EventNotSelected
            animationTitle={"Oops! We couldn't find what you were looking for"}
            animationDescription={
              "The person that you're searching for does not exist or has been deleted. Please check if you've entered the correct details."
            }
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div
        className="absolute inset-0 h-[60vh] md:h-[50vh] w-full bg-cover bg-center rounded-3xl blur-md"
        style={{ backgroundImage: `url(${currentPerson.people_imgURL})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black rounded-3xl blur-md"></div>
      </div>

      <div className="relative z-10 flex flex-col">
        <div className="flex justify-center items-center">
          <div className="w-full flex flex-col">
            {/* Back Button */}
            <div className="flex justify-center items-center w-full">
              <div className="global-box-layout w-full lg:w-2/3 m-4">
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
            </div>

            {/* Profile Section */}
            <div className="relative flex justify-center items-center">
              <div className="w-60 aspect-square rounded-full shadow-md z-20 relative mt-20">
                <Image
                  alt="User Profile Image"
                  src={currentPerson.people_imgURL}
                  radius="full"
                  isZoomed
                  className="rounded-full w-full h-auto aspect-square"
                />
              </div>
            </div>

            {/* Person Details */}
            <div className="px-4 rounded-3xl bg-black shadow-md mt-6 py-6 w-full h-auto">
              <div className="flex flex-col items-center text-center">
                <div className=" text-xl xs:text-xl s:text-xl md:text-3xl font-bold text-white w-full md:w-2/3">
                  {currentPerson.people_name}
                </div>
                <div className="flex justify-center items-center text-md xs:text-md s:text-md md:text-lg text-white/60 mt-2 w-full md:w-2/3">
                  <MdOutlineEmail size={20} />
                  <Link
                    href={`mailto:${currentPerson.people_email}`}
                    className="ml-2"
                  >
                    {currentPerson.people_email}
                  </Link>
                </div>
                <div className="flex justify-center items-center text-md xs:text-md s:text-md md:text-lg text-white/60 mt-2 w-full md:w-2/3">
                  <GoOrganization size={20} />
                  {currentPerson.people_organization}
                </div>

                {/* SDGs */}
                <div className="flex flex-row justify-center items-center mt-4 overflow-auto w-full md:w-2/3">
                  <div className="w-full flex flex-row overflow-auto justify-center items-center">
                    <Button
                      disableRipple
                      radius="none"
                      className={`bg-white/60 text-white px-4 mr-2 rounded-md ${"h-unit-6 md:h-unit-8"}`}
                      size="sm"
                    >
                      SDGs
                    </Button>
                    <div className="flex flex-row line-clamp-1">
                      {currentPerson.people_sdgs
                        .sort((a, b) => a - b)
                        .map((sdg, index) => (
                          <div className="mx-1" key={index}>
                            <SdgCard
                              key={index}
                              currentSdg={sdg}
                              isDetailPage={true}
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="text-sm text-white mt-8 w-full md:w-2/3">
                  {currentPerson.people_description}
                </div>
              </div>
            </div>

            {/* Previous Projects */}
            <div className="flex justify-center items-center px-4 xs:px-4 md:px-8">
              <div className="global-box-layout rounded-3xl bg-default-100/50 shadow-md flex flex-col my-8">
                <div className="w-full flex-col">
                  <div className="w-full flex justify-between items-center">
                    <div className="flex flex-col w-full">
                      <div className="global-subtitle pt-4">
                        {`Previous Projects by ${currentPerson.people_name}`}
                      </div>
                      <div className="global-subtitle-description">
                        {`You can find the current as well as the previous projects offered by ${currentPerson.people_name} listed below. For additional information, you can try contacting the organizer directly.`}
                      </div>
                    </div>
                  </div>

                  <div className="my-8">
                    <CustomPagination
                      listOfItems={Object.values(
                        currentPerson.people_pastProjects
                      )}
                      noSearchResultsAnimationTitle={"No Results Found!"}
                      noSearchResultsAnimationDescription={`It's pretty much empty here! ${
                        currentPerson.people_name
                      } doesn't have any ${
                        value.has("Current Projects")
                          ? " current projects"
                          : " previous projects"
                      }.`}
                    >
                      {(item) => (
                        <ProjectCard
                          key={item.project_id}
                          currentProject={item}
                          currentProjectView={
                            currentUser
                              ? projectViews.PROJECTLIST
                              : projectViews.UNAUTHENTICATED
                          }
                        />
                      )}
                    </CustomPagination>
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

export default PeopleDetailPage;
