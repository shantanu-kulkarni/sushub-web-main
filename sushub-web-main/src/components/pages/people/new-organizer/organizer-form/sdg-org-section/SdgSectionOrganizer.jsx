import React from "react";
import { Button } from "@nextui-org/react";
import { FaCheck } from "react-icons/fa6";

const SdgSectionOrganizer = ({
  organizationChips,
  selectedOrgChip,
  toggleOrgChip,
}) => {
  return (
    <div className="py-4 z-10">
      <div className="py-4 z-10">
        <div className="flex justify-center">
          <div className="flex-col text-start w-full md:w-2/3">
            <div className="text-black/60 font-semibold text-md md:text-xl">
              {"Select your Organization"}
            </div>
            <div className="text-black/30 text-sm font-semibold pt-1">
              {"Select at least one organization to proceed."}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center mt-2">
        <div className="flex gap-1 w-full md:w-2/3 flex-wrap">
          {organizationChips.map((projectFilter, index) => (
            <Button
              key={index}
              startContent={
                selectedOrgChip.includes(projectFilter) ? (
                  <FaCheck className="" />
                ) : null
              }
              color="default"
              size="sm"
              onClick={() => toggleOrgChip(projectFilter)}
              className={`z-5 shadow-md py-1 px-2 my-0.5 mx-0.5 hover:scale-105 ${
                selectedOrgChip.includes(projectFilter)
                  ? "bg-black text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {projectFilter}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SdgSectionOrganizer;
