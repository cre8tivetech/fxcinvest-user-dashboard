import React, { Fragment } from "react";

import Header from "../header/header.component";
import Footer from "../footer/footer.component";
import Nav from "../nav/nav.component";
import { useEffect } from "react";

const Layout = ({ children, location }) => {
  return (
    <Fragment>
      <Nav />
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
