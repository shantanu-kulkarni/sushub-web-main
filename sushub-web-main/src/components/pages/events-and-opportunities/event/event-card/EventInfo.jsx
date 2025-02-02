import React from "react";
import Link from "next/link";
import { BsGlobeAmericas } from "react-icons/bs";

const EventInfo = ({ eventTitle, eventUrl, isModeratorView, isRemoveCard }) => {
  return (
    <div className={`flex flex-row ${isRemoveCard ? "w-1/2" :"w-full"} ${isModeratorView ? "text-black" :"text-white/60"}  text-sm xs:text-sm md:text-medium font-medium mt-2`}>
      <div className="flex flex-1 items-center text-start">
        <div className="pr-2">
          <BsGlobeAmericas size={20} />
        </div>
        <Link
          onClick={(event) => event.stopPropagation()}
          target="_blank"
          href={eventUrl}
        >
          Learn More about <u>{eventTitle}</u>.
        </Link>
      </div>
    </div>
  );
};

export default EventInfo;
