import { storage } from "@/firebase.config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import toast from "react-hot-toast";

export const handleUpload = async (
  file,
  storagePath,
  setIsUploading,
  setProfilePicUrl
) => {
  if (!file) return;
  setIsUploading(true);
  const storageRef = ref(storage, storagePath);
  try {
    const uploadedPic = await uploadBytes(storageRef, file);
    const uploadedPicUrl = await getDownloadURL(uploadedPic.ref);
    setProfilePicUrl(uploadedPicUrl);
    toast("Profile Picture Updated Successfully", {
      position: "bottom-right",
      style: {
        color: "#fff",
        backgroundColor: "#000",
      },
    });
  } catch (error) {
    toast(error, {
      position: "bottom-right",
      style: {
        color: "#fff",
        backgroundColor: "#000",
      },
    });
  } finally {
    setIsUploading(false);
  }
};
