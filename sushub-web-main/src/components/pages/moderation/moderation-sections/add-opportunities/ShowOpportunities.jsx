import React from "react";
import CustomPagination from "@/components/global/pagination/Pagination";
import {
  noEventFoundAnimationTitle,
  noEventFoundAnimationDescription,
} from "@/components/pages/events-and-opportunities/event/EventConstants";
import OpportunitiesCard from "@/components/pages/events-and-opportunities/opportunity/OpportuntiesCard";

const ShowOpportunities = ({ listOfItems }) => {

  if (listOfItems == []) {
    return;
  }
  return (
    <CustomPagination
      listOfItems={listOfItems}
      noSearchResultsAnimationTitle={noEventFoundAnimationTitle}
      noSearchResultsAnimationDescription={noEventFoundAnimationDescription}
    >
      {(opportunity) => (
        <OpportunitiesCard
          key={opportunity.opportunity_id}
          currentOpportunity={opportunity}
          isModeratorView={true}
          isRemoveCard={false}
        />
      )}
    </CustomPagination>
  );
};

export default ShowOpportunities;
