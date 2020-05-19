import React, { useEffect, useState, useMemo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setMenu } from "../../redux/ui/ui.actions";
import { selectMenu } from "../../redux/ui/ui.selector";
import "./header.styles.scss";

const Header = ({ setMenu, menu }) => {
  const device = window.matchMedia("(max-width: 600px)");
  const [width, setWidth] = useState();
  const menuClick = () => {
    if (menu) {
      setMenu(false);
      if (width) setWidth(null);
    }
    if (!menu) {
      setMenu(true);
      !width && setWidth("93%");
    }

    if (device.matches) {
      console.log("this is phone");
    } else {
      console.log("this is not phone");
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
  useEffect(() => {}, [memorizedValue]);
  return (
    <div className="header" style={{ width: width }}>
      <div className="header__left">
        {menu && <i onClick={() => menuClick()} className="fal fa-times"></i>}
        {!menu && <i onClick={() => menuClick()} className="fal fa-stream"></i>}
      </div>
      <div className="header__right">
        <div className="header__right--name">
          <h1>Joshua Nwakwuo</h1>
          <p>joshmatparrot</p>
        </div>
        <div className="header__right--btn">
          <i className="fad fa-sign-out-alt"></i>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  menu: selectMenu,
});
const mapDispatchToProps = (dispatch) => ({
  setMenu: (status) => dispatch(setMenu(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
