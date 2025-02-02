import React from "react";
import CustomPagination from "@/components/global/pagination/Pagination";
import EventsCard from "@/components/pages/events-and-opportunities/event/event-card/EventsCard";
import {
  noEventFoundAnimationTitle,
  noEventFoundAnimationDescription,
} from "@/components/pages/events-and-opportunities/event/EventConstants";
const ShowEvents = ({ listOfItems }) => {
  if (listOfItems == []) {
    return;
  }
  return (
    <CustomPagination
      listOfItems={listOfItems}
      noSearchResultsAnimationTitle={noEventFoundAnimationTitle}
      noSearchResultsAnimationDescription={noEventFoundAnimationDescription}
    >
      {(event) => (
        <EventsCard
          key={event.event_id}
          eventItem={event}
          isModeratorView={true}
          isRemoveCard={false}
        />
      )}
    </CustomPagination>
  );
};

export default ShowEvents;
