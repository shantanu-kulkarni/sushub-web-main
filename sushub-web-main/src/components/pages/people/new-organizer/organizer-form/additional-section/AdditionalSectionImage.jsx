import React, { useState, useEffect, useContext } from "react";
import Lottie from "lottie-react";
import { Image } from "@nextui-org/react";
import imageUploadAnimation from "/public/lottie/profile-pic-loading-indicator.json";
import { AuthContext } from "@/context/AuthContext";
import { handleUpload } from "@/utils/HandleImageUpload";
const AdditionalSectionImage = ({ imageUrl, setImageUrl }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [file, setFile] = useState(null);
  const { currentUser } = useContext(AuthContext);

  const handleFileUploadChange = (e) => {
    setFile(e.target.files[0]);
    //console.log("SETTING FILE UPLOAD>>>>", e.target.files[0]);
  };
  useEffect(() => {
    if (file) {
      const now = new Date();
      const dateTimeString = now.toISOString().replace(/[^0-9]/g, "");
      handleUpload(
        file,
        `organizer/user_${currentUser.email}_${dateTimeString}`,
        setIsUploading,
        setImageUrl,
        "Organizer image uploaded successfully!"
      );
    }
  }, [file, setIsUploading, currentUser.email, setImageUrl]);
  return (
    <div className="w-full flex justify-center">
    <div className="w-2/3 flex justify-center flex-col">
      <div className="w-full flex items-center justify-center relative">
        <div className="w-full md:w-1/2">
          <Image
            alt="Person Image"
            isZoomed
            radius="full"
            src={imageUrl}
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
            {"Update People Profile Image"}
          </label>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AdditionalSectionImage;
