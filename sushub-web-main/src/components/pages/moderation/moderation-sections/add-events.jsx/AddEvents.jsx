import { React, useState, useContext } from "react";
import { eventsData } from "../../../../../utils/EventsData";
import toast from "react-hot-toast";
import ShowEvents from "./ShowEvents";
import AddEventButtons from "./AddEventButtons";
import CreateEventAnimation from "./CreateEventAnimation";
import CreateEventForm from "./CreateEventForm";
import { EventContext } from "@/context/EventContext";
import { Event } from "@/app/schema/Event";
const AddEvents = () => {
  const [createEventSection, setCreateEventSection] = useState(false);
  const [eventName, setEventName] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventUrl, setEventUrl] = useState("");
  const [eventDate, setEventDate] = useState(null);
  const [errors, setErrors] = useState({});
  const [eventSubmissionLoading, setEventSubmissionLoading] = useState(false);
  const { events, setEvents } = useContext(EventContext);
  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };
  const handleEventTimeChange = (e) => {
    setEventTime(e.target.value);
  };
  const handleEventLocationChange = (e) => {
    setEventLocation(e.target.value);
  };
  const handleEventUrlChange = (e) => {
    setEventUrl(e.target.value);
  };
  const handleEventDateChange = (getCurrentSelectedDate) => {
    setEventDate(getCurrentSelectedDate);
  };
  const validateBasicInfoForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!eventName) {
      formIsValid = false;
      errors["eventName"] = "Event Name is required";
    }
    if (!eventTime) {
      formIsValid = false;
      errors["eventTime"] = "Event time is required";
    }
    if (!eventLocation) {
      formIsValid = false;
      errors["eventLocation"] = "Event Location is required";
    }
    if (!eventDate) {
      formIsValid = false;
      errors["eventDate"] = "Event Date is required";
    }
    if (!eventUrl) {
      formIsValid = false;
      errors["eventUrl"] = "Event URL is required";
    } else {
      try {
        new URL(eventUrl);
      } catch (e) {
        formIsValid = false;
        errors["eventUrl"] = "Invalid URL";
      }
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleBasicInfoSubmit = (e) => {
    e.preventDefault();
    if (validateBasicInfoForm()) {
      setEventSubmissionLoading(true);
      const eventInstance = new Event({
        event_id: 0,
        event_date: eventDate,
        event_time: eventTime,
        event_link: eventUrl,
        event_name: eventName,
        event_location: eventLocation,
      }).toJson();

      Event.addEvent(eventInstance)
        .then((updatedEventList) => {
          setEvents(updatedEventList);
          notify();
          setEventName("");
          setEventTime("");
          setEventLocation("");
          setEventUrl("");
          setEventDate(null);
          setCreateEventSection(false);
        })
        .catch((e) => {
          console.error("There was some problem", e);
          toast.error("Failed to create the event. Please try again.");
        })
        .finally(() => {
          setEventSubmissionLoading(false);
        });
    } else {
      //console.log("Validation Failed");
    }
  };

  const notify = () => {
    toast(`Event ${eventName} has been created!`, {
      position: "bottom-right",
      style: {
        color: "#fff",
        backgroundColor: "#000",
      },
    });
  };

  return (
    <div className="mt-4">
      <AddEventButtons
        createEventSection={createEventSection}
        errorState={() => setErrors({})}
        createEventSectionState={() =>
          setCreateEventSection(!createEventSection)
        }
      />
      <div className="mt-2">
        {createEventSection ? (
          <div className="mt-8">
            <div className="w-full flex flex-col justify-center items-center">
              <CreateEventAnimation />
              <div className="mt-8 text-left flex-row w-full text-black">
                <CreateEventForm
                  eventName={eventName}
                  eventTime={eventTime}
                  eventLocation={eventLocation}
                  eventUrl={eventUrl}
                  eventDate={eventDate}
                  errors={errors}
                  eventSubmissionLoading={eventSubmissionLoading}
                  handleEventDateChange={handleEventDateChange}
                  handleEventNameChange={handleEventNameChange}
                  handleEventTimeChange={handleEventTimeChange}
                  handleEventLocationChange={handleEventLocationChange}
                  handleEventUrlChange={handleEventUrlChange}
                  handleBasicInfoSubmit={handleBasicInfoSubmit}
                  validateBasicInfoForm={validateBasicInfoForm}
                />
              </div>
            </div>
          </div>
        ) : (
          <ShowEvents listOfItems={events} />
        )}
      </div>
    </div>
  );
};

export default AddEvents;
