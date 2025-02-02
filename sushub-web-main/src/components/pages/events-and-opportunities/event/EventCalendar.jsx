import React from "react";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";

const EventCalendar = (props) => {
  return (
    <div className="w-full rounded-3xl bg-default-100/50 shadow-md p-4 h-auto flex flex-col">
      <Calendar
        onChange={props.onChange}
        value={props.selectedDate}
        onActiveStartDateChange={props.onActiveStartDateChange}
        className="border-0"
        defaultValue={[]}
        tileClassName={({ date, view }) => {
          const fiveDaysAgo = new Date(
            new Date().setDate(new Date().getDate() - 5)
          );
          if (
            props.currentCalendarDates.find(
              (x) =>
                x === moment(date).format("YYYY-MM-DD") &&
                moment(date).format("YYYY-MM-DD") !=
                  moment(props.selectedDate).format(
                    "YYYY-MM-DD"
                  ) /*&& date >= fiveDaysAgo*/
            )
          ) {
            return "highlight";
          }
        }}
        //tileDisabled={({ date }) => date.getDay() === 0}
         minDate={
            new Date(new Date().setDate(new Date().getDate() - 5))
        }
      />
      <div className="mt-4 flex justify-start items-center flex-row">
        <div className="ml-4 mr-2 w-4 h-4 rounded-full bg-cyan-300/50"></div>
        <div className="text-sm italic text-black/30">
          represents the days that have events planned.
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
