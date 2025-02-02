import { auth } from "../../../../firebase.config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return new Promise((resolve, reject) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        resolve(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast(errorMessage, {
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
