"use client";
import { React, useState, useEffect, useContext, useRef } from "react";
import moment from "moment";
import { eventsData } from "../../../utils/EventsData";
import OpportunitiesPageHeader from "./opportunity/OpportunitiesPageHeader";
import EventSectionHeader from "./event/EventSectionHeader";
import EventList from "./event/EventList";
import OpportunitySectionHeader from "./opportunity/OpportunitySectionHeader";
import OpportunityList from "./opportunity/OpportunityList";
import EventCalendar from "./event/EventCalendar";
import { OpportunityContext } from "@/context/OpportunityContext";
import { EventContext } from "@/context/EventContext";

const EventsAndOpportunities = () => {
  const [value, setValue] = useState(new Set(["Events"]));
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewDate, setViewDate] = useState(new Date());
  const { events } = useContext(EventContext);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [currentCalendarDates, setCurrentCalendarDates] = useState([]);
  const { opportunities } = useContext(OpportunityContext);

  // Ref to scroll to EventList
  const eventListRef = useRef(null);

  const onChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const onActiveStartDateChange = ({ activeStartDate, view }) => {
    setViewDate(activeStartDate);
    setSelectedDate(null);
  };

  function formatFirebaseTimestampToDate(firebaseTimestamp) {
    const date = firebaseTimestamp?.toDate
      ? firebaseTimestamp.toDate()
      : new Date(firebaseTimestamp);
    return moment(date).format("YYYY-MM-DD");
  }

  useEffect(() => {
    setCurrentEvents(events);
  }, [events]);

  useEffect(() => {
    const formattedSelectedDate = formatFirebaseTimestampToDate(selectedDate);
    const currentDayProjects = events.filter((event) => {
      const eventDateStr = event.event_date;
      return eventDateStr === formattedSelectedDate;
    });
    setCurrentEvents(currentDayProjects);

    // Scroll to EventList when selectedDate changes
    if (eventListRef.current) {
      eventListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [events, selectedDate]);

  useEffect(() => {
    let mark = [];
    events.forEach((item) => {
      const dateStr = item.event_date;
      mark.push(dateStr);
    });
    setCurrentCalendarDates(mark);
  }, [events]);

  return (
    <div className="my-1 mt-2 xs:mt-4 xs:my-2 md:m-4 md:mt-8">
      <div className=" flex flex-col">
        <div className="flex justify-center">
          <div className="global-box-layout">
            <OpportunitiesPageHeader
              selectionValue={value}
              onSelectionChangeValue={(key) => setValue(key)}
            />
            {value.has("Events") ? (
              <div className="text-black flex justify-center">
                <div className="w-full rounded-3xl bg-default-100/50 px-4 xs:px-4 lg:px-8 pb-8 pt-4 mt-8 shadow-md">
                  <EventSectionHeader />
                  <div className="flex justify-start sm:flex-row flex-col w-full">
                    <div className="w-full mb-4 sm:mb-0 sm:mr-4 sm:w-1/2 md:w-5/12 xl:w-1/3">
                    <EventCalendar
                      onChange={onChange}
                      selectedDate={selectedDate}
                      onActiveStartDateChange={onActiveStartDateChange}
                      currentCalendarDates={currentCalendarDates}
                    />
                    </div>
                    <div ref={eventListRef} className="w-full mt-4 sm:mt-0 sm:ml-4 sm:w-1/2 md:w-7/12 xl:w-2/3">
                      <EventList
                        selectedDate={selectedDate}
                        currentEvents={currentEvents}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full rounded-3xl bg-default-100/50 px-4 xs:px-4 md:px-4 lg:px-8 pb-8 pt-4 mt-8 shadow-md">
                <div>
                  <OpportunitySectionHeader />
                  <OpportunityList
                    opportunityData={opportunities}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsAndOpportunities;

