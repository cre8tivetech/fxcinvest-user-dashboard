import React, { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import "./referrals.styles.scss";
import Message from "../../components/message/message.component";
import Referral from "../../components/referral/referral.component";
import { useMemo } from "react";
import { connect } from "react-redux";
import { selectMenu } from "../../redux/ui/ui.selector";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";

const Referrals = ({ menu, user }) => {
  const [width, setWidth] = useState();
  const device = window.matchMedia("(max-width: 600px)");
  const [loadBar, setLoadBar] = useState();
  const memorizedValue = useMemo(() => {
    if (menu) device.matches ? setWidth("100%") : setWidth("93%");
    if (!menu)
      if (device.matches) {
        setWidth("90%");
      } else {
        setWidth(null);
      }
  }, [device.matches, menu]);
  useMemo(() => {
    window.scroll(0, 0);
  }, []);
  useEffect(() => {
    setLoadBar(100);
  }, [memorizedValue]);
  return (
    <div className="referrals" style={{ width: width }}>
      <LoadingBar
        progress={loadBar}
        height={3}
        color="linear-gradient(92deg, var(--secondary-color) 0%, var(--primary-color-2) 50%, var(--secondary-color-2) 100%)"
        onLoaderFinished={() => setLoadBar(0)}
      />
      {!user.is_email_confrim && <Message />}
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
  );
};

const mapStateToProps = createStructuredSelector({
  menu: selectMenu,
  user: selectCurrentUser,
});
export default connect(mapStateToProps)(Referrals);
