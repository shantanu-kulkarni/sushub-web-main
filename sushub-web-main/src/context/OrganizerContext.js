"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { retrieveFirestoreImageByName } from "@/utils/RetrieveFirestoreImageByName";
import { Organizer } from "@/app/schema/Organizer";
import { ModeratorContext } from "./ModeratorContext";
import { organizerData } from "@/utils/OrganizerData";
import { disableApiAccessToApplication } from "@/utils/ApiToggle";

export const OrganizerContext = createContext();

export const OrganizerProvider = ({ children }) => {
  const [organizer, setOrganizer] = useState([]);
  const [currentOrganizer, setCurrentOrganizer] = useState(null);
  const [verifiedOrganizer, setVerifiedOrganizer] = useState([]);
  const [unverifiedOrganizer, setUnverifiedOrganizer] = useState([]);
  const [defaultImageUrl, setDefaultImageUrl] = useState("");
  const [organizerFetched, setOrganizerFetched] = useState(false);
  const [fetchedImage, setFetchedImage] = useState(false);
  const [loading, setLoading] = useState(true);
  const { isModerator, moderatorLoading } = useContext(ModeratorContext);

  useEffect(() => {
    if (!disableApiAccessToApplication) {
      const getDefaultOrganizerImageUrl = () => {
        if (!fetchedImage) {
          retrieveFirestoreImageByName("default", "people-default.png")
            .then((imageUrl) => {
              setDefaultImageUrl(imageUrl);
              setFetchedImage(true);
            })
            .catch((e) => {
              console.error("There was an error fetching image URL");
            });
        }
      };

      getDefaultOrganizerImageUrl();
    } else {
      const verifiedOrganizers = organizerData.individualData.verified.map(
        (organizer) => Organizer.fromJson(organizer)
      );
      const unverifiedOrganizers = organizerData.individualData.unverified.map(
        (organizer) => Organizer.fromJson(organizer)
      );
      const mergedOrganizers = [...verifiedOrganizers, ...unverifiedOrganizers];
      setOrganizer(mergedOrganizers);
      setVerifiedOrganizer(verifiedOrganizers);
      setUnverifiedOrganizer(unverifiedOrganizers);
      setLoading(false);
    }
  }, [organizerFetched, fetchedImage, isModerator, moderatorLoading]);

  return (
    <OrganizerContext.Provider
      value={{
        currentOrganizer,
        setCurrentOrganizer,
        organizer,
        setOrganizer,
        verifiedOrganizer,
        setVerifiedOrganizer,
        unverifiedOrganizer,
        setUnverifiedOrganizer,
        defaultImageUrl,
        setDefaultImageUrl,
        organizerFetched,
        setOrganizerFetched,
        loading,
      }}
    >
      {children}
    </OrganizerContext.Provider>
  );
};
