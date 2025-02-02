"use client";
import React, { createContext, useState } from "react";

export const OnboardingStateManagerContext = createContext();

export const OnboardingStateProvider = ({ children }) => {
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [profilePicUrl, setProfilePicUrl] = useState("");
  const [selectedOrgChip, setSelectedOrgChip] = useState([]);
  const [selectSdgChips, setSelectedSdgChips] = useState([]);
  const [showSignUpOption, setShowSignUpOption] = useState(false);
  const [fileName, setFileName] = useState("No file chosen");
    //console.log("SHOW LATEST VALUE OF PROFILE PIC URL>>>", profilePicUrl);
  return (
    <OnboardingStateManagerContext.Provider
      value={{
        description,
        setDescription,
        errors,
        setErrors,
        file,
        setFile,
        isUploading,
        setIsUploading,
        isSubmitted,
        setIsSubmitted,
        profilePicUrl,
        setProfilePicUrl,
        selectedOrgChip,
        setSelectedOrgChip,
        selectSdgChips,
        setSelectedSdgChips,
        showSignUpOption,
        setShowSignUpOption,
        fileName,
        setFileName,
      }}
    >
      {children}
    </OnboardingStateManagerContext.Provider>
  );
};
