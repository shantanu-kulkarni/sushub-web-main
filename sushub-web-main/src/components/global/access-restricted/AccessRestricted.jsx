import React from "react";
import Lottie from "lottie-react";
import accessRestricted from "/public/lottie/note-not-found.json";

const AccessRestricted = () => {
  return (
    <div className="flex items-center justify-center">
      {" "}
      <div className="mt-8 w-full md:w-2/3 flex flex-col justify-center items-center h-auto lg:h-[60vh]">
        <div className="w-full md:w-1/2">
          <Lottie
            animationData={accessRestricted}
            autoPlay={true}
            loop={true}
            height={50}
          />
        </div>
        <div className="mt-8 text-center w-full flex justify-center items-center flex-col">
          <div className="text-black global-title flex items-center justify-center text-center">
            {"Lost in the Digital Jungle!"}
          </div>
          <div className="my-4 w-auto global-title-description text-center">
            {
              "Uh-oh, looks like you've ventured too deep into uncharted territory! Whether this page doesn't exist or you don't have permission to be here, the result's the same—you're lost! But don't worry, we're experts at finding our way back."
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessRestricted;
