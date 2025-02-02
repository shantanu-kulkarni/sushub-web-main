import React from "react";
import { Button } from "@nextui-org/react";
import { ChevronLeft } from "lucide-react";

const OrganizerFormPrevious = ({ onClickAction, isDisabled = false }) => {
  return (
    <div className="w-full mt-4 flex justify-center">
      <Button
        isDisabled={isDisabled}
        className="border-black w-full"
        variant="bordered"
        startContent={<ChevronLeft size={20} />}
        onClick={onClickAction}
      >
        Previous
      </Button>
    </div>
  );
};

export default OrganizerFormPrevious;
