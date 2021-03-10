import dayjs from "dayjs";
import React, { useState, useRef, forwardRef, useEffect } from "react";
// const eventsArray = [];

function CalendarList() {
  // one of these
  const [eventsArray, setEventsArray] = useState([]);
  const calendarCardRef = useRef();
  // const [refList, setRefList] = useState([]);
  // const [content, setContent] = useState([]);
  //   console.log("dateObj: ", dateObj);

  function handleBackClick(selectedRef) {
    selectedRef.current.scrollIntoView({ behavior: "smooth" });
  }

  console.log("eventsArray: ", eventsArray);

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

  let refList = [];
  const eventsListDisplay = () => {
    let content = [];
    let currentMonth;
    let newMonth;
    // refList = [];
    eventsArray.forEach((event) => {
      newMonth = undefined;
      if (currentMonth != dayjs(event.dateStr).month()) {
        newMonth = dayjs(event.dateStr).month();
        currentMonth = newMonth;
      }
      if (newMonth) {
        // console.log("newRef!");
        let newRef = React.createRef();
        console.log("newRef: ", newRef, "going to: ", event.title);
        refList.push(newRef);
        // setRefList([...refList, newRef]);
        content.push(
          <CalendarCardWithRef key={event.id} title={event.title} />
        );
        // content.push(
        //   <CalendarCardWithRef key={event.id} title={event.title} />
        // );
      } else {
        content.push(<CalendarCard key={event.id} title={event.title} />);
        // setContent([
        //   ...content,
        //   <CalendarCard key={event.id} title={event.title} />,
        // ]);
      }
    });
    // console.log("refList: ", refList);
    return content;
  };
  // eventsListDisplay();
  console.log("ref list right before final return: ", refList);
  return (
    <div>
      <h1>Calendar Meetings</h1>
      <button onClick={addEvent}>Add an event</button>
      <button onClick={() => handleBackClick(refList[0])}>march</button>
      <button onClick={() => handleBackClick(refList[1])}>april</button>
      <button onClick={() => handleBackClick(refList[2])}>may</button>
      <button onClick={() => handleBackClick(refList[3])}>june</button>
      {eventsListDisplay()}
      {/* {eventsArray.length > 0 &&
        eventsArray.map((event) => {
          return (
            <CalendarCard
              // ref={calendarCardRef}
              key={event.id}
              title={event.title}
            />
          );
        })} */}
    </div>
  );
}

const CalendarCardWithRef = forwardRef((props, ref) => {
  // multiple of these
  // console.log("calendarcardWithRef: ", props.title);
  return (
    <div>
      <h3 ref={ref}>I am an event on {props.title}</h3>
    </div>
  );
});

function CalendarCard(props) {
  // multiple of these
  // console.log("regularCard: ", props.title);
  return (
    <div>
      <h3>I am an event on {props.title}</h3>
    </div>
  );
}

export default CalendarList;
