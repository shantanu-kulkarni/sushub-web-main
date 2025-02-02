import { storage } from "@/firebase.config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import toast from "react-hot-toast";
export const handleUpload = async (
  file,
  storagePath,
  setIsUploading,
  setFeaturedImageUrl,
  toastMessage = "Image Uploaded Successfully"
) => {
  if (!file) return;
  setIsUploading(true);
  const storageRef = ref(storage, storagePath);
  try {
    const uploadedPic = await uploadBytes(storageRef, file);
    const uploadedPicUrl = await getDownloadURL(uploadedPic.ref);
    setFeaturedImageUrl(uploadedPicUrl);
    toast(toastMessage, {
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
