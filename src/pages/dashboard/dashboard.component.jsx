import React, { useEffect, useState, useMemo, Suspense } from "react";
import LoadingBar from "react-top-loading-bar";
import EarnImg from "../../assets/img/stack-of-coins.svg";
import RefImg from "../../assets/img/moneyPercentage.svg";
import InvImg from "../../assets/img/profits.svg";
import "./dashboard.styles.scss";
import Referral from "../../components/referral/referral.component";
import Message from "../../components/message/message.component";
import { selectMenu } from "../../redux/ui/ui.selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCurrentUser, selectToken } from "../../redux/user/user.selector";
import AuthSpinner from "../../components/auth/auth-spinner.component";
import { fetchUserStart } from "../../redux/user/user.actions";
import { Link } from "react-router-dom";

const Dashboard = ({ menu, user, token, fetchUserStart }) => {
  window.scroll(0, 0);
  const [width, setWidth] = useState();
  const [loadBar, setLoadBar] = useState();
  const { wallet } = user;

  const {
    balance,
    balance_total,
    referral_earnings,
    referral_earnings_total,
  } = wallet;
  const device = window.matchMedia("(max-width: 600px)");
  useMemo(() => {
    fetchUserStart();
    if (menu) device.matches ? setWidth("100%") : setWidth("93%");
    if (!menu)
      if (device.matches) {
        setWidth("90%");
      } else {
        setWidth(null);
      }
  }, [device.matches, fetchUserStart, menu]);
  useEffect(() => {
    setLoadBar(100);
  }, []);
  return (
    <Suspense fallback={<AuthSpinner />}>
      <div className="dashboard" style={{ width: width }}>
        <LoadingBar
          progress={loadBar}
          height={3}
          color="linear-gradient(92deg, var(--secondary-color) 0%, var(--primary-color-2) 50%, var(--secondary-color-2) 100%)"
          onLoaderFinished={() => setLoadBar(0)}
        />
        {!user.is_email_confrim && <Message />}
        <div className="dashboard__content">
          <div className="dashboard__content--box">
            <img src={EarnImg} alt="" />
            <h1>Earnings</h1>
            <p>Balance: ${balance}</p>
            <p>Total: ${balance_total}</p>
            <div className="dashboard__content--box__btn">
              <div className="dashboard__content--box__btn--1 ripple1">
                <Link to="/withdraw-funds">Withdraw</Link>
              </div>
              <div className="dashboard__content--box__btn--2 ripple2">
                <Link to="/internal-transfers">Transfer</Link>
              </div>
            </div>
          </div>
          <div className="dashboard__content--box">
            <img src={RefImg} alt="" />
            <h1>Referrals Bonus</h1>
            <p>Balance: ${referral_earnings}</p>
            <p>Total: ${referral_earnings_total}</p>
            <div className="dashboard__content--box__btn">
              <div className="dashboard__content--box__btn--1 ripple1">
                <Link to="/withdraw-funds">Withdraw</Link>
              </div>
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
    </Suspense>
  );
};

const mapStateToProps = createStructuredSelector({
  menu: selectMenu,
  user: selectCurrentUser,
  token: selectToken,
});
const mapDispatchToProps = (dispatch) => ({
  fetchUserStart: () => dispatch(fetchUserStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
