import Head from 'next/head'
import Link from 'next/link'

import {getFeaturedEvents} from '../../helpers/api-util'
import EventList from "../../components/events/event-list";

function HomePage(props) {
  return (
      <div>
        <Head>
          <title>Next.js Events</title>
        </Head>
        <EventList items={props.events}/>
      </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents
    },
    revalidate: 600
  }
}

export default HomePage;