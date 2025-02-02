import { db } from "../../firebase.config";
import { doc, getDoc, runTransaction, deleteField } from "firebase/firestore";

export class Featured {
  constructor({
    featured_id = "",
    featured_name = "",
    featured_description = "",
    featured_link = "",
    featured_image = "",
    featured_visibility = false,
  }) {
    this.featured_id = featured_id;
    this.featured_name = featured_name;
    this.featured_description = featured_description;
    this.featured_link = featured_link;
    this.featured_image = featured_image;
    this.featured_visibility = featured_visibility;
  }

  static fromJson(json) {
    return new Featured({
      featured_id: json["featured_id"],
      featured_name: json["featured_name"],
      featured_description: json["featured_description"],
      featured_link: json["featured_link"],
      featured_image: json["featured_image"],
      featured_visibility: json["featured_visibility"],
    });
  }

  toJson() {
    return {
      featured_id: this.featured_id,
      featured_name: this.featured_name,
      featured_description: this.featured_description,
      featured_link: this.featured_link,
      featured_image: this.featured_image,
      featured_visibility: this.featured_visibility,
    };
  }
  static async getAllFeaturedContent() {
    return await this.#getListOfAllFeaturedContent();
  }
  static async addFeaturedContent(featuredContent) {
    return await this.#addNewFeaturedContent(featuredContent);
  }
  static async updateFeaturedContentVisibility(featuredContentId, visibility) {
    return await this.#updateSelectedFeaturedContentVisibility(
      featuredContentId,
      visibility
    );
  }
  static async removeFeaturedContent(featuredContentId) {
    return await this.#removeExistingFeaturedContent(featuredContentId);
  }

  static async #getListOfAllFeaturedContent() {
    try {
      const docRef = doc(db, "eventandopportunity", "featured");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        const featured = Object.values(data).map((featuredData) =>
          Featured.fromJson(featuredData)
        );
        //console.log("Featured Content:", featured);
        return featured;
      } else {
        //console.log("No featured content found.");
        return [];
      }
    } catch (error) {
      console.error("Failed to get featured content: ", error);
    }
  }

  static async #addNewFeaturedContent(featuredContent) {
    let updatedFeaturedContent = {};
    try {
      await runTransaction(db, async (transaction) => {
        const countRef = doc(db, "count", "featured_count");
        const docRef = doc(db, "eventandopportunity", "featured");

        // Fetch the current featured count
        const countSnap = await transaction.get(countRef);
        const docSnap = await transaction.get(docRef);
        let featuredId = 0;
        let currentFeaturedCount = 0;

        if (countSnap.exists()) {
          currentFeaturedCount = countSnap.data().count || 0;
        }

        if (!docSnap.exists()) {
          featuredId = currentFeaturedCount + 1;
          featuredContent.featured_id = featuredId;
          transaction.set(docRef, { [featuredId]: featuredContent });
          transaction.update(countRef, { count: featuredId });
          updatedFeaturedContent = { [featuredId]: featuredContent };
        } else {
          const data = docSnap.data();
          const newFeaturedId = currentFeaturedCount + 1;
          featuredContent.featured_id = newFeaturedId;
          transaction.update(docRef, { [newFeaturedId]: featuredContent });
          transaction.update(countRef, { count: newFeaturedId });
          updatedFeaturedContent = {
            ...data,
            [newFeaturedId]: featuredContent,
          };
        }
      });

      //console.log("Featured Content added successfully");
      if (Object.values(updatedFeaturedContent).length === 0) {
        return [];
      } else {
        return Object.values(updatedFeaturedContent).map((featuredData) =>
          Featured.fromJson(featuredData)
        );
      }
    } catch (error) {
      console.error("Failed to add Featured Content: ", error);
    }
  }

  static async #updateSelectedFeaturedContentVisibility(
    featuredContentId,
    visibility
  ) {
    let updatedFeaturedContent = {};
    try {
      await runTransaction(db, async (transaction) => {
        const docRef = doc(db, "eventandopportunity", "featured");
        const docSnap = await transaction.get(docRef);
        if (docSnap.exists()) {
          const featuredContent = docSnap.data();
          if (featuredContent.hasOwnProperty(featuredContentId)) {
            featuredContent[featuredContentId].featured_visibility = visibility;
            transaction.update(docRef, {
              [`${featuredContentId}.featured_visibility`]: visibility,
            });
            // console.log(
            //   `Featured Content visibility updated successfully: ${featuredContentId}`
            // );
            updatedFeaturedContent = featuredContent;
          } else {
            //console.log(`Featured Content ${featuredContentId} not found.`);
          }
        } else {
          //console.log("No featured content document found.");
        }
      });
      if (Object.values(updatedFeaturedContent).length == 0) {
        return [];
      } else {
        return Object.values(updatedFeaturedContent).map((featuredData) =>
          Featured.fromJson(featuredData)
        );
      }
    } catch (error) {
      console.error(`Failed to update Featured Content visibility: `, error);
      return null;
    }
  }

  static async #removeExistingFeaturedContent(featuredContentId) {
    let updatedFeaturedContent = {};
    try {
      await runTransaction(db, async (transaction) => {
        const docRef = doc(db, "eventandopportunity", "featured");
        const docSnap = await transaction.get(docRef);

        if (docSnap.exists()) {
          const featuredContent = docSnap.data();
          if (featuredContent.hasOwnProperty(featuredContentId)) {
            updatedFeaturedContent = { ...featuredContent };
            delete updatedFeaturedContent[featuredContentId];
            transaction.update(docRef, { [featuredContentId]: deleteField() });
            // console.log(
            //   `Featured Content ${featuredContentId} removed successfully.`
            // );
          } else {
            //console.log(`Featured Content ${featuredContentId} not found.`);
          }
        } else {
          //console.log("No featured document found.");
          updatedFeaturedContent = null;
        }
      });
      if (Object.values(updatedFeaturedContent).length == 0) {
        return [];
      } else {
        return Object.values(updatedFeaturedContent).map((featuredData) =>
          Featured.fromJson(featuredData)
        );
      }
    } catch (error) {
      console.error(
        `Failed to remove featured content ${featuredContentId}: `,
        error
      );
      return null;
    }
  }
}
