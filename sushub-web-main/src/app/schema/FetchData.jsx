import { Event } from "./Event";
import { Featured } from "./Featured";
import { Opportunity } from "./Opportunity";
import { Organizer } from "./Organizer";
import { People } from "./People";
import { Project, projectStatus } from "./Project";
import { runTransaction, doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase.config";
import { User } from "./User";

export class FetchUserData {
  static async getCurrentUserDetails(userId = null, authDetails = null) {
    let loading = true;
    let data = null;
    try {
      data = await this.#getSignedInUserInfo(userId, authDetails);
    } catch (error) {
      console.error(`Failed to retrieve user data for ${userId}:`, error);
    } finally {
      loading = false;
    }

    return { data, loading };
  }

  static async #getSignedInUserInfo(userId, authDetails) {
    try {
      return await runTransaction(db, async (transaction) => {
        let currentUser = null;
        let currentModerator = false;
        let currentVerifiedProjects = [];
        let currentUnverifiedProjects = [];
        let currentOrganizer = null;
        let currentVerifiedOrganizers = [];
        let currentUnverifiedOrganizers = [];
        let currentMergedProjects = [];
        let currentMergedOrganizers = [];
        // Fetch shared data for all users (authenticated and unauthenticated)
        const currentEvents = await Event.getAllEvents();
        const currentOpportunities = await Opportunity.getAllOpportunities();
        const currentFeaturedContent = await Featured.getAllFeaturedContent();
        const currentPeople = await People.getAllPeople();

        // If userId exists, fetch user data
        if (userId) {
          const userDocRef = doc(db, "users", userId);
          const userDocSnap = await transaction.get(userDocRef);

          // Check if the user document exists
          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            currentUser = User.fromJson(userData);
            //console.log("Fetched User:", currentUser);

            // Check if user is a moderator
            const moderatorDocRef = doc(db, "moderator", "moderator");
            const moderatorDocSnap = await getDoc(moderatorDocRef);
            //console.log(Object.values(moderatorDocSnap.data()));
            if (
              moderatorDocSnap.exists() &&
              Object.values(moderatorDocSnap.data()).includes(
                currentUser.user_email
              )
            ) {
              //console.log("User is a moderator");
              currentModerator = true;
              const {
                individualData: listOfCurrentIndividualProjects,
                mergedData: listOfCurrentMergedProjects,
              } = await Project.getAllProjects(currentModerator);

              currentVerifiedProjects =
                listOfCurrentIndividualProjects["verified"] ?? [];
              currentUnverifiedProjects =
                listOfCurrentIndividualProjects["unverified"] ?? [];
              currentMergedProjects = [...currentVerifiedProjects, ...currentUnverifiedProjects] ?? [];
              // console.table(currentVerifiedProjects);
              // console.table(currentUnverifiedProjects);
              // console.table(listOfCurrentMergedProjects);
              // console.table(currentMergedProjects);
              const {
                individualData: listOfCurrentIndividualOrganizers,
                mergedData: listOfCurrentMergedOrganizers,
              } = await Organizer.getAllOrganizers(currentModerator);
              //console.log("Unverified: ",listOfCurrentIndividualOrganizers);
              currentVerifiedOrganizers =
                listOfCurrentIndividualOrganizers["verified"] ?? [];
              currentUnverifiedOrganizers =
                listOfCurrentIndividualOrganizers["unverified"] ?? [];
              currentMergedOrganizers = listOfCurrentMergedOrganizers ?? [];
              currentOrganizer =
                listOfCurrentIndividualOrganizers["verified"].find(
                  (org) => org.organizer_id == currentUser.organization_id
                ) ?? [];
            } else {
              // Not a moderator, get user-specific data

              // If user is an organizer, get organizer-related data
              if (currentUser.isOrganizer) {
                currentOrganizer = await Organizer.getOrganizerById(
                  currentUser.organization_id
                );
                const organizerProjectIds = [
                  ...currentOrganizer.organizer_unverifiedProjects,
                  ...currentOrganizer.organizer_verifiedProjects,
                ];
                currentVerifiedProjects =
                  await Project.getAllUserProjectsByStatus(
                    projectStatus.VERIFIED
                  );
                const currentOrganizerProjects =
                  await Project.getAllUserProjectsByIds(organizerProjectIds);
                currentMergedProjects = [
                  ...currentVerifiedProjects,
                  ...currentOrganizerProjects,
                ];
              } else {
                currentModerator = false;
                currentVerifiedProjects =
                  await Project.getAllUserProjectsByStatus(
                    projectStatus.VERIFIED
                  );
                currentMergedProjects = [...currentVerifiedProjects];
              }
            }
          } else {
            // User document not found, create a new user in the system
            // console.log(
            //   `No user document found for ID: ${userId}. Creating a new user.`
            // );

            const createdUserDocument = await User.createNewUserInTheSystem(
              authDetails
            );

            currentUser = createdUserDocument;
            currentVerifiedProjects = await Project.getAllUserProjectsByStatus(
              projectStatus.VERIFIED
            );
            currentMergedProjects = [...currentVerifiedProjects];
            //console.log(`New user created with ID: ${userId}.`);
          }
        } else {
          currentVerifiedProjects = await Project.getAllUserProjectsByStatus(
            projectStatus.VERIFIED
          );
          currentMergedProjects = [...currentVerifiedProjects];
        }

        // Return all fetched data
        return {
          currentUser,
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
        };
      });
    } catch (error) {
      console.error(`Failed to retrieve user data for ${userId}:`, error);
      return null;
    }
  }
}