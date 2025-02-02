import { User } from "@/app/schema/User";
import { db } from "../../../../../firebase.config";
import {
  doc,
  getDoc,
  updateDoc,
  setDoc,
  runTransaction,
} from "firebase/firestore";

export const updateUserDocument = async (
  user,
  description,
  selectedOrgChip,
  selectSdgChips,
  userProfileUrl,
  setIsSubmitted
) => {
  if (!user.email) {
    throw new Error("Email is required");
  }

  const userRef = doc(db, "users", user.email);

  try {
    setIsSubmitted(false);
    // Check if the user document exists
    const userDoc = await getDoc(userRef);
    let newUserId;
    if (userDoc.exists()) {
      newUserId = userDoc.data().user_id;
    } else {
      newUserId = 1;
    }
    //console.log("SHOW PROFILE PIC URL>>>", userProfileUrl);
    const userData = {
      user_id: newUserId,
      user_name: user.displayName,
      user_email: user.email,
      user_description: description,
      user_profile: userProfileUrl || null,
      current_projects: [],
      past_projects: [],
      isOrganizer: false,
      notification: "Tap to become an organizer",
      organization_id: 0,
      organization_name: selectedOrgChip,
      isUnverifiedOrganizer: false,
      sdgs: selectSdgChips,
    };

    await setDoc(userRef, userData);
    //console.log("User document updated successfully");
  } catch (error) {
    console.error("Failed to update user document: ", error);
  } finally {
    setIsSubmitted(true);
  }
};
