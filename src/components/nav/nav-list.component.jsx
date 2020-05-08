import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./nav.styles.scss";

const NavList = ({ type }) => {
  const mainNav = (
    <ul>
      <NavLink activeClassName="active" className="list" exact to="/">
        <li>Dashboard</li>
      </NavLink>

      <NavLink activeClassName="active" className="list " to="/my-transfers">
        <li>My Transfers</li>
      </NavLink>

      <NavLink activeClassName="active" className="list" to="/deposit-funds">
        <li>Deposit Funds</li>
      </NavLink>

      <NavLink activeClassName="active" className="list" to="/about-us">
        <li>Withdraw Funds</li>
      </NavLink>

      <NavLink activeClassName="active" className="list" to="/about-us">
        <li>Internal Transfer</li>
      </NavLink>

      <NavLink activeClassName="active" className="list" to="/about-us">
        <li>Investment</li>
      </NavLink>

      <NavLink activeClassName="active" className="list" to="/about-us">
        <li>Referrals</li>
      </NavLink>

      <NavLink activeClassName="active" className="list" to="/about-us">
        <li>My Profile</li>
      </NavLink>

      <NavLink activeClassName="active" className="list" to="/about-us">
        <li>Logout</li>
      </NavLink>
    </ul>
  );

  const mobileNav = (
    <ul>
      <li>
        <Link className="list" to="/">
          Home
        </Link>
      </li>

      <li>
        <Link className="list" to="/about-us">
          About Us
        </Link>
      </li>

      <li>
        <Link className="list" to="/faq">
          FAQ
        </Link>
      </li>

      <li>
        <Link className="list" to="/investment-plans">
          Investment Plans
        </Link>
      </li>

      <li>
        <Link className="list" to="/contact-us">
          Contact Us
        </Link>
      </li>

      <li>
        <Link className="list" to="/privacy-policy">
          Privacy Policy
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className={`${type}-nav__list`}>
      {type === "main" ? mainNav : mobileNav}
    </nav>
  );
};

export default NavList;
