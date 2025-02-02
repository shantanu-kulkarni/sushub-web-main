import React from "react";

const NewOrganizerHeader = () => {
  return (
    <div className="global-title-layout">
      <div className="w-full flex-col">
        <div className="global-subtitle">
          {"Become an organizer"}
        </div>
        <div className="global-subtitle-description">
          {
            "You can become an organizer by creating a project and entering your information there. If you don't want to start a project and still want to be an organizer, please fill out this request form."
          }
        </div>
      </div>
    </div>
  );
};

export default NewOrganizerHeader;
