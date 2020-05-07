import React, { Fragment } from 'react';

import Header from "../header/header.component";
import Footer from '../footer/footer.component';

const Layout = ({ children, location }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  )
}

export default Layout;