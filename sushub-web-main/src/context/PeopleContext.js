"use client";
import React, { createContext, useState, useEffect } from "react";
import { peopleData } from "@/utils/PeopleData";
import { retrieveFirestoreImageByName } from "@/utils/RetrieveFirestoreImageByName";
import { People } from "@/app/schema/People";
import { disableApiAccessToApplication } from "@/utils/ApiToggle";

export const PeopleContext = createContext();

export const PeopleProvider = ({ children }) => {
  const [people, setPeople] = useState([]);
  const [defaultImageUrl, setDefaultImageUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!disableApiAccessToApplication) {
      const getDefaultPeopleImageUrl = () => {
        retrieveFirestoreImageByName("default", "people-default.png")
          .then((imageUrl) => {
            setDefaultImageUrl(imageUrl);
          })
          .catch((e) => {
            console.error("There was an error fetching image URL");
          });
      };
      getDefaultPeopleImageUrl();
    } else {
      setPeople(peopleData.people.map((person) => People.fromJson(person)));
      setLoading(false);
    }
  }, []);

  return (
    <PeopleContext.Provider
      value={{
        people,
        setPeople,
        defaultImageUrl,
        setDefaultImageUrl,
        loading,
      }}
    >
      {children}
    </PeopleContext.Provider>
  );
};
