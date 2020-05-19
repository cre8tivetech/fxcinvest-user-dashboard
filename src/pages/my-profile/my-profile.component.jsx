import React, { useEffect, useMemo, useState } from "react";
import "./my-profile.styles.scss";
import Layout from "../../components/layout/layout.component";
import Message from "../../components/message/message.component";
import Referral from "../../components/referral/referral.component";
import { connect } from "react-redux";
import { selectMenu } from "../../redux/ui/ui.selector";
import { createStructuredSelector } from "reselect";

const MyProfile = ({ menu }) => {
  window.scroll(0, 0);
  const [width, setWidth] = useState();
  const device = window.matchMedia("(max-width: 600px)");
  const memorizedValue = useMemo(() => {
    if (menu) device.matches ? setWidth("100%") : setWidth("93%");
    if (!menu)
      if (device.matches) {
        setWidth("90%");
      } else {
        setWidth(null);
      }
  }, [device.matches, menu]);
  useEffect(() => {}, [memorizedValue]);
  return (
    <Layout>
      <div className="my-profile" style={{ width: width }}>
        <Message />
        <div className="my-profile__title">
          <h1>My Profile</h1>
        </div>
        <div className="my-profile__content">
          <div className="my-profile__content--box1">
            <h1>Joshua Nwakwuo</h1>
            <p>MyFXCINVEST Username: joshmatparrot</p>
          </div>
          <div className="my-profile__content--box2">
            <div className="my-profile__content--box2__title">
              <h1>Contact Information</h1>
            </div>
            <div className="line1"></div>
            <div className="my-profile__content--box2__content">
              <div className="my-profile__content--box2__contents--1">
                <p>Email</p>
                <p>joshmatparrot@gmail.com</p>
              </div>
              <div className="my-profile__content--box2__contents--2">
                <p>My subscriptions</p>
                <p>None</p>
              </div>
              <div className="my-profile__content--box2__contents--3">
                <p>Change MyFXTM password</p>
                <p>Change</p>
              </div>
            </div>
          </div>
        </div>
        <Referral />
      </div>
    </Layout>
  );
};

const mapStateToProps = createStructuredSelector({
  menu: selectMenu,
});
export default connect(mapStateToProps)(MyProfile);
