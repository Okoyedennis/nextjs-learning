import { useRouter } from 'next/router'
import React from 'react'
import EventList from '../../components/events/EventList'
import EventsSearch from '../../components/events/EventsSearch'
import { getAllEvents } from '../../dummy-data'

const AllEventsPage = () => {

    const events = getAllEvents()

    const router = useRouter();

    const findEventHandler = (year, month) => {
        const fullPath = `/events/${year}/${month}`;

        router.push(fullPath)
    }
  return (
      <div>
          <EventsSearch onSearch={findEventHandler} />
          <EventList items={events} />
    </div>
  )
}

export default AllEventsPage