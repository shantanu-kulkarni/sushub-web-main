import React from "react";
import { CardFooter } from "@nextui-org/react";

const CarouselTitle = (props) => {
  return (
    <div className="absolute z-10 flex-col justify-center items-center w-full">
      <CardFooter className=" text-black font-bold text-lg xs:text-2xl s:text-2xl sm:text-3xl md:text-xl lg:text-2xl bg-white/30 bottom-0 border-zinc-100/50 rounded-bl-none rounded-tl-3xl rounded-br-none z-20 py-2 px-4 ">
        {props.cardTitle}
      </CardFooter>
    </div>
  );
};

export default CarouselTitle;
