import dayjs from "dayjs";
import React, { useState, forwardRef, useEffect } from "react";
import { eventsArray } from "./constants";

const CalendarCardWithRef = forwardRef((props, ref) => {
  // multiple of these
  //   console.log("calendarcardWithRef: ", props.title);
  return (
    <div>
      <h3 ref={ref}>I am an event on {props.title}</h3>
    </div>
  );
});

function CalendarCard(props) {
  // multiple of these
  //   console.log("regularCard: ", props.title);
  return (
    <div>
      <h3>I am an event on {props.title}</h3>
    </div>
  );
}

function CalendarList2() {
  //   const [refList, setRefList] = useState([]);

  let content = [];
  let currentMonth;
  let newMonth;
  let refList = [];
  console.log(eventsArray);
  eventsArray.forEach((event) => {
    newMonth = undefined;
    if (currentMonth != dayjs(event.dateStr).month()) {
      newMonth = dayjs(event.dateStr).month();
      currentMonth = newMonth;
    }
    if (newMonth) {
      // console.log("newRef!");
      let newRef = React.createRef();
      console.log("newRef: ", newRef);
      refList.push(newRef);
      //   setRefList([...refList, newRef]);
      //   console.log("existingRefList: ", refList);
      content.push(
        <CalendarCardWithRef ref={newRef} key={event.id} title={event.title} />
      );
      // content.push(
      //   <CalendarCardWithRef key={event.id} title={event.title} />
      // );
      // setRefsList([...refsList, newRef]);
    } else {
      content.push(<CalendarCard key={event.id} title={event.title} />);
    }
  });

  console.log("refList: ", refList);

  return (
    <div>
      <h1>Calendar Meetings</h1>
      <button>Add an event</button>
      <button>march</button>
      <button>april</button>
      <button>may</button>
      <button>june</button>
      {content}
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

export default CalendarList2;
