import React from "react";
import Layout from "../../components/layout/layout.component";
import EarnImg from "../../assets/img/stack-of-coins.svg";
import RefImg from "../../assets/img/moneyPercentage.svg";
import InvImg from "../../assets/img/profits.svg";
import "./dashboard.styles.scss";
import Referral from "../../components/referral/referral.component";
import Message from "../../components/message/message.component";

const Dashboard = () => {
  return (
    <Layout>
      <div className="dashboard">
        <Message />
        <div className="dashboard__content">
          <div className="dashboard__content--box">
            <img src={EarnImg} alt="" />
            <h1>Earnings</h1>
            <p>Balance: $1000.00</p>
            <p>Total: $100000.00</p>
            <div className="dashboard__content--box__btn">
              <div className="dashboard__content--box__btn--1">Withdraw</div>
              <div className="dashboard__content--box__btn--2">Transfer</div>
            </div>
          </div>
          <div className="dashboard__content--box">
            <img src={RefImg} alt="" />
            <h1>Referrals Bonus</h1>
            <p>Balance: $50.00</p>
            <p>Total: $100.00</p>
            <div className="dashboard__content--box__btn">
              <div className="dashboard__content--box__btn--1">Withdraw</div>
              <div className="dashboard__content--box__btn--2">Transfer</div>
            </div>
          </div>
          <div className="dashboard__content--box">
            <img src={InvImg} alt="" />
            <h1>Investment</h1>
            <p>Vip Trading</p>
            <p>Days left: 15</p>
            <div className="dashboard__content--box__list">
              <div>Capital</div>
              <div>Return</div>
              <div>USD 1000</div>
              <div>USD 1500</div>
            </div>
          </div>
        </div>
        <Referral />
      </div>
    </Layout>
  );
};
export default Dashboard;
