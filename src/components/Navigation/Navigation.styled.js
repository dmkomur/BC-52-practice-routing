import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StayledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding: 10px 20px;
  display: inline-block;
  &.active {
    color: tomato;
  }
`;
