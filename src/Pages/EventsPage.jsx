import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { fetchEvents } from '../Services/EventsAPI.jsx';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);
  return (
    <>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <Link to={`${event.id}`}> {event.name} </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};

export default EventsPage;
