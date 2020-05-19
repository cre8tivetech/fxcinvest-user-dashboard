import React, { useState, useMemo } from "react";
import Layout from "../../components/layout/layout.component";
import Img404 from "../../assets/img/404.png";
import "./error.styles.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { selectMenu } from "../../redux/ui/ui.selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
const Error404 = ({ menu }) => {
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
      <div className="error-404" style={{ width: width }}>
        <div className="error-404__contents">
          <img src={Img404} alt="" />
          <h1>404</h1>
          <h4>Page not found</h4>
          <p>Sorry, we couldn't find the page you are looking for</p>
          <div className="error-404__contents--btn ripple1">
            <Link to="/">
              Go to dashboard <i className="fas fa-tachometer-alt-fast"></i>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = createStructuredSelector({
  menu: selectMenu,
});
export default connect(mapStateToProps)(Error404);
