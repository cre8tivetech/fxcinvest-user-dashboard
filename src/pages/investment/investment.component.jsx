import React, { useEffect, useMemo, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import SEO from "../../components/seo/seo.component";
import "./investment.styles.scss";
import InvestmentCard from "./investment-card.component";
import Message from "../../components/message/message.component";
import { connect } from "react-redux";
import { selectMenu } from "../../redux/ui/ui.selector";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";

const Investment = ({ menu, user }) => {
  window.scroll(0, 0);
  const [width, setWidth] = useState();
  const device = window.matchMedia("(max-width: 600px)");
  const [loadBar, setLoadBar] = useState();
  useMemo(() => {
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
    <div className="investment" style={{ width: width }}>
      <LoadingBar
        progress={loadBar}
        height={3}
        color="linear-gradient(92deg, var(--secondary-color) 0%, var(--primary-color-2) 50%, var(--secondary-color-2) 100%)"
        onLoaderFinished={() => setLoadBar(0)}
      />
      <SEO title="Get all investment plans" />
      {!user.is_email_confrim && <Message />}
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
  );
};

const mapStateToProps = createStructuredSelector({
  menu: selectMenu,
  user: selectCurrentUser,
});
export default connect(mapStateToProps)(Investment);
