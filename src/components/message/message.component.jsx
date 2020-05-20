import React, { useState } from "react";
import "./message.styles.scss";

const Message = () => {
  const [msgDisplay, setMsgDisplay] = useState(null);
  const close = () => {
    setMsgDisplay("none");
  };

  return (
    <div className="message" style={{ display: msgDisplay }}>
      <span className="message--close" onClick={() => close()}>
        &times;
      </span>
      <h1>Welecome to MyFXCINVEST - your personal client area.</h1>
      <p>Your MyFXCINVEST User name: joshmatparrot</p>
      <p>
        We have sent your login information to your email. Please Confrim your
        email.
      </p>
    </div>
  );
};
export default Message;
