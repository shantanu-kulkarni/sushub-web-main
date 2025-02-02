"use client";
import { db } from "../firebase.config";
import { doc, getDoc } from "firebase/firestore";
import React, { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { disableApiAccessToApplication } from "@/utils/ApiToggle";

export const ModeratorContext = createContext();

export const ModeratorProvider = ({ children }) => {
  const { currentUser, loading } = useContext(AuthContext);
  const [isModerator, setIsModerator] = useState(false);
  const [moderatorLoading, setModeratorLoading] = useState(true);

  useEffect(() => {
    if (!disableApiAccessToApplication) {
      const fetchModeratorInfo = async () => {
        if (currentUser && !loading) {
          setModeratorLoading(true);
          const moderatorDocRef = doc(db, "moderator", "moderator");
          try {
            const moderatorDocSnap = await getDoc(moderatorDocRef);
            if (moderatorDocSnap.exists()) {
              if (
                Object.values(moderatorDocSnap.data()).includes(
                  currentUser.email
                )
              ) {
                //console.log("User is Moderator");
                setIsModerator(true);
              } else {
                setIsModerator(false);
              }
            } else {
              setIsModerator(false);
            }
          } catch (error) {
            console.error("Failed to fetch moderator info:", error);
            setIsModerator(false);
          }
          setModeratorLoading(false);
        } else if (!currentUser && !loading) {
          setModeratorLoading(false);
        }
      };
      fetchModeratorInfo();
    } else {
      setIsModerator(true);
      setModeratorLoading(false);
    }
  }, [currentUser, loading]);

  return (
    <ModeratorContext.Provider
      value={{ isModerator, setIsModerator, moderatorLoading }}
    >
      {children}
    </ModeratorContext.Provider>
  );
};
