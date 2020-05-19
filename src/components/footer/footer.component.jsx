import React, { useEffect, useMemo, useState } from "react";
import "./footer.styles.scss";
import { connect } from "react-redux";
import { selectMenu } from "../../redux/ui/ui.selector";
import { setMenu } from "../../redux/ui/ui.actions";
import { createStructuredSelector } from "reselect";

const Footer = ({ setMenu, menu }) => {
  const device = window.matchMedia("(max-width: 600px)");
  const [width, setWidth] = useState();
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
    <footer className="footer" style={{ width: width }}>
      <div className="footer__content">
        <h1>FXCINVEST</h1>
        <p>&#169; copyright {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

const mapStateToProps = createStructuredSelector({
  menu: selectMenu,
});
const mapDispatchToProps = (dispatch) => ({
  setMenu: (status) => dispatch(setMenu(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
