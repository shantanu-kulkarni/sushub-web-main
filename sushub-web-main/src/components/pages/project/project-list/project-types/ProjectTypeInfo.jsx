import React from "react";
import { Card, PopoverContent, CardFooter } from "@nextui-org/react";
import { MdOutlineEvent } from "react-icons/md";
import {
  projectTypeTitle,
  projectTypeDescription,
} from "./ProjectTypeConstants";

const ProjectTypeInfo = () => {
  return (
    <PopoverContent className="p-0 w-full">
      <Card
        isFooterBlurred
        radius="lg"
        className="border-none bg-blue-500 w-full h-[300px]"
      >
        <MdOutlineEvent className="text-white/30 w-full h-full aspect-square" />
        <CardFooter className="justify-start before:bg-white/10 border-white/20 border-1 overflow-hidden absolute before:rounded-xl rounded-b-lg bottom-0 w-full shadow-small z-5">
          <div className="flex-row">
            <div className="text-lg font-bold text-white py-2">
              {projectTypeTitle}
            </div>
            <div className="text-sm font-bold text-black/60 pb-2">
              {projectTypeDescription}
            </div>
          </div>
        </CardFooter>
      </Card>
    </PopoverContent>
  );
};

export default ProjectTypeInfo;
