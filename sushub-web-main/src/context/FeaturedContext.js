"use client";
import React, { createContext, useState, useEffect } from "react";
import { featuredData } from "@/utils/FeaturedData";
import { Featured } from "@/app/schema/Featured";
import { retrieveFirestoreImageByName } from "@/utils/RetrieveFirestoreImageByName";
import { usePathname } from "next/navigation";
import { disableApiAccessToApplication } from "@/utils/ApiToggle";

export const FeaturedContext = createContext();

export const FeaturedProvider = ({ children }) => {
  const [featuredContent, setFeaturedContent] = useState([]);
  const [defaultImageUrl, setDefaultImageUrl] = useState("");
  const [fetched, setFetched] = useState(false);
  const [fetchedImage, setFetchedImage] = useState(false);
  const [loading, setLoading] = useState(true);
  const path = usePathname();

  useEffect(() => {
    if (!disableApiAccessToApplication) {
      const getDefaultFeaturedContentImageUrl = () => {
        if (!fetchedImage) {
          retrieveFirestoreImageByName(
            "default",
            "featured-content-default.jpeg"
          )
            .then((imageUrl) => {
              setDefaultImageUrl(imageUrl);
              setFetchedImage(true);
            })
            .catch((e) => {
              console.error("There was an error fetching image URL");
            });
        }
      };

      if (path === "/profile/moderation" || path === "/") {
        //fetchAllFeaturedContent();
        getDefaultFeaturedContentImageUrl();
      } else {
        setLoading(false);
      }
    } else {
      setFeaturedContent(
        featuredData.featuredItems.map((featured) =>
          Featured.fromJson(featured)
        )
      );
      setLoading(false);
    }
  }, [fetched, fetchedImage, path]);

  return (
    <FeaturedContext.Provider
      value={{
        featuredContent,
        setFeaturedContent,
        defaultImageUrl,
        loading,
      }}
    >
      {children}
    </FeaturedContext.Provider>
  );
};
