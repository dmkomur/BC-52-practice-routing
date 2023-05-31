import { useFetchEvent } from '../HOOKS/useFetchEvent.jsx';

export const EventDetailsPage = () => {
  const event = useFetchEvent();
  return (
    <div>
      <h1>{event?.name}</h1>
      <img src={event?.images[0].url} alt={event?.name} width="240" />
      <p>genre: {event?.classifications[0].genre.name}</p>
      <p>subgenre: {event?.classifications[0].subGenre.name}</p>
    </div>
  );
};
