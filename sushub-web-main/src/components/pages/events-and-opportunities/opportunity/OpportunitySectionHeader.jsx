import React from "react";
import {
  opportunitiesSectionTitle,
  opportunitiesSectionDescription,
} from "./OpportunitiesConstants";

const OpportunitySectionHeader = () => {
  return (
    <div>
      <div className="global-subtitle">
        {opportunitiesSectionTitle}
      </div>
      <div className="global-subtitle-description">
        {opportunitiesSectionDescription}
      </div>
    </div>
  );
};

export default OpportunitySectionHeader;
