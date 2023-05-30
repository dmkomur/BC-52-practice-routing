import React from 'react';
import Navigation from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
