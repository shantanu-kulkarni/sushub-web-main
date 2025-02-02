export const getFullDateWithMonth = (selectedDate) => {
  if (selectedDate.toDateString() != new Date().toDateString()) {
    const date = selectedDate;
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    const year = date.getFullYear();

    const fullDate = `${month} ${day}, ${year}`;

    return fullDate;
  } else {
    return "Today";
  }
};
