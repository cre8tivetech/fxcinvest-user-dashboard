import React, { useMemo } from "react";

import "./nav.styles.scss";
// import Logo from "../logo/logo.component";
// import Logo from "../../assets/img/Icon.svg";
import Logo from "../../assets/img/Logos.svg";
import ProfilePix from "../../assets/img/Joshmat.svg";
import NavList from "../nav/nav-list.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectMenu } from "../../redux/ui/ui.selector";
import { useEffect } from "react";
import { useState } from "react";

const Nav = ({ menu }) => {
  const [width, setWidth] = useState();
  const [display, setDisplay] = useState();
  const device = window.matchMedia("(max-width: 600px)");
  const memoizedValue = useMemo(() => {
    if (menu) device.matches ? setDisplay("none") : setWidth("7%");
    if (!menu)
      if (device.matches) {
        setDisplay("block");
        setWidth("10%");
      } else {
        setWidth(null);
      }
  }, [device.matches, menu]);
  useEffect(() => {
    console.log("re-rendering");
  }, [memoizedValue]);

  return (
    <nav className="main-nav" style={{ width: width, display: display }}>
      {!width && (
        <div className="main-nav__top">
          <img src={Logo} alt="" />
          {/* <p>Menu</p> */}
          {/* <p style={width ? { color: "red" } : { color: "blue" }}>Good</p> */}
        </div>
      )}
      <div className="main-nav__profile">
        {/* <div
          className="main-nav__profile--image"
          style={menu ? { maxWidth: "3.5rem", maxHeight: "3.5rem" } : {}}
        >
          <img
            src={ProfilePix}
            alt=""
            style={menu ? { maxWidth: "3.5rem" } : {}}
          />
          <div
            className="dot"
            style={menu ? { width: "0.5rem", height: "0.5rem" } : {}}
          ></div>
        </div> */}

        <div
          className="main-nav__profile--image"
          style={menu ? { maxWidth: "3.5rem", maxHeight: "3.5rem" } : {}}
        >
          <div style={menu ? { maxWidth: "3.5rem" } : {}}>
            <h1>J</h1>
          </div>
          <div
            className="dot"
            style={menu ? { width: "0.5rem", height: "0.5rem" } : {}}
          ></div>
        </div>
        {!menu && (
          <div className="main-nav__profile--info">
            <h1>Joshua Nwakwuo</h1>
            <p>Nigeria</p>
          </div>
        )}
      </div>
      {/* <Logo size="x" /> */}
      <NavList type="main" />
      {/* {width && <NavList type="mobile" />} */}
    </nav>
  );
};

const mapStateToProps = createStructuredSelector({
  menu: selectMenu,
});
export default connect(mapStateToProps)(Nav);
