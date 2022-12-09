import Head from "next/head";
import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../helpers/ApiUtil";
import Head from "next/head";

export default function HomePage(props) {
  return (
    <div>
      <Head>
        <title>NextJS Event</title>
        <meta
          name="description"
          content="Find a lot of great events that allows you to envolve"
        />
      </Head>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}
