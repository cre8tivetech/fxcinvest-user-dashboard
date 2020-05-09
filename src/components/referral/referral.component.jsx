import React from "react";
import "./referral.styles.scss";

const Referral = () => {
  return (
    <div className="referral">
      <div className="referral--top">
        <div className="referral--top__content">
          <h1>Refer a Friend</h1>
          <p>Spread the world about FXCINVEST & Earn up to $10,000</p>
        </div>
      </div>
      <div className="referral--bottom">
        <p>Your Referral Link: </p>
        <div className="referral--bottom__form">
          <input
            type="url"
            name=""
            id=""
            placeholder="https://fxcinvest.com/register/?ref=joshmatparrot"
          />
          <div className="btn ripple1">Copy</div>
        </div>
      </div>
    </div>
  );
};
export default Referral;
