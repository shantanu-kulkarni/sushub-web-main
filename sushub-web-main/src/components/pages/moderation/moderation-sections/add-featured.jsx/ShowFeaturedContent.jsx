import React from "react";
import CustomPagination from "@/components/global/pagination/Pagination";
import FeaturedContentCard from "../../featured/FeaturedContentCard";
import {
  noEventFoundAnimationTitle,
  noEventFoundAnimationDescription,
} from "@/components/pages/events-and-opportunities/event/EventConstants";
const ShowFeaturedContent = ({ listOfItems }) => {
  if (listOfItems == []) {
    return;
  }
  return (
    <CustomPagination
      listOfItems={listOfItems}
      noSearchResultsAnimationTitle={noEventFoundAnimationTitle}
      noSearchResultsAnimationDescription={noEventFoundAnimationDescription}
    >
      {(featured) => (
        <FeaturedContentCard
          key={featured.featured_id}
          featuredItem={featured}
          isRemoveCard={false}
        />
      )}
    </CustomPagination>
  );
};

export default ShowFeaturedContent;
