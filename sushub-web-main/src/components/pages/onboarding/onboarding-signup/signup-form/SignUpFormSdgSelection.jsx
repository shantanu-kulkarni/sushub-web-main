import React, { useContext } from 'react'
import { Button } from "@nextui-org/react";
import { OnboardingStateManagerContext } from '../../OnboardingStateManager';
import { toggleSdgChip } from './SignUpFormChipToggles';
import { sdgChips } from './SignUpFormConstants';

const SignUpFormSdgSelection = () => {
    const {selectSdgChips, setSelectedSdgChips} = useContext(OnboardingStateManagerContext);
  return (
    <div className="w-full flex items-center justify-center">
    <div>
      {" "}
      <div className=" mt-4 z-10">
        <div className="flex justify-center">
          <div className="flex-col text-start w-2/3">
            <div className="text-white font-normal text-sm">
              {"Choose your SDGs (Required)"}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center mt-2">
        <div className="flex gap-1 w-2/3 flex-wrap">
          {sdgChips.map((projectFilter, index) => {
            return (
              <Button
                key={index}
                variant="bordered"
                color="default"
                size="sm"
                onClick={() => toggleSdgChip(projectFilter, setSelectedSdgChips)}
                style={{
                  backgroundColor: selectSdgChips.includes(projectFilter)
                    ? "white"
                    : "black",
                  color: selectSdgChips.includes(projectFilter)
                    ? "black"
                    : "white",
                }}
                className={`z-5 shadow-md py-1 px-1 my-0.5 mx-0.5 hover:scale-105 border-white min-w-unit-8`}
              >
                {projectFilter}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  </div>
  )
}

export default SignUpFormSdgSelection