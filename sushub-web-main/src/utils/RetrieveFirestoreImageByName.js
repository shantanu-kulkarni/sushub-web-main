import { getStorage, ref, getDownloadURL } from "firebase/storage";

export async function retrieveFirestoreImageByName(imageFolderName, imageName) {
  const storage = getStorage();

  const imageRef = ref(storage, `${imageFolderName}/${imageName}`);

  try {
    const url = await getDownloadURL(imageRef);
    //console.log("File available at", url);
    return url;
  } catch (error) {
    console.error("Error fetching image:", error);
    return null;
  }
}
