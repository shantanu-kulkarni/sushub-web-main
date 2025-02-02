import React from "react";
import { Checkbox } from "@nextui-org/react";

const AdditionalSectionFeaturedCheck = ({ showPeople, setShowPeople }) => {
  return (
    <div className="flex justify-center">
      <div className="w-full md:w-2/3 mt-8">
        <Checkbox
          isSelected={showPeople}
          color="default"
          onValueChange={setShowPeople}
        >
          Get featured in Find People tab
        </Checkbox>
      </div>
    </div>
  );
};

export default AdditionalSectionFeaturedCheck;
