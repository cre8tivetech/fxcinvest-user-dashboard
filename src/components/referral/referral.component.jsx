import React, { useRef, useState } from "react";
import "./referral.styles.scss";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { createStructuredSelector } from "reselect";

const Referral = ({ user }) => {
  const [copyText, setCopyText] = useState("copy");
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  const copyToClipboard = (e) => {
    textAreaRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    setCopyText("");
    setCopySuccess("Copied!");
    setTimeout(() => {
      setCopyText("Copy");
      setCopySuccess(" ");
    }, 2000);
  };
  return (
    <div className="referral">
      <div className="referral--top">
        <div className="referral--top__content">
          <h1>Refer a Friend</h1>
          <p>Spread the world about DHP BTC & Earn up to $1,000</p>
        </div>
      </div>
      <div className="referral--bottom">
        <p>Your Referral Link: </p>
        <div className="referral--bottom__form">
          <input
            ref={textAreaRef}
            onChange={() => null}
            value={"https://dhpbtc.com/register/?ref=" + user.username}
          />
          <div className="btn ripple1" onClick={copyToClipboard}>
            {copyText}
            {copySuccess}
          </div>
          {/* <div>Copy</div> */}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});
export default connect(mapStateToProps)(Referral);
