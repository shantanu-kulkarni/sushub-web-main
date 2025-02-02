import React from "react";
import { Button } from "@nextui-org/react";
import { ChevronRight } from "lucide-react";

const OrganizerFormNext = ({ onClickAction, isDisabled = false }) => {
  return (
    <div className="w-full mt-4 flex justify-center">
      <Button
        isDisabled={isDisabled}
        className="bg-black text-white w-full"
        variant="flat"
        endContent={<ChevronRight size={20} />}
        type="submit"
        onClick={onClickAction}
      >
        Next
      </Button>
    </div>
  );
};

export default OrganizerFormNext;
