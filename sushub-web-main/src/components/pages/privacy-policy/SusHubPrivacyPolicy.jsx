"use client";
import React, { useState, useEffect } from "react";
import { ScrollShadow, Button } from "@nextui-org/react";
import { Send, GlobeLock } from "lucide-react";
import PrivacyPolicyContent from "./PrivacyPolicyContent";

const SusHubPrivacyPolicy = () => {
  const [progressWidth, setProgressWidth] = useState(0);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setProgressWidth(scrolled);
  };

  const sendEmailToGreenOffice = () => {
    window.location = "mailto:greenoffice.sustainabilityhub@uni-konstanz.de";
  };

  return (
    <div className="w-full flex justify-center items-center flex-col pt-4">
      <div className="w-5/6 flex flex-col xs:flex-col md:flex-row">
        <div className="w-full flex-col flex justify-center items-center">
          <div className="w-full xs:w-full s:w-full md:w-full text-black flex items-center text-xl xs:text-xl s:text-xl md:text-3xl font-bold pt-2 xs:pt-2 md:pt-4">
            <div className="flex flex-row justify-center items-center">
              <GlobeLock size={24} className="text-black" />
              <div className="text-black ml-1">{"Privacy Policy"}</div>
            </div>
          </div>
          <div className="text-black/30 flex items-center text-sm xs:text-sm s:text-sm md:text-md font-semibold pb-4 pt-1 w-full xs:w-full md:w-full">
            {`Last Updated on: 14th September 2024`}
          </div>
        </div>
        <div className="w-full xs:w-full s:w-full md:w-1/3 flex justify-end items-center py-4">
          <Button
            className="border-black selection:border-black text-black w-full xs:w-full"
            variant="bordered"
            startContent={<Send size={20} className="text-black" />}
            onClick={sendEmailToGreenOffice}
          >
            {"Have Troubles? Contact Us"}
          </Button>
        </div>
      </div>
      <div className="relative w-5/6 h-[70vh] shadow-lg rounded-3xl bg-default-100/50 bg-clip-padding backdrop-filter backdrop-blur-sm my-6 p-4 z-10 overflow-hidden">
        <div className="flex justify-center items-center h-full">
          <div className="w-full flex justify-center items-center">
            <ScrollShadow
              hideScrollBar
              offset={100}
              orientation="vertical"
              className="max-h-[60vh] w-full px-4 shadow-lg overflow-y-auto relative text-black overflow-x-hidden"
              onScroll={handleScroll}
            >
              <PrivacyPolicyContent />
            </ScrollShadow>
            <div className="absolute top-0 left-0 w-full h-2 bg-gray-200 z-10">
              <div
                className="h-full bg-black"
                style={{ width: `${progressWidth}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SusHubPrivacyPolicy;
