import dayjs from "dayjs";
import React, { useState, useRef } from "react";
// const eventsArray = [];

function CalendarList() {
  // one of these
  const [eventsArray, setEventsArray] = useState([]);
  const calendarCardRef = useRef();
  //   console.log("dateObj: ", dateObj);

  function handleBackClick() {
    calendarCardRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const addEvent = () => {
    let prevDate = eventsArray[eventsArray.length - 1]?.dateStr; //.dateStr;
    let prevDateDay = dayjs(prevDate).date();
    console.log("prevDate: ", prevDate, "prevDateDay: ", prevDateDay);
    let newDate = dayjs(prevDate)
      .date(prevDateDay + 3)
      .toISOString();
    // console.log("newDate: ", newDate);
    setEventsArray([
      ...eventsArray,
      {
        id: eventsArray.length,
        title: dayjs(newDate).format("MMM DD "),
        dateStr: newDate,
      },
    ]);
  };

  return (
    <div>
      <h1>Calendar Meetings</h1>
      <button onClick={addEvent}>Add an event</button>
      {eventsArray.length > 0 &&
        eventsArray.map((event) => {
          return (
            <CalendarCard
              ref={calendarCardRef}
              key={event.id}
              title={event.title}
            />
          );
        })}
    </div>
  );
}

function CalendarCard(props) {
  // multiple of these
  return (
    <div>
      <h3>I am an event on {props.title}</h3>
    </div>
  );
}

export default CalendarList;
