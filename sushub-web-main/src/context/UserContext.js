"use client";
import React, { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useRouter, usePathname } from "next/navigation";
import { User } from "@/app/schema/User";
import { disableApiAccessToApplication } from "@/utils/ApiToggle";
import { userData } from "@/utils/UserData";
import { FetchUserData } from "@/app/schema/FetchData";
import { EventContext } from "./EventContext";
import { ModeratorContext } from "./ModeratorContext";
import { OpportunityContext } from "./OpportunityContext";
import { FeaturedContext } from "./FeaturedContext";
import { PeopleContext } from "./PeopleContext";
import { OrganizerContext } from "./OrganizerContext";
import { ProjectContext } from "./ProjectContext";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const pathName = usePathname();
  const router = useRouter();
  const { currentUser, loading: authLoading } = useContext(AuthContext);
  const { setIsModerator } = useContext(ModeratorContext) || {};
  const { setEvents } = useContext(EventContext) || {};
  const { setOpportunities } = useContext(OpportunityContext) || {};
  const { setFeaturedContent } = useContext(FeaturedContext) || {};
  const { setPeople } = useContext(PeopleContext) || {};
  const {
    setCurrentOrganizer,
    setOrganizer,
    setVerifiedOrganizer,
    setUnverifiedOrganizer,
  } = useContext(OrganizerContext) || {};
  const { setProject, setVerifiedProjects, setUnverifiedProjects } =
    useContext(ProjectContext) || {};

  const [userInfo, setUserInfo] = useState(null);
  const [onBoarded, setOnboarded] = useState(false);
  const [userPastProjects, setUserPastProjects] = useState([]);
  const [userCurrentProjects, setUserCurrentProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!disableApiAccessToApplication) {
      console.warn(`
        ----------------------------------------------
        |                                            |
        |        Welcome to Sustainability Hub       |
        |                                            |
        ----------------------------------------------
        | In case of any issues, contact:            |
        | mailto:greenoffice.sustainabilityhub@uni-  |
        | konstanz.de                                |
        ----------------------------------------------
        | To reach out to developer, contact:        |
        | https://www.linkedin.com/in/shantanu-d-    |
        | kulkarni/                                  |
        ----------------------------------------------
        `);

      const fetchUserInfo = async () => {
        try {
          //console.log("Current User Email:", currentUser && currentUser.email);
          const { data: fetchedData, loading: userDetailLoading } =
            await FetchUserData.getCurrentUserDetails(
              currentUser && currentUser.email,
              currentUser
            );

          // Check if fetchedData is null before destructuring
          if (!fetchedData) {
            console.error("No user data was returned.");
            return;
          }

          const {
            currentUser: fetchedUser,
            currentModerator,
            currentVerifiedProjects,
            currentUnverifiedProjects,
            currentMergedProjects,
            currentOrganizer,
            currentVerifiedOrganizers,
            currentUnverifiedOrganizers,
            currentMergedOrganizers,
            currentPeople,
            currentEvents,
            currentOpportunities,
            currentFeaturedContent,
          } = fetchedData;
          setUserInfo(fetchedUser);
          setIsModerator(currentModerator);
          setEvents(currentEvents);
          setOpportunities(currentOpportunities);
          setFeaturedContent(currentFeaturedContent);
          setPeople(currentPeople);
          setProject(currentMergedProjects);
          setVerifiedProjects(currentVerifiedProjects);
          setUnverifiedProjects(currentUnverifiedProjects);
          setCurrentOrganizer(currentOrganizer);
          setVerifiedOrganizer(currentVerifiedOrganizers);
          setUnverifiedOrganizer(currentUnverifiedOrganizers);
          setOrganizer(currentMergedOrganizers);
        } catch (e) {
          console.error("An unexpected error occurred", e);
        }
        // }
      };

      fetchUserInfo();
    } else {
      setUserInfo(User.fromJson(userData.user));
      setOnboarded(true);
      setLoading(false);
    }
  }, [currentUser, authLoading]);

  const editUserInfo = (editedInfo) => {
    setUserInfo(editedInfo);
  };

  return (
    <UserContext.Provider
      value={{
        userInfo,
        onBoarded,
        setOnboarded,
        setUserInfo,
        editUserInfo,
        userPastProjects,
        setUserPastProjects,
        userCurrentProjects,
        setUserCurrentProjects,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
