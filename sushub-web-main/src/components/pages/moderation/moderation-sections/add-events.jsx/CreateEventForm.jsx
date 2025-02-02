import React from "react";
import { IoStar } from "react-icons/io5";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { BsGlobeAmericas } from "react-icons/bs";
import {
  Input,
  Button,
  PopoverContent,
  Popover,
  PopoverTrigger,
  Progress
} from "@nextui-org/react";
import Calendar from "react-calendar";
import { FaRegCalendar } from "react-icons/fa";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import "../../../events-and-opportunities/event/Calendar.css";
const CreateEventForm = ({
  eventName,
  eventTime,
  eventLocation,
  eventUrl,
  eventDate,
  errors,
  eventSubmissionLoading,
  handleEventNameChange,
  handleEventTimeChange,
  handleEventLocationChange,
  handleEventUrlChange,
  handleEventDateChange,
  handleBasicInfoSubmit,
  validateBasicInfoForm,
}) => {
  const content = (
    <PopoverContent className="w-[300px]">
      <Calendar
        onChange={(date) => {
          //console.log("EVENT DATE>>>>>>", typeof eventDate);
          handleEventDateChange(date);
        }}
        value={eventDate}
        className="border-0 text-black"
        defaultValue={[]}
      />
    </PopoverContent>
  );
  return (
    <form onSubmit={handleBasicInfoSubmit}>
      
      <div className="w-full mt-4 flex justify-center ">
        <Input
          isRequired
          onChange={handleEventNameChange}
          value={eventName}
          label="Title"
          placeholder="Enter the title of the event"
          variant="bordered"
          isInvalid={errors.eventName ? true : false}
          errorMessage={errors.eventName}
          className="w-full sm:w-2/3 sm:mr-1 mb-2 sm:mb-0"
          startContent={<IoStar size={20} />}
          translate="no"
        />
      </div>
      <div className="w-full mt-4 flex justify-center">
        <Input
          isRequired
          onChange={handleEventTimeChange}
          value={eventTime}
          label="Time"
          placeholder="Enter the time of the event"
          variant="bordered"
          isInvalid={errors.eventTime ? true : false}
          errorMessage={errors.eventTime}
          className="w-full sm:w-2/3 sm:mr-1 mb-2 sm:mb-0 "
          startContent={<MdOutlineAccessTime size={20} />}
          translate="no"
        />
      </div>
      <div className="w-full mt-4 flex justify-center">
        <Input
          isRequired
          onChange={handleEventLocationChange}
          value={eventLocation}
          label="Place"
          placeholder="Enter the location of the event"
          variant="bordered"
          isInvalid={errors.eventLocation ? true : false}
          errorMessage={errors.eventLocation}
          className="w-full sm:w-2/3 sm:mr-1 mb-2 sm:mb-0 "
          startContent={<IoLocationOutline size={20} />}
          translate="no"
        />
      </div>
      <div className="w-full mt-4 flex justify-center">
        <Input
          isRequired
          onChange={handleEventUrlChange}
          value={eventUrl}
          label="URL"
          placeholder="Enter the link for the event details"
          variant="bordered"
          isInvalid={errors.eventUrl ? true : false}
          errorMessage={errors.eventUrl}
          className="w-full sm:w-2/3 sm:mr-1 mb-2 sm:mb-0 "
          startContent={<BsGlobeAmericas size={20} />}
          translate="no"
        />
      </div>
      <div className="w-full mt-4 flex justify-center items-center">
        <div className="w-2/3 flex justify-end items-end flex-col">
          <Popover
            key={"blur"}
            showArrow
            offset={10}
            backdrop={"blur"}
            className=""
          >
            <PopoverTrigger>
              <Button
                startContent={<FaRegCalendar size={20} />}
                className={`${
                  errors.eventDate
                    ? "border-danger text-danger"
                    : "border-black text-black"
                } w-1/2`}
                variant="bordered"
              >
                {eventDate == null
                  ? "Select Date"
                  : moment(eventDate).format("DD-MM-YYYY")}
              </Button>
            </PopoverTrigger>
            {content}
          </Popover>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <div className="w-2/3 flex flex-col">
          <div className="w-full mt-4 flex justify-center">
            {!eventSubmissionLoading ?<Button
              className="bg-black text-white w-full"
              variant="flat"
              type="submit"
              onClick={validateBasicInfoForm}
            >
              Create New Event
            </Button>: <Progress
      size="md"
      isIndeterminate
      aria-label="Loading..."
      classNames={{
        base: "max-w-md",
        indicator: "bg-gradient-to-r from-black to-black",
      }}
    />}
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateEventForm;
