import React from "react";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <h1>FXCINVEST</h1>
        <p>&#169; copyright {new Date().getFullYear()}</p>
      </div>
    </div>
  );
};

export default Footer;
