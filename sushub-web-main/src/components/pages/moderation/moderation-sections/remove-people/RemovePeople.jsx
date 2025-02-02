import React, { useContext } from "react";
import CustomPagination from "@/components/global/pagination/Pagination";
import {
  noEventFoundAnimationTitle,
  noEventFoundAnimationDescription,
} from "@/components/pages/events-and-opportunities/event/EventConstants";
import PeopleCard from "@/components/pages/people/PeopleCard";
import { PeopleContext } from "@/context/PeopleContext";

const RemovePeople = () => {
  const { people } = useContext(PeopleContext);
  return (
    <div className="mt-4">
      <div className="mt-2">
        <CustomPagination
          listOfItems={people}
          noSearchResultsAnimationTitle={noEventFoundAnimationTitle}
          noSearchResultsAnimationDescription={noEventFoundAnimationDescription}
        >
          {(person) => (
            <PeopleCard
              key={person.people_id}
              person={person}
              isModerator={true}
              isRemoveCard={true}
            />
          )}
        </CustomPagination>
      </div>
    </div>
  );
};

export default RemovePeople;
