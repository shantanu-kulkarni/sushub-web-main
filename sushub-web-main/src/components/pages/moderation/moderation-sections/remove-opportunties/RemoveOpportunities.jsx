import { React, useContext } from "react";
import CustomPagination from "@/components/global/pagination/Pagination";
import OpportunitiesCard from "@/components/pages/events-and-opportunities/opportunity/OpportuntiesCard";
import {
  noEventFoundAnimationTitle,
  noEventFoundAnimationDescription,
} from "@/components/pages/events-and-opportunities/event/EventConstants";
import { OpportunityContext } from "@/context/OpportunityContext";

const RemoveOpportunities = () => {
  const { opportunities } = useContext(OpportunityContext);
  if (opportunities == []) {
    return;
  }
  return (
    <div className="mt-4">
      <div className="mt-2">
        <CustomPagination
          listOfItems={opportunities}
          noSearchResultsAnimationTitle={noEventFoundAnimationTitle}
          noSearchResultsAnimationDescription={noEventFoundAnimationDescription}
        >
          {(opportunity) => (
            <OpportunitiesCard
              key={opportunity.opportunity_id}
              currentOpportunity={opportunity}
              isModeratorView={true}
              isRemoveCard={true}
            />
          )}
        </CustomPagination>
      </div>
    </div>
  );
};

export default RemoveOpportunities;
