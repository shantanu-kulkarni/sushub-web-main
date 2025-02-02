"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { projects } from "@/utils/ProjectData";
import { retrieveFirestoreImageByName } from "@/utils/RetrieveFirestoreImageByName";
import { Project, projectViews } from "@/app/schema/Project";
import { ModeratorContext } from "./ModeratorContext";
import { AuthContext } from "./AuthContext";
import { usePathname } from "next/navigation";
import { disableApiAccessToApplication } from "@/utils/ApiToggle";
import { authData } from "@/utils/AuthData";
import { useSearchParams } from "next/navigation";
export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const path = usePathname();
  const [fetched, setFetched] = useState(false);
  const [currentView, setCurrentView] = useState(projectViews.UNAUTHENTICATED);
  const [fetchedImage, setFetchedImage] = useState(false);
  const [project, setProject] = useState([]);
  const [verifiedProjects, setVerifiedProjects] = useState([]);
  const [unverifiedProjects, setUnverifiedProjects] = useState([]);
  const [defaultImageUrl, setDefaultImageUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const { isModerator, moderatorLoading } = useContext(ModeratorContext);
  const { currentUser } = useContext(AuthContext);
  const searchParams = useSearchParams();
  useEffect(() => {
    if (!disableApiAccessToApplication) {
      const getDefaultFeaturedContentImageUrl = () => {
        if (!fetchedImage) {
          retrieveFirestoreImageByName("default", "project-default.jpeg")
            .then((imageUrl) => {
              setDefaultImageUrl(imageUrl);
              setFetchedImage(true);
            })
            .catch((e) => {
              console.error("There was an error fetching image URL", e);
            });
        }
      };

      if (currentUser == null) {
        setCurrentView(projectViews.UNAUTHENTICATED);
      }
      if (currentUser && (currentView == null || currentView == projectViews.UNAUTHENTICATED)) {
        
        const projectId = searchParams.get("id");
        setCurrentView(projectViews.PROJECTLIST);
      }
      if (path !== "/") {
        //getAllProjectsList();
        getDefaultFeaturedContentImageUrl();
      } else {
        setLoading(false);
      }
    } else {
      const verifiedProjects = projects.individualData.verified.map((project) =>
        Project.fromJson(project)
      );
      const unverifiedProjects = projects.individualData.unverified.map(
        (project) => Project.fromJson(project)
      );
      const mergedProjects = [...verifiedProjects, ...unverifiedProjects];
      //console.table(mergedProjects);
      setProject(mergedProjects);
      setVerifiedProjects(verifiedProjects);
      setUnverifiedProjects(unverifiedProjects);
      setLoading(false);
    }
  }, [fetched, fetchedImage, path, isModerator, moderatorLoading]);

  return (
    <ProjectContext.Provider
      value={{
        project,
        setProject,
        verifiedProjects,
        setVerifiedProjects,
        unverifiedProjects,
        setUnverifiedProjects,
        defaultImageUrl,
        setDefaultImageUrl,
        setFetched,
        setFetchedImage,
        loading,
        currentView,
        setCurrentView
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
