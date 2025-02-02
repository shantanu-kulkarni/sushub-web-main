import React from "react";
import { Button, Input } from "@nextui-org/react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
const AddEventButtons = ({
  createEventSection,
  errorState,
  createEventSectionState,
}) => {
  return (
    <div>
      {createEventSection ? (
        <div className="mt-2">
          <Button
            variant="bordered"
            onClick={() => {
              errorState();
              createEventSectionState();
            }}
            className=" text-black border-black font-semibold w-full rounded-xl h-12"
            startContent={<IoIosArrowRoundBack size={20} />}
          >
            View All Events
          </Button>
        </div>
      ) : (
        <div className="mt-2">
          <Button
            variant="flat"
            onClick={() => {
              createEventSectionState();
            }}
            className="bg-black text-white w-full rounded-xl h-12"
            startContent={<IoMdAddCircleOutline size={20} />}
          >
            Create New Event
          </Button>
        </div>
      )}
    </div>
  );
};

export default AddEventButtons;
