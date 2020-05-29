import React, { useMemo } from "react";

import "./nav.styles.scss";
// import Logo from "../logo/logo.component";
// import Logo from "../../assets/img/Icon.svg";
import Logo from "../../assets/img/Logos.svg";
import NavList from "../nav/nav-list.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectMenu } from "../../redux/ui/ui.selector";
import { useEffect } from "react";
import { useState } from "react";
import { selectCurrentUser } from "../../redux/user/user.selector";

const Nav = ({ menu, user }) => {
  const [width, setWidth] = useState();
  const [display, setDisplay] = useState();
  const device = window.matchMedia("(max-width: 600px)");
  useMemo(() => {
    if (menu) device.matches ? setDisplay("none") : setWidth("7%");
    if (!menu)
      if (device.matches) {
        setDisplay("block");
        setWidth("10%");
      } else {
        setWidth(null);
      }
  }, [device.matches, menu]);

  const goHome = () => {
    window.location.assign(process.env.REACT_APP_HOME_URL);
  };

  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <nav className="main-nav" style={{ width: width, display: display }}>
      {!width && (
        <div className="main-nav__top">
          <img onClick={() => goHome()} src={Logo} alt="" />
          {/* <p style={width ? { color: "red" } : { color: "blue" }}>Good</p> */}
        </div>
      )}
      <div className="main-nav__profile">
        <div
          className="main-nav__profile--image"
          style={menu ? { maxWidth: "3.5rem", maxHeight: "3.5rem" } : {}}
        >
          <div
            style={
              menu
                ? {
                    width: "ato",
                    height: "auto",
                    margin: "0",
                    fontSize: "1.3rem",
                    lineHeight: "3.5rem",
                  }
                : {}
            }
          >
            <h1>{user.name.charAt(0).toUpperCase()}</h1>
          </div>
          <div
            className="dot"
            style={
              menu ? { width: "0.5rem", height: "0.5rem", right: "0.2rem" } : {}
            }
          ></div>
        </div>
        {!menu && (
          <div className="main-nav__profile--info">
            <h1>
              {capitalize(user.name.split(" ")[0])}{" "}
              {capitalize(user.name.split(" ")[1])}
            </h1>
            <p>{user.country}</p>
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
  user: selectCurrentUser,
});
export default connect(mapStateToProps)(Nav);
