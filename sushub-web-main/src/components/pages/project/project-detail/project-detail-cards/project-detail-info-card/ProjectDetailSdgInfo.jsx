import React from "react";
import { Button } from "@nextui-org/react";
import SdgCard from "../../../../../global/sdg-card/SdgCard";
import { detailPageSdgButtonLabel } from "../../ProjectDetailConstants";

const ProjectDetailSdgInfo = (props) => {
  return (
    <div
      className={`text-lg text-white w-full flex flex-row justify-start md:justify-end items-center ${
        props.projectType == 0 ? "py-2" : "py-2"
      } `}
    >
      <div className="px-2">
        <Button
          disableRipple
          radius="none"
          className="bg-white/60 text-white px-4 rounded-md h-unit-6 md:h-unit-8"
          size="sm"
        >
          {detailPageSdgButtonLabel}
        </Button>
      </div>
      <div className="flex flex-row line-clamp-1">
        {props.projectSdgs.map((sdg, index) => {
          return (
            <div className="mx-1" key={index}>
              <SdgCard currentSdg={sdg} isDetailPage={true} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectDetailSdgInfo;
