import React from "react";
import "./message.styles.scss";

const Message = () => {
  return (
    <div className="message">
      <span className="message--close">&times;</span>
      <h1>Welecome to MyFXCINVEST - your personal client area.</h1>
      <p>Your MyFXCINVEST User name: dukweb4</p>
      <p>
        We have sent your login information to your email. Please Confrim your
        email.
      </p>
    </div>
  );
};
export default Message;
