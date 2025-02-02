import React, { useContext } from "react";
import CustomPagination from "@/components/global/pagination/Pagination";
import {
  noEventFoundAnimationTitle,
  noEventFoundAnimationDescription,
} from "@/components/pages/events-and-opportunities/event/EventConstants";
import PeopleCard from "@/components/pages/people/PeopleCard";
import { OrganizerContext } from "@/context/OrganizerContext";
import OrganizerCard from "@/components/pages/people/OrganizerCard";
const VerifyOrganizations = () => {
  const { organizer, unverifiedOrganizer } = useContext(OrganizerContext);

  return (
    <div className="mt-4">
      <div className="mt-2">
        <CustomPagination
          listOfItems={unverifiedOrganizer}
          noSearchResultsAnimationTitle={noEventFoundAnimationTitle}
          noSearchResultsAnimationDescription={noEventFoundAnimationDescription}
        >
          {(person) => (
            <OrganizerCard
              key={person.organization_id}
              person={person}
              isModerator={true}
              isRemoveCard={false}
              isVerify={true}
            />
          )}
        </CustomPagination>
      </div>
    </div>
  );
};

export default VerifyOrganizations;
