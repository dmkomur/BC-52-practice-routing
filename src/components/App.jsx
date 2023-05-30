import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from '../Pages/HomePage';
import EventsPage from 'Pages/EventsPage';
import EventSubPage from './EventSubPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="events" element={<EventsPage />}>
          <Route path=":id" element={<EventSubPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
