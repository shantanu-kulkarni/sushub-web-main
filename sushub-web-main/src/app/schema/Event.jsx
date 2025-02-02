import moment from "moment";
import { db } from "../../firebase.config";
import {
  doc,
  getDoc,
  runTransaction,
  deleteField,
  Timestamp,
} from "firebase/firestore";

export class Event {
  constructor({
    event_id = "",
    event_name = "",
    event_location = "",
    event_date = "",
    event_time = "",
    event_link = "",
  }) {
    this.event_id = event_id;
    this.event_name = event_name;
    this.event_location = event_location;
    this.event_date = event_date;
    this.event_time = event_time;
    this.event_link = event_link;
  }

  static fromJson(json) {
    return new Event({
      event_id: json["event_id"],
      event_name: json["event_name"],
      event_location: json["event_location"],
      event_date: moment(json["event_date"].toDate())
        .format("YYYY-MM-DD")
        .toString(),
      event_time: json["event_time"],
      event_link: json["event_link"],
    });
  }

  toJson() {
    return {
      event_id: this.event_id,
      event_name: this.event_name,
      event_location: this.event_location,
      event_date: Timestamp.fromDate(new Date(this.event_date)),
      event_time: this.event_time,
      event_link: this.event_link,
    };
  }

  static async getAllEvents() {
    return await this.#getListOfAllEvents();
  }
  static async addEvent(newEvent) {
    return await this.#addNewEvent(newEvent);
  }
  static async removeEvent(eventId) {
    return await this.#removeExistingEvent(eventId);
  }

  static async #getListOfAllEvents() {
    try {
      const docRef = doc(db, "eventandopportunity", "event");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        const events = Object.values(data).map((eventData) =>
          Event.fromJson(eventData)
        );
        //console.log("Events:", events);
        return events;
      } else {
        //console.log("No events found.");
        return [];
      }
    } catch (error) {
      console.error("Failed to get events: ", error);
      return [];
    }
  }

  static async #addNewEvent(newEvent) {
    let updatedEventObject = {};
    try {
      await runTransaction(db, async (transaction) => {
        const countRef = doc(db, "count", "event_count");
        const docRef = doc(db, "eventandopportunity", "event");

        const countSnap = await transaction.get(countRef);
        const docSnap = await transaction.get(docRef);
        let eventId = 0;
        let currentCount = 0;

        if (countSnap.exists()) {
          currentCount = countSnap.data().count || 0;
        }

        if (!docSnap.exists()) {
          eventId = currentCount + 1;
          newEvent.event_id = eventId;
          newEvent.event_date = Timestamp.fromDate(newEvent.event_date);
          transaction.set(docRef, { [eventId]: newEvent });
          transaction.update(countRef, { count: eventId });
          updatedEventObject = { [eventId]: newEvent };
        } else {
          const data = docSnap.data();
          const newEventId = currentCount + 1;
          newEvent.event_id = newEventId;
          transaction.update(docRef, { [newEventId]: newEvent });
          transaction.update(countRef, { count: newEventId });
          updatedEventObject = { ...data, [newEventId]: newEvent };
        }
      });

      //console.log("Event added successfully");
      if (Object.values(updatedEventObject).length === 0) {
        return [];
      } else {
        return Object.values(updatedEventObject).map((eventData) =>
          Event.fromJson(eventData)
        );
      }
    } catch (error) {
      console.error("Failed to add event: ", error);
    }
  }

  static async #removeExistingEvent(eventId) {
    let updatedEvents = {};
    try {
      await runTransaction(db, async (transaction) => {
        const docRef = doc(db, "eventandopportunity", "event");
        const docSnap = await transaction.get(docRef);

        if (docSnap.exists()) {
          const events = docSnap.data();
          if (events.hasOwnProperty(eventId)) {
            updatedEvents = { ...events };
            delete updatedEvents[eventId];
            transaction.update(docRef, { [eventId]: deleteField() });
            //console.log(`Event ${eventId} removed successfully.`);
          } else {
            //console.log(`Event ${eventId} not found.`);
          }
        } else {
          //console.log("No events document found.");
          updatedEvents = null;
        }
      });
      if (Object.values(updatedEvents).length == 0) {
        return [];
      } else {
        return Object.values(updatedEvents).map((eventData) =>
          Event.fromJson(eventData)
        );
      }
    } catch (error) {
      console.error(`Failed to remove event ${eventId}: `, error);
      return null;
    }
  }
}
