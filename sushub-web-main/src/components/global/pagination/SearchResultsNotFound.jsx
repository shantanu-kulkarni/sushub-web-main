import React from "react";
import Lottie from "lottie-react";
import animationData from "/public/lottie/no-results.json";

const SearchResultsNotFound = ({ animationTitle, animationDescription }) => {
  return (
    <div className="mt-8 w-full flex flex-col justify-center items-center h-auto lg:h-[60vh]">
      <div className="w-full md:w-1/2">
        <Lottie
          animationData={animationData}
          autoPlay={true}
          loop={true}
          height={50}
        />
      </div>
      <div className="mt-8 text-center w-full flex justify-center items-center flex-col">
        <div className="text-black global-title flex items-center justify-center">{animationTitle}</div>
        <div className="my-4 global-title-description">
          {animationDescription}
        </div>
      </div>
    </div>
  );
};

export default SearchResultsNotFound;
