import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import "./nav.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectMenu } from "../../redux/ui/ui.selector";

const NavList = ({ type, menu }) => {
  // useEffect(() => {}, [menu]);

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
        <Link activeclassname="active" className="list" to="">
          <li
            style={
              menu ? { justifyContent: "center", padding: "1rem 0 1rem 0" } : {}
            }
          >
            <i className="fad fa-sign-out"></i>
            {!menu && <p>Logout</p>}
          </li>
        </Link>
      </ul>
    </nav>
  );

  // const mobileNav = (
  //   <ul>
  //     <li>
  //       <Link className="list" to="/">
  //         Home
  //       </Link>
  //     </li>

  //     <li>
  //       <Link className="list" to="/about-us">
  //         About Us
  //       </Link>
  //     </li>

  //     <li>
  //       <Link className="list" to="/faq">
  //         FAQ
  //       </Link>
  //     </li>

  //     <li>
  //       <Link className="list" to="/investment-plans">
  //         Investment Plans
  //       </Link>
  //     </li>

  //     <li>
  //       <Link className="list" to="/contact-us">
  //         Contact Us
  //       </Link>
  //     </li>

  //     <li>
  //       <Link className="list" to="/privacy-policy">
  //         Privacy Policy
  //       </Link>
  //     </li>
  //   </ul>
  // );

  {
    /* return (
    <nav className={`${type}-nav__list`}>
      {type === "main" ? mainNav : mobileNav}
    </nav>
  ); */
  }
};
const mapStateToProps = createStructuredSelector({
  menu: selectMenu,
});
export default connect(mapStateToProps)(NavList);
