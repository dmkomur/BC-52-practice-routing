import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchEventsByName } from 'Services/EventsAPI';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export const SearchPage = () => {
  const [events, setEvents] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const evtName = searchParams.get('evt');

  useEffect(() => {
    if (evtName === '' || evtName === null) {
      return;
    }
    fetchEventsByName(evtName).then(setEvents);
  }, [evtName]);

  const handleSubmit = e => {
    e.preventDefault();
    if (e.target.evtName.value === '') {
      return;
    }
    setSearchParams({ evt: e.target.evtName.value });
    e.currentTarget.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="evtName" />
        <button type="submit">Search</button>
      </form>
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
