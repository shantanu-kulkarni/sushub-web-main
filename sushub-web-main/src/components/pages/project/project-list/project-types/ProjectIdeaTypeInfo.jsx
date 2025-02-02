import React from "react";
import { Card, PopoverContent, CardFooter } from "@nextui-org/react";
import { PiPottedPlant } from "react-icons/pi";
import {
  projectIdeaTypeTitle,
  projectIdeaTypeDescription,
} from "./ProjectTypeConstants";

const ProjectIdeaTypeInfo = () => {
  return (
    <PopoverContent className="p-0 w-full">
      <Card
        isFooterBlurred
        radius="lg"
        className="border-none bg-yellow-500 w-full h-[300px]"
      >
        <PiPottedPlant className="text-white/30 w-full h-full aspect-square" />
        <CardFooter className="justify-start before:bg-white/10 border-white/20 border-1 overflow-hidden absolute before:rounded-xl rounded-b-lg bottom-0 w-full shadow-small z-5">
          <div className="flex-row">
            <div className="text-lg font-bold text-white py-2">
              {projectIdeaTypeTitle}
            </div>
            <div className="text-sm font-bold text-black/60 pb-2">
              {projectIdeaTypeDescription}
            </div>
          </div>
        </CardFooter>
      </Card>
    </PopoverContent>
  );
};

export default ProjectIdeaTypeInfo;
