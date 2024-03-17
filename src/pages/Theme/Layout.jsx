import React from 'react'
import { Outlet } from 'react-router-dom';

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <div className="parent">
        <Header />
        <div className="main">
          <Sidebar />
          <div className="child content">
            <Outlet/>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
