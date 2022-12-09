import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { getAllEvents } from "../../helpers/ApiUtil";

const AllEventsPage = (props) => {
  const events = props.events;

  const router = useRouter();

  const findEventHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };
  return (
    <div>
      <Head>
        <title>All Event</title>
        <meta
          name="description"
          content="Find a lot of great events that allows you to envolve"
        />
      </Head>
      <EventsSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </div>
  );
};

export default AllEventsPage;

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}
