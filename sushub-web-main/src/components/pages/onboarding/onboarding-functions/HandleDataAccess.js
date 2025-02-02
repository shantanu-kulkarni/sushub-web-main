import { Project } from "@/app/schema/Project";
import { getDoc, doc } from "firebase/firestore";
import { db } from "@/firebase.config";
import { Organizer } from "@/app/schema/Organizer";
import { useContext } from "react";
import { disableApiAccessToApplication } from "@/utils/ApiToggle";
export class HandleDataAccess {
  constructor({ moderatorContext, projectContext, organizerContext }) {
    this.moderatorContext = moderatorContext;
    this.projectContext = projectContext;
    this.organizerContext = organizerContext;
  }

  async refetchDataOnUserStateChangeActivity(currentUser) {
    if (!disableApiAccessToApplication) {
      const { setIsModerator } = this.moderatorContext;
      const {
        setProject,
        setVerifiedProjects,
        setUnverifiedProjects,
        setFetched,
      } = this.projectContext;
      const {
        setOrganizer,
        setVerifiedOrganizer,
        setUnverifiedOrganizer,
        setOrganizerFetched,
      } = this.organizerContext;
  
      try {
        let isUserModerator = false;
        //console.log("SHOW CURRENT USER>>>", currentUser);
        setOrganizer([]);
        setVerifiedOrganizer([]);
        setUnverifiedOrganizer([]);
        setOrganizerFetched(true);
        if (currentUser && currentUser.email) {
          const moderatorDocRef = doc(db, "moderator", "moderator");
          const moderatorDocSnap = await getDoc(moderatorDocRef);
  
          isUserModerator =
            moderatorDocSnap.exists() &&
            Object.values(moderatorDocSnap.data()).includes(currentUser.email);
  
          const currentOrganizerList = await Organizer.getAllOrganizers(
            isUserModerator
          );
          const { individualData, mergedData } = currentOrganizerList;
          setOrganizer(mergedData);
          setVerifiedOrganizer(individualData["verified"]);
          setUnverifiedOrganizer(individualData["unverified"]);
          setOrganizerFetched(true);
        }
  
        //console.log("User is Moderator:", isUserModerator);
        setIsModerator(isUserModerator);
  
        const currentProjectList = await Project.getAllProjects(isUserModerator);
        const { individualData, mergedData } = currentProjectList;
  
        //console.log("SHOW INDIVIDUAL PROJECTS>>>", mergedData);
        setProject(mergedData);
        setVerifiedProjects(individualData["verified"]);
        setUnverifiedProjects(individualData["unverified"]);
        setFetched(true);
      } catch (error) {
        console.error("Failed to execute refetch operation", error);
        setIsModerator(false);
      }
    }
    }

}
