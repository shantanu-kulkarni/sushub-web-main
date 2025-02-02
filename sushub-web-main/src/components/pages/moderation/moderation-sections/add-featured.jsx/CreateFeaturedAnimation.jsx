import React, { useState, useEffect, useContext } from "react";
import Lottie from "lottie-react";
import { Image } from "@nextui-org/react";
import animationData from "/public/lottie/create-featured.json";
import { handleUpload } from "@/utils/HandleImageUpload";
import imageUploadAnimation from "/public/lottie/profile-pic-loading-indicator.json";
import { AuthContext } from "@/context/AuthContext";
const CreateFeaturedAnimation = ({ featuredImageUrl, setFeaturedImageUrl }) => {
  const [isUploading, setIsUploading] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  useEffect(() => {
    if (file) {
      const now = new Date();
      const dateTimeString = now.toISOString().replace(/[^0-9]/g, "");
      handleUpload(
        file,
        `featured-content/user_${currentUser.email}_${dateTimeString}`,
        setIsUploading,
        setFeaturedImageUrl,
        "Featured content image uploaded successfully!"
      );
    }
  }, [file, setIsUploading, setFeaturedImageUrl, currentUser.email]);

  const handleFileUploadChange = (e) => {
    setFile(e.target.files[0]);
    //console.log("SETTING FILE UPLOAD>>>>", e.target.files[0]);
  };
  return (
    <div className="flex justify-center w-2/3">
      <div className="flex flex-col">
        <div className="w-full flex items-center justify-center mt-4 relative">
          <div className="w-1/2">
            <Image
              alt="Person Image"
              isZoomed
              radius="full"
              src={featuredImageUrl}
              className={`w-full aspect-square text-large shadow-md border-2 z-0 rounded-full ${
                isUploading ? "opacity-50" : "hover:rounded-full"
              }`}
            />
          </div>
          {isUploading && (
            <div className="w-full absolute inset-0 flex justify-center items-center">
              <div className="w-[75%]">
                <Lottie
                  animationData={imageUploadAnimation}
                  autoPlay={true}
                  loop={true}
                  className="w-full aspect-square opacity-90 z-20"
                />
              </div>
            </div>
          )}
        </div>
        <div className="w-full flex items-center justify-center text-xs text-black/60 mt-2 underline">
          <div className="flex items-center flex-col z-25">
            <input
              type="file"
              accept=".png, .jpeg, .jpg"
              className="hidden"
              id="file-upload"
              onChange={handleFileUploadChange}
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer bg-transparent py-2 px-4 rounded"
            >
              {"Update Featured Content Image"}
            </label>
          </div>
        </div>
        <div className="mt-8 text-left flex-row w-full">
          <div className="text-black text-3xl font-bold">
            {"Add New Featured Content!"}
          </div>
          <div className="mt-2 text-black/30 font-bold text-md">
            {
              "Create a new featured content by filling the form below and the content will be visible to all the people on the platform instantly once you make it visible. It's that easy!"
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateFeaturedAnimation;
