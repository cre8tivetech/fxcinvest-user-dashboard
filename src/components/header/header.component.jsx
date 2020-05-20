import React, { useEffect, useState, useMemo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setMenu } from "../../redux/ui/ui.actions";
import { selectMenu } from "../../redux/ui/ui.selector";
import "./header.styles.scss";
import {
  selectCurrentUser,
  selectIsAuth,
} from "../../redux/user/user.selector";
import { signOutStart } from "../../redux/user/user.actions";

const Header = ({ signOutStart, setMenu, menu, user, isAuth }) => {
  const device = window.matchMedia("(max-width: 600px)");
  const [width, setWidth] = useState();
  const [logout, setLogout] = useState(null);
  const menuClick = () => {
    if (menu) {
      setMenu(false);
      if (width) setWidth(null);
    }
    if (!menu) {
      setMenu(true);
      !width && setWidth("93%");
    }
  };
  const memorizedValue = useMemo(() => {
    menu && device.matches ? setWidth("100%") : setWidth("93%");
    if (!menu)
      if (device.matches) {
        setWidth("90%");
      } else {
        setWidth(null);
      }
  }, [device.matches, menu]);
  useEffect(() => {
    if (!isAuth) {
      setLogout("Logout");
      window.location.assign(process.env.REACT_APP_HOME_URL);
    }
  }, [isAuth, memorizedValue]);

  const signOut = () => {
    setLogout("red");
    signOutStart();
  };
  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  return (
    <div className="header" style={{ width: width }}>
      <div className="header__left">
        {menu && <i onClick={() => menuClick()} className="fal fa-times"></i>}
        {!menu && <i onClick={() => menuClick()} className="fal fa-stream"></i>}
      </div>
      <div className="header__right">
        <div className="header__right--name">
          <h1>
            {capitalize(user.name.split(" ")[0])}{" "}
            {capitalize(user.name.split(" ")[1])}
          </h1>
          <p>{user.username}</p>
        </div>
        <div className="header__right--btn">
          <i
            onClick={() => signOut()}
            className="fad fa-sign-out-alt"
            style={{ color: logout }}
          ></i>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  menu: selectMenu,
  user: selectCurrentUser,
  isAuth: selectIsAuth,
});
const mapDispatchToProps = (dispatch) => ({
  setMenu: (status) => dispatch(setMenu(status)),
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
