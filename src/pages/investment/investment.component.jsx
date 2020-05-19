import React, { useEffect, useMemo, useState } from "react";
import Layout from "../../components/layout/layout.component";
import SEO from "../../components/seo/seo.component";
import "./investment.styles.scss";
import InvestmentCard from "./investment-card.component";
import Message from "../../components/message/message.component";
import { connect } from "react-redux";
import { selectMenu } from "../../redux/ui/ui.selector";
import { createStructuredSelector } from "reselect";

const Investment = ({ menu }) => {
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
      <SEO title="Get all investment plans" />
      <div className="investment" style={{ width: width }}>
        <Message />
        <div className="investment__title">
          <h1>Select Investment Plan</h1>
        </div>
        <div className="investment__card">
          <InvestmentCard />
        </div>
        <div className="investment__bottom">
          <p>
            All Back office transfers are processed during standard business
            hours, i.e. 02:00-20:00 GMT +2 (GMT+3 during DST), Mon-Fri.
          </p>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = createStructuredSelector({
  menu: selectMenu,
});
export default connect(mapStateToProps)(Investment);
