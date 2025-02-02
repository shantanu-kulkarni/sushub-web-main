import React, { useEffect, useContext } from "react";
import SignUpFormTitle from "./SignUpFormTitle";
import { Image } from "@nextui-org/react";
import Lottie from "lottie-react";
import { AuthContext } from "@/context/AuthContext";
import { OnboardingStateManagerContext } from "../../OnboardingStateManager";
import imageUploadAnimation from "/public/lottie/profile-pic-loading-indicator.json";
import { handleUpload } from "./SignUpFormFileUploader";

const SignUpFormImageUpload = () => {
  const { currentUser } = useContext(AuthContext);
  const {
    isUploading,
    profilePicUrl,
    file,
    setFile,
    setIsUploading,
    setProfilePicUrl,
  } = useContext(OnboardingStateManagerContext);

  useEffect(() => {
    if (file) {
      handleUpload(
        file,
        `profile-pictures/${currentUser.email}`,
        setIsUploading,
        setProfilePicUrl
      );
    }
  }, [currentUser.email, file, setIsUploading, setProfilePicUrl]);
  const handleFileUploadChange = (e) => {
    setFile(e.target.files[0]);
    //console.log("SETTING FILE UPLOAD>>>>", e.target.files[0]);
  };
  //console.log("CURRENT PROFILE PIC URL>>>", profilePicUrl);
  return (
    <div className="w-2/3 flex items-center justify-center flex-col">
      <SignUpFormTitle currentUser={currentUser} />
      <div className="w-full flex items-center justify-center mt-4 relative">
        <Image
          alt="Person Image"
          isZoomed
          radius="full"
          src={profilePicUrl}
          className={`w-32 h-32 text-large shadow-md border-2 rounded-full ${
            isUploading ? "opacity-50" : "hover:rounded-full"
          }`}
        />
        {isUploading && (
          <div className="w-full absolute inset-0 flex justify-center items-center">
            <Lottie
              animationData={imageUploadAnimation}
              autoPlay={true}
              loop={true}
              className="w-48 aspect-square opacity-90 z-10"
            />
          </div>
        )}
      </div>
      <div className="w-full flex items-center justify-center text-xs text-white/60 mt-2 underline">
        <div className="flex items-center flex-col">
          <input
            type="file"
            accept=".png, .jpeg, .jpg"
            className="hidden"
            id="file-upload"
            onChange={handleFileUploadChange}
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer bg-black py-2 px-4 rounded"
          >
            {"Update Profile Picture"}
          </label>
        </div>
      </div>
      <div className="w-full flex items-start justify-start text-md font-normal text-white/60 mt-4">
        {
          "Before we get you started, we would like to know more about you to get you onboarded on our platform."
        }
      </div>
    </div>
  );
};

export default SignUpFormImageUpload;
