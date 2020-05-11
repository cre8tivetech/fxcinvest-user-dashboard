import React from "react";
import "./my-profile.styles.scss";
import Layout from "../../components/layout/layout.component";
import Message from "../../components/message/message.component";
import Referral from "../../components/referral/referral.component";

const MyProfile = () => {
  window.scroll(0, 0);
  return (
    <Layout>
      <div className="my-profile">
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

export default MyProfile;
