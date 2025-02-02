"use client";
import React, { createContext, useState, useEffect } from "react";
import { Event } from "@/app/schema/Event";
import { eventsData } from "@/utils/EventsData";
import { usePathname } from "next/navigation";
import { disableApiAccessToApplication } from "@/utils/ApiToggle";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [loading, setLoading] = useState(true);
  const path = usePathname();

  useEffect(() => {
    if (!disableApiAccessToApplication) {

      if (path === "/profile/moderation" || path === "/events-and-opportunities") {
        // fetchAllEvents();
      } else {
        setLoading(false);
      }
    } else {
      setEvents(eventsData.events.map((eve) => Event.fromJson(eve)));
      setLoading(false);
    }
  }, [fetched, path]);

  return (
    <EventContext.Provider value={{ events, loading, setEvents }}>
      {children}
    </EventContext.Provider>
  );
};
