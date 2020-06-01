import React, { useState, useEffect } from "react";
import "./message.styles.scss";
import { connect } from "react-redux";
import {
  selectCurrentUser,
  selectSuccess,
} from "../../redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import { resendConfirmEmailStart } from "../../redux/user/user.actions";

const Message = ({ user, resendConfirmEmailStart, success }) => {
  const [msgDisplay, setMsgDisplay] = useState(null);
  const [resendBtn, setResendBtn] = useState("Resend Confirm Email");
  const close = () => {
    setMsgDisplay("none");
  };

  const resend = () => {
    resendConfirmEmailStart();
  };

  useEffect(() => {
    if (success) {
      console.log(success);
      setResendBtn(success);
      setTimeout(() => {
        setResendBtn("Resend Confirm Email");
      }, 3000);
    }
  }, [success]);

  return (
    <div className="message" style={{ display: msgDisplay }}>
      <span className="message--close" onClick={() => close()}>
        &times;
      </span>
      <h1>Welcome to FXCINVEST - your personal client area.</h1>
      <p>Your FXCINVEST User name: {user.username}</p>
      <p>
        We have sent your login information to your email. Please Confirm your
        email.
      </p>
      <p className="resendConfirmEmail ripple" onClick={() => resend()}>
        {resendBtn}
      </p>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  success: selectSuccess,
});
const mapDispatchToProps = (dispatch) => ({
  resendConfirmEmailStart: () => dispatch(resendConfirmEmailStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Message);
