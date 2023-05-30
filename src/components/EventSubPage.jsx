import React from 'react';
import { useFetchEvent } from '../HOOKS/useFetchEvent.jsx';

const EventSubPage = () => {
  const event = useFetchEvent();

  return (
    <div>
      <h1>{event?.name}</h1>
      <img src={event?.images[0].url} alt={event?.name} />
    </div>
  );
};
export default EventSubPage;
