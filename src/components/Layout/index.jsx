import React from 'react';
import { Outlet } from 'react-router-dom';
import LayoutStyled from './LayoutStyled';
import Header from 'components/Header';
import Footer from 'components/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <LayoutStyled>
        <Outlet />
      </LayoutStyled>
      <Footer />
    </>
  );
};

export default Layout;
