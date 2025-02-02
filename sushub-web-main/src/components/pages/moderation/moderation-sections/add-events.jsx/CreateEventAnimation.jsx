import React from "react";
import Lottie from "lottie-react";
import animationData from "/public/lottie/create-event.json";

const CreateEventAnimation = () => {
  return (
    <div className="flex justify-center w-2/3">
      <div className="flex flex-col">
        <div className="w-full flex justify-center">
          <Lottie
            animationData={animationData}
            autoPlay={true}
            loop={true}
            height={50}
            className="w-1/2"
          />
        </div>
        <div className="mt-8 text-left flex-row w-full">
          <div className="text-black text-3xl font-bold">
            {"Add a New Event!"}
          </div>
          <div className="mt-2 text-black/30 font-bold text-md">
            {
              "Create a new event by filling the form below and the event will be visible to all the people on the platform instantly. It's that easy!"
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEventAnimation;
