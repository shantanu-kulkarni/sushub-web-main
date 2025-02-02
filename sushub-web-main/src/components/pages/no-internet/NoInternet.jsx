"use client";
import React from "react";
import Lottie from "lottie-react";
import noInternetAnimation from "/public/lottie/no-internet.json";
import { TypeAnimation } from "react-type-animation";

const NoInternet = () => {
  return (
    <div className="flex flex-col p-4 min-h-screen">
      <div className="flex flex-row h-full">
        <div className="px-4">
          <div className="w-full pt-8 text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-500">
            <TypeAnimation
              cursor={false}
              sequence={["Sustainability Hub.", 1000]}
              style={{ fontSize: "inherit" }}
              speed={50}
              repeat={1}
              className="w-full"
            />
          </div>
          <div className="w-full py-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black">
            <TypeAnimation
              cursor={true}
              sequence={[
                "A Sustainability Platform For All Your Projects.",
                2000,
                "A Sustainability Platform For All Your Opportunities.",
                2000,
                "A Sustainability Platform For All Your Events.",
                2000,
              ]}
              speed={50}
              style={{ fontSize: "inherit" }}
              className="w-full"
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full flex-grow flex-col">
        <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 mt-4">
          <Lottie
            animationData={noInternetAnimation}
            autoPlay={true}
            loop={true}
            className="w-full"
          />
        </div>
        <div className="text-center w-full mt-8">
          <div className="text-black text-lg sm:text-2xl md:text-3xl font-bold">
            No Internet Connection.
          </div>
          <div className="mt-4 text-black/30 font-bold text-xs sm:text-sm md:text-base">
            Meh! It seems like someone plugged off your internet connection.
            Check your internet settings and try reloading the page again!
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoInternet;
