import React from "react";
import {
  eventSectionHeaderTitle,
  eventSectionHeaderDescription,
} from "./EventConstants";

const EventSectionHeader = () => {
  return (
    <div>
      <div className="global-subtitle">
        {eventSectionHeaderTitle}
      </div>
      <div className="global-subtitle-description">
        {eventSectionHeaderDescription}
      </div>
    </div>
  );
};

export default EventSectionHeader;
