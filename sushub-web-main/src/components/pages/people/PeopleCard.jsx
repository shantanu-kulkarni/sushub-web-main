import React, { useContext } from "react";
import { Card, Image, Button } from "@nextui-org/react";
import { useRouter } from "next-nprogress-bar";
import PeopleRemoveButton from "./PeopleRemoveButton";
import { UserContext } from "@/context/UserContext";
import SdgCard from "@/components/global/sdg-card/SdgCard";

const PeopleCard = ({ person, isModerator, isRemoveCard = false }) => {
  const router = useRouter();
  const { userInfo } = useContext(UserContext);

  if (!person || Object.keys(person).length === 0) {
    return null;
  }

  return (
    <Card
      translate="no"
      onClick={() =>
        router.push(
          userInfo && userInfo.user_email === person.people_email
            ? "/profile"
            : `/people/detail?id=${person.people_id}`
        )
      }
      isPressable
      className="capitalize w-full bg-neutral-200/50 text-black flex flex-col xs:flex-row items-center md:mx-2 justify-center p-0 hover:scale-105 shadow-md transition-transform duration-300"
    >
      <div className="w-full flex flex-col xs:flex-row">
        {/* Image Section */}
        <div className="w-full xs:w-4/12 h-auto flex justify-center items-center p-2">
          <div className="w-24 h-24 xs:w-full xs:h-auto p-2">
            <Image
              alt="Person Image"
              isZoomed
              radius="full"
              src={person.people_imgURL}
              className="w-full aspect-square shadow-md rounded-full"
            />
          </div>
        </div>
        {/* Content Section */}
        <div className="w-full xs:w-8/12 flex flex-col items-start justify-center px-4 xs:px-2 py-2 xs:py-0">
          <div className=" text-lg xs:text-lg md:text-xl font-bold overflow-hidden text-ellipsis text-left line-clamp-1">{person.people_name}</div>
          <div className="text-xs xs:text-sm sm:text-base text-black/60 font-semibold overflow-hidden text-ellipsis text-left line-clamp-1">
            {`@ ${person.people_organization}`}
          </div>
          <div className="text-xs xs:text-sm sm:text-base text-black/30 font-semibold pt-1 overflow-hidden text-ellipsis text-left line-clamp-1">
            {person.people_department}
          </div>
          {isRemoveCard && (
            <div className="mt-2 w-full flex flex-row">
              <div className="flex justify-end w-full">
                <PeopleRemoveButton currentPerson={person} />
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default PeopleCard;
