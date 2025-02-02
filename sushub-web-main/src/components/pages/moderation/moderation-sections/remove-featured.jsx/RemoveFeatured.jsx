import { React, useContext } from "react";
import CustomPagination from "@/components/global/pagination/Pagination";
import { FeaturedContext } from "@/context/FeaturedContext";
import {
  noEventFoundAnimationTitle,
  noEventFoundAnimationDescription,
} from "@/components/pages/events-and-opportunities/event/EventConstants";
import FeaturedContentCard from "../../featured/FeaturedContentCard";

const RemoveFeatured = () => {
  const { featuredContent } = useContext(FeaturedContext);
  if (featuredContent == []) {
    return;
  }
  return (
    <div className="mt-4">
      <div className="mt-2">
        <CustomPagination
          listOfItems={featuredContent}
          noSearchResultsAnimationTitle={noEventFoundAnimationTitle}
          noSearchResultsAnimationDescription={noEventFoundAnimationDescription}
        >
          {(featured) => (
            <FeaturedContentCard key={featured.featured_id} featuredItem={featured} isRemoveCard={true} />
          )}
        </CustomPagination>
      </div>
    </div>
  );
};

export default RemoveFeatured;
