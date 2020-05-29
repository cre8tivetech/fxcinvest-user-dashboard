import React, { useEffect, useState, useMemo } from "react";
import { Link, NavLink } from "react-router-dom";

import "./nav.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectMenu } from "../../redux/ui/ui.selector";
import { signOutStart } from "../../redux/user/user.actions";
import { selectIsAuth } from "../../redux/user/user.selector";

const NavList = ({ isAuth, menu, signOutStart }) => {
  // useEffect(() => {}, [menu]);
  const [logout, setLogout] = useState("Logout");
  const signOut = () => {
    setLogout("Logging out...");
    signOutStart();
  };

  useMemo(() => {
    if (!isAuth) {
      setLogout("Logout");
      window.location.assign(process.env.REACT_APP_HOME_URL);
    }
  }, [isAuth]);
  // const mainNav = (
  return (
    <nav className="main-nav__list">
      <ul>
        <NavLink activeclassname="active" className="list" exact to="/">
          <li
            style={
              menu ? { justifyContent: "center", padding: "1rem 0 1rem 0" } : {}
            }
          >
            <i className="fas fa-tachometer-alt-fast"></i>
            {!menu && <p>Dashboard</p>}
          </li>
        </NavLink>
        <NavLink activeclassname="active" className="list " to="/my-transfers">
          <li
            style={
              menu ? { justifyContent: "center", padding: "1rem 0 1rem 0" } : {}
            }
          >
            <i className="fad fa-exchange"></i>
            {!menu && <p>My Transfers</p>}
          </li>
        </NavLink>
        <NavLink activeclassname="active" className="list" to="/deposit-funds">
          <li
            style={
              menu ? { justifyContent: "center", padding: "1rem 0 1rem 0" } : {}
            }
          >
            <i className="fad fa-hand-holding-usd"></i>
            {!menu && <p>Deposit Funds</p>}
          </li>
        </NavLink>
        <NavLink activeclassname="active" className="list" to="/withdraw-funds">
          <li
            style={
              menu ? { justifyContent: "center", padding: "1rem 0 1rem 0" } : {}
            }
          >
            <i className="fad fa-cash-register"></i>
            {!menu && <p>Withdraw Funds</p>}
          </li>
        </NavLink>
        <NavLink
          activeclassname="active"
          className="list"
          to="/internal-transfers"
        >
          <li
            style={
              menu ? { justifyContent: "center", padding: "1rem 0 1rem 0" } : {}
            }
          >
            <i className="fad fa-envelope-open-dollar"></i>
            {!menu && <p>Internal Transfers</p>}
          </li>
        </NavLink>
        <NavLink activeclassname="active" className="list" to="/investment">
          <li
            style={
              menu ? { justifyContent: "center", padding: "1rem 0 1rem 0" } : {}
            }
          >
            <i className="fad fa-sack-dollar"></i>
            {!menu && <p>Investment</p>}
          </li>
        </NavLink>
        <NavLink activeclassname="active" className="list" to="/referrals">
          <li
            style={
              menu ? { justifyContent: "center", padding: "1rem 0 1rem 0" } : {}
            }
          >
            <i className="fad fa-users"></i>
            {!menu && <p>Referrals</p>}
          </li>
        </NavLink>
        <NavLink activeclassname="active" className="list" to="/my-profile">
          <li
            style={
              menu ? { justifyContent: "center", padding: "1rem 0 1rem 0" } : {}
            }
          >
            <i className="fad fa-user-tie"></i>
            {!menu && <p>My Profile</p>}
          </li>
        </NavLink>
        <div
          onClick={() => signOut()}
          activeclassname="active"
          className="list"
        >
          <li
            style={
              menu ? { justifyContent: "center", padding: "1rem 0 1rem 0" } : {}
            }
          >
            <i className="fad fa-sign-out"></i>
            {!menu && <p>{logout}</p>}
          </li>
        </div>
      </ul>
    </nav>
  );
};
const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});
const mapStateToProps = createStructuredSelector({
  menu: selectMenu,
  isAuth: selectIsAuth,
});
export default connect(mapStateToProps, mapDispatchToProps)(NavList);
