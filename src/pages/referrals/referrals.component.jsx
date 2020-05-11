import React from "react";
import "./referrals.styles.scss";
import Layout from "../../components/layout/layout.component";
import Message from "../../components/message/message.component";
import Referral from "../../components/referral/referral.component";

const Referrals = () => {
  window.scroll(0, 0);
  return (
    <Layout>
      <div className="referrals">
        <Message />
        <div className="referrals__title">
          <h1>Refer-A-Friend Program - Earn $50 Each</h1>
        </div>
        <div className="referrals__content">
          <div className="referrals__content--box1">
            <div className="referrals__content--box1--title">
              <h1>Total Qualified Referrals</h1>
            </div>
            <div className="line2"></div>
            <div className="referrals__content--box1--contents">
              <p>Clients</p>
              <div className="referrals__content--box1--contents__data">
                <h1>0</h1>
                <h1>0</h1>
              </div>
            </div>
          </div>
          <div className="referrals__content--box2">
            <div className="referrals__content--box2--title">
              <h1>Your Referrals In Numbers</h1>
            </div>
            <div className="line2"></div>
            <div className="referrals__content--box2--contents">
              <div className="referrals__content--box2--contents__1">
                <p>Total Non-qualified Referrals</p>
                <p>0</p>
              </div>
              <div className="line2"></div>
              <div className="referrals__content--box2--contents__2">
                <p>Total Qualified Referrals</p>
                <p>0 Clients/USD 0</p>
              </div>
              <div className="line2"></div>
              <div className="referrals__content--box2--contents__3">
                <p>Total Referral Amount Paid</p>
                <p>0 Clients/USD 0</p>
              </div>
              <div className="line2"></div>
              <div className="referrals__content--box2--contents__4">
                <p>Total Pending Referral Amount</p>
                <p>0 Clients/USD 0</p>
              </div>
              <div className="line2"></div>
            </div>
          </div>
        </div>
        <Referral />
      </div>
    </Layout>
  );
};

export default Referrals;
