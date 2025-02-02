import React from "react";
import { Button, Progress } from "@nextui-org/react";

const OrganizerFormModeratorSubmit = ({
  onClickAction,
  moderatorInfoLoading,
  isDisabled = false,
}) => {
  return (
    <div className="w-full mt-4 flex justify-center">
      {!moderatorInfoLoading ? (
        <Button
          isDisabled={isDisabled}
          className="bg-black text-white w-full"
          variant="flat"
          type="submit"
          onClick={onClickAction}
        >
          Add Person
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

export default OrganizerFormModeratorSubmit;
