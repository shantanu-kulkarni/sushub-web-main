import React from "react";
import { Button, Progress } from "@nextui-org/react";
import { Send } from "lucide-react";
const OrganizerFormSubmit = ({
  onClickAction,
  additionalInfoLoading,
  isDisabled = false,
}) => {
  return (
    <div className="w-full mt-4 flex justify-center">
      {!additionalInfoLoading ? (
        <Button
          isDisabled={isDisabled}
          startContent={<Send size={20} />}
          className="bg-black text-white w-full"
          variant="flat"
          type="submit"
          onClick={onClickAction}
        >
          Submit Request
        </Button>
      ) : (
        <Progress
          size="md"
          isIndeterminate
          aria-label="Loading..."
          classNames={{
            base: "max-w-md",
            indicator: "bg-gradient-to-r from-black to-black",
          }}
        />
      )}
    </div>
  );
};

export default OrganizerFormSubmit;
