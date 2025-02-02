import React from "react";
import CustomPagination from "@/components/global/pagination/Pagination";
import EventsCard from "./event-card/EventsCard";
import EventNotSelected from "./EventNotSelected";
import { getFullDateWithMonth } from "./EventDateWithMonthName";
import {
  eventSectionDescription,
  noEventFoundAnimationTitle,
  noEventFoundAnimationDescription,
  noEventSelectedAnimationTitle,
  noEventSelectedDescription,
} from "./EventConstants";

const EventList = (props) => {
  //console.log("PROPS SELECTED DATE>>>", {date: props.selectedDate.toDateString(), currentDate: new Date().toDateString() });
  return (
    <div className="w-full rounded-3xl bg-default-100/50 px-4 pb-8 pt-4 shadow-md">
      <div>
        <div>
          {props.selectedDate && (
            <div>
              <div className="global-subtitle">
                {props.selectedDate.toDateString() === new Date().toDateString()
                  ? `Events Today.`
                  : `Events on ${getFullDateWithMonth(props.selectedDate)}.`}
              </div>
              <div className="global-subtitle-description">
                {eventSectionDescription}
              </div>
            </div>
          )}
        </div>

        {props.selectedDate != null ? (
          <CustomPagination
            listOfItems={props.currentEvents}
            noSearchResultsAnimationTitle={noEventFoundAnimationTitle}
            noSearchResultsAnimationDescription={
              noEventFoundAnimationDescription
            }
          >
            {(events) => <EventsCard eventItem={events} />}
          </CustomPagination>
        ) : (
          <EventNotSelected
            animationTitle={noEventSelectedAnimationTitle}
            animationDescription={noEventSelectedDescription}
          />
        )}
      </div>
    </div>
  );
};

export default EventList;
