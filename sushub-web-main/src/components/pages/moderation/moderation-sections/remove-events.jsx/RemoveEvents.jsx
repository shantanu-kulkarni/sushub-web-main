import {React, useContext} from 'react'
import CustomPagination from "@/components/global/pagination/Pagination";
import EventsCard from "../../../events-and-opportunities/event/event-card/EventsCard";
import { noEventFoundAnimationTitle, noEventFoundAnimationDescription } from "../../../events-and-opportunities/event/EventConstants";
import { EventContext } from '@/context/EventContext';
const RemoveEvents = () => {
  const {events} = useContext(EventContext);
  return (
    <div className="mt-4">
    <div className="mt-2">
      <CustomPagination
          listOfItems={events}
          noSearchResultsAnimationTitle={noEventFoundAnimationTitle}
          noSearchResultsAnimationDescription={
            noEventFoundAnimationDescription
          }
        >
          {(eve) => <EventsCard eventItem={eve} isModeratorView={true} isRemoveCard={true}/>}
        </CustomPagination>
    </div>
  </div>
  )
}

export default RemoveEvents