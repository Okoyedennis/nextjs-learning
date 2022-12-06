import React from "react";
import EventItem from "./EventItem";
import styles from "./EventList.module.css";


const EventList = (props) => {
  return (
    <ul className={styles.list}>
      {props.items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
