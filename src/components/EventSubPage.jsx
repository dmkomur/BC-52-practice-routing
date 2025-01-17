import React from 'react';
import { useFetchEvent } from '../HOOKS/useFetchEvent.jsx';
import { Link } from 'react-router-dom';

const EventSubPage = () => {
  const event = useFetchEvent();

  return (
    <div>
      <h1>{event?.name}</h1>
      <img src={event?.images[0].url} alt={event?.name} width="240" />
      <Link to="details">More details</Link>
    </div>
  );
};
export default EventSubPage;
