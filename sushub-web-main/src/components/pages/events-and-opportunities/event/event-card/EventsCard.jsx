import React from "react";
import { Card } from "@nextui-org/react";
import EventDateAndTime from "./EventDateAndTime";
import EventLocation from "./EventLocation";
import EventInfo from "./EventInfo";
import EventRemoveButton from "./EventRemoveButton";

const EventsCard = ({
  eventItem,
  isModeratorView = false,
  isRemoveCard = false,
}) => {
  return (
    <Card
      translate="no"
      onClick={() =>
        window.open(eventItem.event_link, "_blank", "noopener,noreferrer")
      }
      isPressable
      className={`capitalize w-full h-auto text-xl font-bold border-2 border-black ${
        isModeratorView ? "bg-white text-black" : "bg-black text-white"
      } flex flex-col sm:flex-row items-start justify-center p-4 sm:p-6 hover:scale-105 shadow-md transition-transform duration-300`}
    >
      <div className="w-full">
        <div className="flex flex-col items-start">
          <div
            className={`font-semibold text-start text-lg sm:text-xl md:text-2xl line-clamp-1 z-10 ${
              isModeratorView ? "text-black" : "text-white"
            }`}
          >
            {eventItem.event_name}
          </div>
          <EventDateAndTime
            eventDate={eventItem.event_date}
            eventTime={eventItem.event_time}
            isModeratorView={isModeratorView}
          />
          <div className={`${isRemoveCard ? "flex flex-row w-full" : "flex flex-col w-full"} mt-2`}>
            <EventLocation
              eventLocation={eventItem.event_location}
              isModeratorView={isModeratorView}
              isRemoveCard={isRemoveCard}
            />
            <EventInfo
              eventTitle={eventItem.event_name}
              eventUrl={eventItem.event_link}
              isModeratorView={isModeratorView}
              isRemoveCard={isRemoveCard}
            />
          </div>
          {isRemoveCard && (
            <EventRemoveButton currentEvent={eventItem} />
          )}
        </div>
      </div>
    </Card>
  );
};

export default EventsCard;
