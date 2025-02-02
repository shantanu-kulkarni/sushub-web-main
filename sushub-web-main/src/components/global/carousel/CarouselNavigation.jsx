import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const CarouselNavigation = (props) => {
  return (
    <div>
      <div className="hidden group-hover:block absolute top-[35%] xs:top-[40%] s:top-[35%] sm:top-[40%] md:top-[35%] lg:top-[40%] xl:top-[35%] -translate-x-0 translate-y-[50%] left-2 text-2xl rounded-full p-2 text-white bg-white/30 cursor-pointer z-20">
        <GoArrowLeft onClick={props.onPreviousClick} size={props.buttonSize} />
      </div>
      <div className="hidden group-hover:block absolute top-[35%] xs:top-[40%] s:top-[35%] sm:top-[40%] md:top-[35%] lg:top-[40%] xl:top-[35%] -translate-x-0 translate-y-[50%] right-2 text-2xl rounded-full p-2 text-white bg-white/30 cursor-pointer z-20">
        <GoArrowRight onClick={props.onNextClick} size={props.buttonSize} />
      </div>
    </div>
  );
};

export default CarouselNavigation;
