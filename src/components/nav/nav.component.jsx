import React from "react";

import "./nav.styles.scss";
// import Logo from "../logo/logo.component";
import ProfilePix from "../../assets/img/Joshmat.svg";
import NavList from "../nav/nav-list.component";

const Nav = () => {
  return (
    <nav className="main-nav">
      <div className="main-nav__top">
        <p>Menu</p>
      </div>
      <div className="main-nav__profile">
        <div className="main-nav__profile--image">
          <img src={ProfilePix} alt="" />
          <div className="dot"></div>
        </div>
        <div className="main-nav__profile--info">
          <h1>Joshua Nwakwuo</h1>
          <p>Nigeria</p>
        </div>
      </div>
      {/* <Logo size="x" /> */}
      <NavList type="main" />
    </nav>
  );
};

export default Nav;
