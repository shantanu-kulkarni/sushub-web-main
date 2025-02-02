import { db } from "../../firebase.config";
import { doc, getDoc, runTransaction, deleteField } from "firebase/firestore";

export class Opportunity {
  constructor({
    opportunity_id = "",
    opportunity_name = "",
    opportunity_description = "",
    opportunity_link = "",
  }) {
    this.opportunity_id = opportunity_id;
    this.opportunity_name = opportunity_name;
    this.opportunity_description = opportunity_description;
    this.opportunity_link = opportunity_link;
  }

  static fromJson(json) {
    return new Opportunity({
      opportunity_id: json["opportunity_id"],
      opportunity_name: json["opportunity_name"],
      opportunity_description: json["opportunity_description"],
      opportunity_link: json["opportunity_link"],
    });
  }

  toJson() {
    return {
      opportunity_id: this.opportunity_id,
      opportunity_name: this.opportunity_name,
      opportunity_description: this.opportunity_description,
      opportunity_link: this.opportunity_link,
    };
  }
  static async getAllOpportunities() {
    return await this.#getListOfAllOpportunities();
  }
  static async addOpportunity(opportunity) {
    return await this.#addNewOpportunity(opportunity);
  }
  static async removeOpportunity(opportunityId) {
    return await this.#removeExistingOpportunity(opportunityId);
  }

  static async #getListOfAllOpportunities() {
    try {
      const docRef = doc(db, "eventandopportunity", "opportunity");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        const opportunities = Object.values(data).map((opportunityData) =>
          Opportunity.fromJson(opportunityData)
        );
        //console.log("Opportunities:", opportunities);
        return opportunities;
      } else {
        //console.log("No opportunities found.");
        return [];
      }
    } catch (error) {
      console.error("Failed to get opportunities: ", error);
      return [];
    }
  }

  static async #addNewOpportunity(opportunity) {
    let updatedOpportunityObject = {};
    try {
      await runTransaction(db, async (transaction) => {
        const countRef = doc(db, "count", "opportunity_count");
        const docRef = doc(db, "eventandopportunity", "opportunity");

        // Fetch the current opportunity count
        const countSnap = await transaction.get(countRef);
        const docSnap = await transaction.get(docRef);
        let opportunityId = 0;
        let currentOpportunityCount = 0;

        if (countSnap.exists()) {
          currentOpportunityCount = countSnap.data().count || 0;
        }

        if (!docSnap.exists()) {
          opportunityId = currentOpportunityCount + 1;
          opportunity.opportunity_id = opportunityId;
          transaction.set(docRef, { [opportunityId]: opportunity });
          transaction.update(countRef, { count: opportunityId });
          updatedOpportunityObject = { [opportunityId]: opportunity };
        } else {
          const data = docSnap.data();
          const newOpportunityId = currentOpportunityCount + 1;
          opportunity.opportunity_id = newOpportunityId;
          transaction.update(docRef, { [newOpportunityId]: opportunity });
          transaction.update(countRef, { count: newOpportunityId });
          updatedOpportunityObject = {
            ...data,
            [newOpportunityId]: opportunity,
          };
        }
      });

      //console.log("Opportunity added successfully");
      if (Object.values(updatedOpportunityObject).length === 0) {
        return [];
      } else {
        return Object.values(updatedOpportunityObject).map((opportunityData) =>
          Opportunity.fromJson(opportunityData)
        );
      }
    } catch (error) {
      console.error("Failed to add opportunity: ", error);
    }
  }

  static async #removeExistingOpportunity(opportunityId) {
    let updatedOpportunities = {};
    try {
      await runTransaction(db, async (transaction) => {
        const docRef = doc(db, "eventandopportunity", "opportunity");
        const docSnap = await transaction.get(docRef);

        if (docSnap.exists()) {
          const opportunities = docSnap.data();
          if (opportunities.hasOwnProperty(opportunityId)) {
            updatedOpportunities = { ...opportunities };
            delete updatedOpportunities[opportunityId];
            transaction.update(docRef, { [opportunityId]: deleteField() });
            //console.log(`Opportunity ${opportunityId} removed successfully.`);
          } else {
            //console.log(`Opportunity ${opportunityId} not found.`);
          }
        } else {
          //console.log("No opportunity document found.");
          updatedOpportunities = null;
        }
      });
      if (Object.values(updatedOpportunities).length == 0) {
        return [];
      } else {
        return Object.values(updatedOpportunities).map((opportunityData) =>
          Opportunity.fromJson(opportunityData)
        );
      }
    } catch (error) {
      console.error(`Failed to remove opportunity ${opportunityId}: `, error);
      return null;
    }
  }
}
