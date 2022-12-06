import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../dummy-data";

export default function Home() {

  const featureEvent = getFeaturedEvents();

  return (
    <div>
      <EventList items={featureEvent} />
    </div>
  );
}
