import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEventById } from '../Services/EventsAPI.jsx';

export const useFetchEvent = () => {
  const [event, setEvent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchEventById(id).then(setEvent);
  }, [id]);

  return event;
};

// const ProductDetails = () => {
//   const { productId } = useParams();
//   return <div>Now showing product with id - {productId}</div>;
// };
