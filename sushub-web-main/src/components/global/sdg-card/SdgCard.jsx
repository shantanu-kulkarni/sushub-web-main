import React from "react";
import { Popover, PopoverTrigger, Button } from "@nextui-org/react";
import createSDG from "../../../utils/ProjectSdgsData";
import SdgCardPopover from "./SdgCardPopover";

const SdgCard = ({ currentSdg, isDetailPage, isModerator, setPillColor = "rgb(255 255 255 / 0.2)" }) => {
  const getSdgAttributes = createSDG(currentSdg);
  const setOpacity = (hex, alpha) =>
    `${hex}${Math.floor(alpha * 255)
      .toString(16)
      .padStart(2, 0)}`;
  return (
    <Popover placement="bottom" offset={10} backdrop="blur">
      <PopoverTrigger>
        <Button
          style={{
            backgroundColor: isDetailPage
              ? setOpacity(createSDG(currentSdg).color, 1)
              :setPillColor !="rgb(255 255 255 / 0.2)" ? setPillColor :"rgb(255 255 255 / 0.2)",
          }}
          className={`bg-white/20 line-clamp-1 ${
            isDetailPage ? "text-white" : setPillColor !="rgb(255 255 255 / 0.2)" ? "text-white" :"text-black/60"
          } font-bold rounded-md aspect-square shadow-sm hover:scale-110 hover:bg-default-100/60 min-w-8 ${
            isModerator ? "h-unit-6" : "h-unit-6 md:h-unit-8"
          }`}
          size="sm"
        >
          {currentSdg}
        </Button>
      </PopoverTrigger>
      <SdgCardPopover getSdgAttributes={getSdgAttributes} />
    </Popover>
  );
};

export default SdgCard;
