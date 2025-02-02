import React, { useEffect, useState, useContext } from "react";
import { Card, Image, Button, User, Spinner } from "@nextui-org/react";
import { useRouter } from "next-nprogress-bar";
import SdgCard from "@/components/global/sdg-card/SdgCard";
import PeopleRemoveButton from "./PeopleRemoveButton";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import toast from "react-hot-toast";
import { OrganizerContext } from "@/context/OrganizerContext";
import { UserContext } from "@/context/UserContext";
import { Organizer } from "@/app/schema/Organizer";
import { PeopleContext } from "@/context/PeopleContext";

const OrganizerCard = ({
  person,
  isModerator,
  isRemoveCard = false,
  isVerify,
}) => {
  const {
    organizer,
    setOrganizer,
    setVerifiedOrganizer,
    setUnverifiedOrganizer,
  } = useContext(OrganizerContext);

  const router = useRouter();
  const { userInfo, setUserInfo } = useContext(UserContext);
  const { setPeople } = useContext(PeopleContext);
  const [isVerifying, setIsVerifying] = useState(false);

  const notify = () => {
    toast(`${person.organizer_name} has been verified!`, {
      position: "bottom-right",
      style: {
        color: "#fff",
        backgroundColor: "#000",
      },
    });
  };

  //console.log("person details", person);
  if (person == []) {
    return;
  }

  const handleVerifyClick = () => {
    setIsVerifying(true);
    Organizer.moveOrganizerToVerified(
      person.organizer_id,
      setUserInfo,
      setPeople
    )
      .then((updateOrganizerList) => {
        const { individualData, mergedData } = updateOrganizerList;
        setOrganizer(mergedData);
        setVerifiedOrganizer(individualData["verified"]);
        setUnverifiedOrganizer(individualData["unverified"]);
        notify();
      })
      .catch((e) => {
        console.error(
          "There was an error in updating organizer list",
          e
        );
      })
      .finally(() => {
        setIsVerifying(false);
      });
  };

  return (
    <Card
      onClick={() =>
        router.push(
          userInfo && userInfo.user_email == person.user_email
            ? "/profile"
            : `/people/detail?id=${person.organizer_id}`
        )
      }
      isPressable
      className={`capitalize w-full mx-2 ${
        isModerator ? "h-56" : "h-40"
      } aspect-video text-xl font-bold bg-white/30 border-2 border-black text-black flex flex-row items-center justify-center p-0 hover:scale-105 shadow-md`}
    >
      <div className="w-full flex flex-row">
        <div
          className={`${
            isModerator ? "w-4/12" : "w-3/12"
          }  h-full aspect-square flex justify-center items-center p-2`}
        >
          <div className="w-full p-2">
            <Image
              alt="Person Image"
              isZoomed
              radius="full"
              src={person.organizer_imageUrl}
              className={
                "w-full aspect-square text-large shadow-md z-0 rounded-full"
              }
            />
          </div>
        </div>
        <div
          className={`${
            isModerator ? "w-8/12" : "w-9/12"
          } flex flex-col items-start justify-center px-2`}
        >
          <div className="text-2xl font-bold line-clamp-1 z-10 text-black">
            {person.organizer_name}
          </div>
          <div className="">
            <div className="flex flex-col z-10 py-0">
            </div>
            <div className="text-medium font-semibold lowercase text-black/60 pt-2 z-10 text-start">
              {person.organizer_email}
            </div>
            <div
              className="w-full flex flex-row mt-2"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mr-2">
                <Button
                  disableRipple
                  radius="none"
                  variant="bordered"
                  className="border-black text-black px-4 rounded-md"
                  size="sm"
                >
                  SDGs
                </Button>
              </div>
              <div className="flex flex-row line-clamp-">
                {person.organizer_sdgs.map((sdg, index) => {
                  return (
                    <div className="mx-1" key={index}>
                      <SdgCard
                        currentSdg={sdg}
                        isDetailPage={false}
                        setPillColor="#000000"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {isRemoveCard ? (
            <div className="mt-2 w-full flex flex-row">
              <div className="flex justify-end w-full">
                <PeopleRemoveButton currentPerson={person} />
              </div>
            </div>
          ) : null}
          {isVerify ? (
            <div className="w-full pt-4">
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
        </div>
      </div>
    </Card>
  );
};

export default OrganizerCard;
