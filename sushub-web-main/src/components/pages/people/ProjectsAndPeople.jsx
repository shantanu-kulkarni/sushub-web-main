"use client";
import React, { useContext } from "react";
import { Button, Accordion, AccordionItem } from "@nextui-org/react";
import CustomPagination from "@/components/global/pagination/Pagination";
import PeopleCard from "./PeopleCard";
import { useRouter } from "next-nprogress-bar";
import { UserContext } from "@/context/UserContext";
import { AuthContext } from "@/context/AuthContext";
import { PeopleContext } from "@/context/PeopleContext";
import {
  MailOpen,
  BadgeCheck,
  Send,
  Settings2,
  FilePlus2,
  UserRoundCheck,
} from "lucide-react";
const ProjectsAndPeople = () => {
  const { people } = useContext(PeopleContext);
  const { userInfo } = useContext(UserContext);
  const { currentUser } = useContext(AuthContext);
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["1"]));
  const router = useRouter();
  const sendEmailToGreenOffice = () => {
    window.location = "mailto:greenoffice.sustainabilityhub@uni-konstanz.de";
  };
  return (
    <div className="my-1 mt-2 xs:mt-4 xs:my-2 md:m-4 md:mt-8">
      <div className=" flex flex-col">
        <div className="flex justify-center">
          <div className="global-box-layout">
            <div className=" flex flex-col md:flex-row">
              <div className="w-full flex-col">
                <div className="global-title">
                  Organize Projects and Search People.
                </div>
                <div className="global-title-description">
                  You can now host your own project after becoming an organizer
                  and find people who are working towards sustainability.
                </div>
              </div>
                {currentUser &&
                userInfo &&
                !userInfo.isOrganizer &&
                !userInfo.isUnverifiedOrganizer ? (
                  <div className="global-element-layout">
                  <Button
                    className="border-black selection:border-black text-black w-full"
                    variant="bordered"
                    startContent={
                      <UserRoundCheck size={20} className="text-black" />
                    }
                    onClick={() =>
                      currentUser
                        ? router.push("people/new-organizer")
                        : router.push("/")
                    }
                  >
                    {currentUser
                      ? "Become An Organizer"
                      : "Log In To Become Organizer"}
                  </Button>
                  </div>
                ) : null}
                {currentUser &&
                userInfo &&
                !userInfo.isOrganizer &&
                userInfo.isUnverifiedOrganizer ? (
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
                ) : null}
              
            </div>
            {currentUser &&
            userInfo &&
            (userInfo.isOrganizer || userInfo.isUnverifiedOrganizer) ? (
              <div
                className={`w-full rounded-3xl bg-default-100/50 border-3 global-subtitle ${
                  userInfo && userInfo.isOrganizer
                    ? "border-green-500 bg-green-50"
                    : userInfo && userInfo.isUnverifiedOrganizer
                    ? "border-orange-500 bg-orange-50"
                    : "border-red-500 bg-red-50"
                } px-4 xs:px-4 md:px-8 py-4 mt-4 shadow-md flex items-center justify-center gap-2`}
              >
                {userInfo && userInfo.isOrganizer ? (
                  <div className="w-auto h-auto p-2">
                    <BadgeCheck size={24} />
                  </div>
                ) : (
                  <div className="w-auto h-auto p-2">
                    <MailOpen size={24} />
                  </div>
                )}
                <span className="flex flex-row justify-center items-center text-sm xs:text-sm md:text-medium font-semibold">
                  {userInfo && userInfo.isOrganizer
                    ? `You are a verified organizer. Your Organization id is ${
                        userInfo && userInfo.organization_id
                      }`
                    : "You are being verified as an organizer by our team. This may take up to a few days. We will get back to you soon."}
                </span>
              </div>
            ) : null}
            {console.log("Selected Keys: ", selectedKeys.size)}
            {currentUser && userInfo && userInfo.isOrganizer ? (
              <Accordion
                variant="light"
                isCompact
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
                className="px-0"
              >
                <AccordionItem
                  key="1"
                  aria-label="Organizer Controls"
                  title={`${selectedKeys.size == 0 ? "Organizer Options" : ""}`}
                  className="w-full global-subtitle rounded-3xl bg-default-100/50 px-4 xs:px-4 md:px-8 py-4 mt-8 shadow-md font-bold"
                >
                  <div>
                    <div className="global-subtitle">
                      Organizer Control Panel
                    </div>
                    <div className="global-subtitle-description">
                      Manage your verified and unverified projects, create new
                      projects and reach out to the people aligning with your
                      goals.
                    </div>
                    <div className="flex flex-col md:flex-row w-full">
                      <Button
                        className="bg-black text-white w-full md:w-1/3 md:h-16 my-1 md:m-2"
                        startContent={
                          <FilePlus2 size={20} className="text-white" />
                        }
                        onClick={() =>
                          currentUser
                            ? router.push("project/create-new")
                            : router.push("/")
                        }
                      >
                        {"Create New Project"}
                      </Button>
                      <Button
                        className="bg-black text-white w-full md:w-1/3 md:h-16 my-1 md:m-2"
                        startContent={
                          <Settings2 size={20} className="text-white" />
                        }
                        onClick={() => router.push("project/manage")}
                      >
                        {"Manage Projects"}
                      </Button>
                      <Button
                        className="bg-black text-white w-full md:w-1/3 md:h-16 my-1 md:m-2"
                        startContent={<Send size={20} className="text-white" />}
                        onClick={sendEmailToGreenOffice}
                      >
                        {"Contact Green Office"}
                      </Button>
                    </div>
                  </div>
                </AccordionItem>
              </Accordion>
            ) : null}
            <div className="text-black flex justify-center">
              <div className="w-full rounded-3xl bg-default-100/50 px-4 xs:px-4 md:px-8 pb-8 pt-4 mt-8 shadow-md">
                <div>
                  <div className="global-subtitle">
                    Find People and Organizations.
                  </div>
                  <div className="global-subtitle-description">
                    You can find the list of people and organizations hosting
                    your favourite projects. Write them to find the projects
                    that interest you.
                  </div>
                </div>
                <div className="">
                  <CustomPagination
                    listOfItems={people}
                    layoutItems={"w-full md:w-1/2"}
                  >
                    {(person) => (
                      <PeopleCard key={person.people_id} person={person} />
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

export default ProjectsAndPeople;
