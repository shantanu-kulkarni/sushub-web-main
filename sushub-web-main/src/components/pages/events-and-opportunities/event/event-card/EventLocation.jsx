import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const EventLocation = ({ eventLocation, isModeratorView, isRemoveCard }) => {
  return (
    <div className={`flex flex-row ${isRemoveCard ? "w-1/2" :"w-full"} ${isModeratorView ? "text-black" :"text-white/60"}  text-sm xs:text-sm md:text-medium font-medium text-start`}>
      <div className="flex flex-1 items-center">
        <div className="pr-2">
          <IoLocationOutline size={20} />
        </div>
        {eventLocation}
      </div>
    </div>
  );
};

export default EventLocation;
