import React, { useEffect, useMemo, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import "./my-profile.styles.scss";
import Message from "../../components/message/message.component";
import Referral from "../../components/referral/referral.component";
import { connect } from "react-redux";
import { selectMenu } from "../../redux/ui/ui.selector";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { fetchUserStart } from "../../redux/user/user.actions";

const MyProfile = ({ menu, user, fetchUserStart }) => {
  window.scroll(0, 0);
  const [width, setWidth] = useState();
  const device = window.matchMedia("(max-width: 600px)");
  const [loadBar, setLoadBar] = useState();
  useMemo(() => {
    fetchUserStart();
  }, [fetchUserStart]);
  useMemo(() => {
    // fetchUserStart();
    if (menu) device.matches ? setWidth("100%") : setWidth("93%");
    if (!menu)
      if (device.matches) {
        setWidth("90%");
      } else {
        setWidth(null);
      }
  }, [device.matches, menu]);
  useEffect(() => {
    setLoadBar(100);
  }, []);
  return (
    <div className="my-profile" style={{ width: width }}>
      <LoadingBar
        progress={loadBar}
        height={3}
        color="linear-gradient(92deg, var(--secondary-color) 0%, var(--primary-color-2) 50%, var(--secondary-color-2) 100%)"
        onLoaderFinished={() => setLoadBar(0)}
      />
      {!user.is_email_confrim && <Message />}
      <div className="my-profile__title">
        <h1>My Profile</h1>
      </div>
      <div className="my-profile__content">
        <div className="my-profile__content--box1">
          <h1>{user.name}</h1>
          <p>MyFXCINVEST Username: {user.username}</p>
        </div>
        <div className="my-profile__content--box2">
          <div className="my-profile__content--box2__title">
            <h1>Contact Information</h1>
          </div>
          <div className="line1"></div>
          <div className="my-profile__content--box2__content">
            <div className="my-profile__content--box2__contents--1">
              <p>Email</p>
              <p>{user.email}</p>
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
  );
};

const mapStateToProps = createStructuredSelector({
  menu: selectMenu,
  user: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  fetchUserStart: () => dispatch(fetchUserStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
