import React, { useContext } from "react";
import { Button } from "@nextui-org/react";
import { FaCheck } from "react-icons/fa6";
import { OnboardingStateManagerContext } from "../../OnboardingStateManager";
import { toggleOrgChip } from "./SignUpFormChipToggles";
import { organizationChips } from "./SignUpFormConstants";

const SignUpFormOrganizationSelection = () => {
  const { selectedOrgChip, setSelectedOrgChip } = useContext(
    OnboardingStateManagerContext
  );
  return (
    <div className="w-full flex items-center justify-center">
      <div className="z-10">
        <div className="mt-4 z-10">
          <div className="flex justify-center">
            <div className="flex-col text-start w-2/3">
              <div className="text-white font-normal text-sm">
                {"Select your Organization (Required)"}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center mt-2">
          <div className="flex gap-1 w-2/3 flex-wrap">
            {organizationChips.map((projectFilter, index) => (
              <Button
                key={index}
                variant="bordered"
                startContent={
                  selectedOrgChip.includes(projectFilter) ? (
                    <FaCheck className="" />
                  ) : null
                }
                color="default"
                size="sm"
                onClick={() => toggleOrgChip(projectFilter, setSelectedOrgChip)}
                className={`z-5 shadow-md py-1 px-2 my-0.5 mx-0.5 hover:scale-105 border-white ${
                  selectedOrgChip.includes(projectFilter)
                    ? "bg-white text-black"
                    : "bg-black text-white"
                }`}
              >
                {projectFilter}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpFormOrganizationSelection;
