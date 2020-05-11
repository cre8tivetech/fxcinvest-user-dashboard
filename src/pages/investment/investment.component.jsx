import React from "react";
import Layout from "../../components/layout/layout.component";
import SEO from "../../components/seo/seo.component";
import "./investment.styles.scss";
import InvestmentCard from "./investment-card.component";
import Message from "../../components/message/message.component";

const Investment = () => {
  window.scroll(0, 0);
  return (
    <Layout>
      <SEO title="Get all investment plans" />
      <div className="investment">
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
export default Investment;
