import React from "react";
import { CardHeader } from "@nextui-org/react";

const CarouselHeaders = (props) => {
  return (
    <CardHeader className="absolute z-20 shadow-xs bottom-[20%] xs:bottom-[20%] s:bottom-[20%] sm:bottom-[20%] md:bottom-[20%] lg:bottom-[20%] xl:bottom-[20%] flex-col items-start py-2 pl-0 pr-10">
      <p className=" text-white uppercase font-bold text-base xs:text-2xl s:text-lg sm:text-xl md:text-lg lg:text-xl bg-black/30 bottom-0 border-zinc-100/50 rounded-tr-xl sm:rounded-tr-2xl md:rounded-tr-xl z-20 px-2 py-1 xs:py-1 xs:px-2 s:py-1 s:px-2 sm:px-4 sm:py-2">
        {props.cardSubHeader}
      </p>
      <h1 className="text-white font-bold text-lg xs:text-3xl s:text-3xl sm:text-4xl md:text-2xl lg:text-4xl bg-black/30 bottom-0 border-zinc-100/50 rounded-r-xl  sm:rounded-r-2xl md:rounded-r-2xl z-20 px-2 py-1 xs:py-1 xs:px-2 s:py-1 s:px-2 sm:py-2 sm:px-4 justify-between">
        {props.cardHeader}
      </h1>
    </CardHeader>
  );
};

export default CarouselHeaders;
