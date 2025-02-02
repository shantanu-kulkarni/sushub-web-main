import React from "react";
import CustomPagination from "@/components/global/pagination/Pagination";
import OpportunitiesCard from "./OpportuntiesCard";
import {
  noOpportunitiesFoundTitle,
  noOpportunitiesFoundDescription,
} from "./OpportunitiesConstants";

const OpportunityList = ({ opportunityData }) => {
  return (
    <div>
      <CustomPagination
        listOfItems={opportunityData}
        noSearchResultsAnimationTitle={noOpportunitiesFoundTitle}
        noSearchResultsAnimationDescription={noOpportunitiesFoundDescription}
      >
        {(opportunity) => (
          <OpportunitiesCard currentOpportunity={opportunity} />
        )}
      </CustomPagination>
    </div>
  );
};

export default OpportunityList;
