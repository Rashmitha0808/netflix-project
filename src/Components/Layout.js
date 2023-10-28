import React, { Children } from "react";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
import { useLocation } from "react-router-dom";

const restrictLayout = ["login", "video"];
const Layout = ({ children }) => {
  const { pathname } = useLocation();

  if (restrictLayout.some((path) => pathname.includes(path))) {
    return children;
  }

  return (
    <>
      <Nav />
      <div className="layout_main_container">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
