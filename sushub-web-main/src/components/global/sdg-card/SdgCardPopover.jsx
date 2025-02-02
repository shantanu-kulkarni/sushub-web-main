import React from "react";
import {
  PopoverContent,
  Card,
  Image,
  CardBody,
  CardFooter,
} from "@nextui-org/react";

const SdgCardPopover = ({ getSdgAttributes }) => {
  return (
    <PopoverContent className="w-[250px] p-0 rounded-3xl">
      <div className="p-0 w-full">
        <div className="flex flex-col gap-2 w-full">
          <Card
            shadow="sm"
            isPressable
            className="data-[pressed=true]:scale-100"
          >
            <CardBody
              className="overflow-visible p-0"
              style={{ backgroundColor: getSdgAttributes.color }}
            >
              <Image
                alt="SDG Item"
                className="object-cover aspect-square"
                src={getSdgAttributes.icon}
                width={250}
              />
            </CardBody>
            <CardFooter
              className="flex flex-col text-small text-white"
              style={{ backgroundColor: getSdgAttributes.color }}
            >
              {/* <p className="text-bold text-left">{getSdgAttributes.name}</p> */}
              <p className="text-white text-xs text-left pt-2">
                {getSdgAttributes.desc}
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </PopoverContent>
  );
};

export default SdgCardPopover;
