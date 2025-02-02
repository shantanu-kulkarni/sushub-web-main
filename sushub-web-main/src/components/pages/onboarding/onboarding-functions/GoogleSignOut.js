import { auth } from "../../../../firebase.config";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";

export const signOutUser = () => {
  return new Promise((resolve, reject) => {
    signOut(auth)
      .then(() => {
        toast(`Signed out successfully`, {
          position: "bottom-right",
          style: {
            color: "#fff",
            backgroundColor: "#000",
          },
        });

        resolve("User signed out successfully.");
      })
      .catch((error) => {
        toast("Oops! There was some error signing you out! Please try again!", {
          position: "bottom-right",
          style: {
            color: "#fff",
            backgroundColor: "#000",
          },
        });
        reject(error);
      });
  });
};
