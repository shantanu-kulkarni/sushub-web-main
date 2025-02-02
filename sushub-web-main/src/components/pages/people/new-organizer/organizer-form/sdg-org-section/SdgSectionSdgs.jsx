import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";

const SdgSectionSdgs = ({
  sdgChips,
  sdgColorMap,
  selectSdgChips,
  toggleSdgChip,
}) => {
  const [disableSdgChips, setDisableSdgChips] = useState(false);

  useEffect(() => {
    if (selectSdgChips.length >= 5) {
      setDisableSdgChips(true);
    } else {
      setDisableSdgChips(false);
    }
  }, [selectSdgChips]);

  return (
    <div>
      <div className="py-4 z-10">
        <div className="flex justify-center">
          <div className="flex-col text-start w-full md:w-2/3">
            <div className="text-black/60 font-semibold text-md md:text-xl">
              {"Select your SDGs"}
            </div>
            <div className="text-black/30 text-sm font-semibold pt-1">
              {
                "Select at least one Sustainability Development Goal(SDG) to proceed."
              }
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center mt-2">
        <div className="flex gap-1 w-full md:w-2/3 flex-wrap">
          {sdgChips.map((projectFilter, index) => {
            const bgColor = sdgColorMap[projectFilter] || "gray";
            const isSelected = selectSdgChips.includes(projectFilter);
            return (
              <Button
                isDisabled={disableSdgChips && !isSelected}
                key={index}
                color="default"
                size="sm"
                onClick={() => toggleSdgChip(projectFilter)}
                style={{
                  backgroundColor: isSelected ? bgColor : "#E5E7EB",
                  color: isSelected ? "white" : "black",
                }}
                className={`z-5 shadow-md py-1 px-2 my-0.5 mx-0.5 hover:scale-105 `}
              >
                {projectFilter}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SdgSectionSdgs;
