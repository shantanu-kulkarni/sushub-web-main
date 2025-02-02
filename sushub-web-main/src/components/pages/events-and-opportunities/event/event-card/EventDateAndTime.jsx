import React, { useMemo } from "react";
import { FaRegCalendar } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import moment from "moment";
const EventDateAndTime = ({ eventTime, eventDate, isModeratorView }) => {
  const currentDateString = useMemo(() => {
    const currentDate = eventDate?.toDate
      ? eventDate.toDate()
      : new Date(eventDate);
    return moment(currentDate).format("YYYY-MM-DD").toString();
  }, [eventDate]);
  return (
    <div
      className={`flex flex-row w-full ${
        isModeratorView ? "text-black" : "text-white/60"
      }  text-sm xs:text-sm md:text-medium font-medium mt-4`}
    >
      <div className="flex flex-1 items-center">
        <div className="pr-2">
          <MdOutlineAccessTime size={20} />
        </div>
        {eventTime}
      </div>
      <div className="flex flex-1 items-center">
        <div className="pr-2">
          <FaRegCalendar size={20} />
        </div>
        {currentDateString}
      </div>
    </div>
  );
};

export default EventDateAndTime;
