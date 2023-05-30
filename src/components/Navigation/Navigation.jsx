import React from 'react';
import { StayledLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <StayledLink to="/">Home</StayledLink>
        </li>
        <li>
          <StayledLink to="events">Events</StayledLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
