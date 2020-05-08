import React from "react";
import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__left--image"></div>
        {/* <i className="fa fa-bars fa-2x"></i> */}
      </div>
      <div className="header__right">
        <div className="header__right--name">
          <h1>Joshua Nwakwuo</h1>
          <p>joshmatparrot</p>
        </div>
        <div className="header__right--btn">
          <div className="header__right--btn__image"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
