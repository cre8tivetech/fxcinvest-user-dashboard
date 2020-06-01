import React, {
  useEffect,
  useState,
  useMemo,
  Suspense,
  useCallback,
} from "react";
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
import {
  fetchUserStart,
  setInvestData,
  setMessage,
} from "../../redux/user/user.actions";
import { Link } from "react-router-dom";

const Dashboard = ({
  menu,
  user,
  token,
  fetchUserStart,
  setInvestData,
  setMessage,
}) => {
  window.scroll(0, 0);
  const [width, setWidth] = useState();
  const [loadBar, setLoadBar] = useState();
  const { wallet, investment } = user;
  const { plan, capital, returns, expire_at, is_active } = investment;
  const {
    balance,
    balance_total,
    referral_earnings,
    referral_earnings_total,
  } = wallet;
  const [days, setDays] = useState();
  const device = window.matchMedia("(max-width: 600px)");
  const daysRemaining = useCallback(() => {
    if (is_active) {
      const expDate = expire_at.split("-");
      const thisDate = new Date(Date.now());
      const expiredDate = new Date(
        expDate[0],
        expDate[1] - 1,
        expDate[2].split("T")[0]
      );
      const oneDay = 24 * 3600 * 1000; // hours*minutes*seconds*milliseconds
      const diffDays = Math.round(Math.abs((thisDate - expiredDate) / oneDay));
      // var timeDiff = Math.abs(thisDate.getTime() - expiredDate.getTime());
      // var diffDays = Math.ceil(timeDiff / (24 * 3600 * 1000));
      setDays(diffDays);
    } else {
      setDays(0);
    }
  }, [expire_at, is_active]);
  // Random component
  const Completed = () => 0;

  // Renderer callback with condition
  const renderer = ({ months, days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completed />;
    } else {
      // Render a countdown
      return (
        <span>
          {days}:{hours}:{minutes}:{seconds}
        </span>
      );
    }
  };
  useMemo(() => {
    daysRemaining();
  }, [daysRemaining]);
  useMemo(() => {
    setInvestData(null);
    setMessage(null);
  }, [setInvestData, setMessage]);
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
            <p>{investment.is_active ? plan + " Trading" : "No investment"}</p>
            <p>Days left: {days}</p>
            {/* <p>
              Time left:{" "}
              {user.investment ? (
                <Countdown date={new Date(expire_at)} renderer={renderer} />
              ) : (
                0
              )}
            </p> */}
            <div className="dashboard__content--box__list">
              <div>Capital</div>
              <div>Return</div>
              <div>USD {capital || 0}</div>
              <div>USD {returns || 0}</div>
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
  setInvestData: (data) => dispatch(setInvestData(data)),
  setMessage: (data) => dispatch(setMessage(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
