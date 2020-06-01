import React, { useState, useMemo, useCallback } from "react";
import "./investment.styles.scss";
import {
  selectCurrentUser,
  selectMessage,
} from "../../redux/user/user.selector";
import { selectMenu } from "../../redux/ui/ui.selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import LoadingImg from "../../assets/img/loading-large.gif";
import SuccessImg from "../../assets/img/success.png";
import {
  createBitCoinInvoiceStart,
  setMessage,
} from "../../redux/user/user.actions";
import { useHistory, Link } from "react-router-dom";

const Confirm = ({ menu, user, setMessage, message }) => {
  const history = useHistory();
  const [width, setWidth] = useState();
  const device = window.matchMedia("(max-width: 600px)");

  const { name, country, email } = user;
  const { capital, expire_at, returns, plan } = message;
  const [days, setDays] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // const match = useRouteMatch();
  function thousands_separators(num) {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }
  useMemo(() => {
    window.scroll(0, 0);
  }, []);
  const daysRemaining = useCallback(() => {
    if (message) {
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
  }, [expire_at, message]);
  useMemo(() => {
    console.log(message);
    if (menu) device.matches ? setWidth("100%") : setWidth("93%");
    if (!menu)
      if (device.matches) {
        setWidth("90%");
      } else {
        setWidth(null);
      }
    isLoading &&
      setTimeout(() => {
        setIsLoading(false);
        daysRemaining();
      }, 2000);
    !message && history.push("/withdraw-funds/withdraw");
  }, [daysRemaining, device.matches, history, isLoading, menu, message]);

  return (
    <div className="confirm" style={{ width: width }}>
      {isLoading ? (
        <div className="loader">
          <img src={LoadingImg} alt="" />
        </div>
      ) : (
        <div className="confirm__box">
          <div className="confirm__box__contents">
            <div className="confirm__box__contents--title">
              <h1>Investment stats</h1>
            </div>
            <div className="confirm__box--data">
              <div className="confirm__box__contents--data__content">
                <p>Name</p>
                <p>{name}</p>
              </div>
              <div className="confirm__box__contents--data__content">
                <p>Email</p>
                <p>{email}</p>
              </div>
              <div className="confirm__box__contents--data__content">
                <p>Country</p>
                <p>{country}</p>
              </div>
              <div className="confirm__box__contents--data__content">
                <p>Investment Plan</p>
                <p>{plan}</p>
              </div>
              <div className="confirm__box__contents--data__content">
                <p>Amount Invested</p>
                <p>${thousands_separators(capital)}</p>
              </div>
              <div className="confirm__box__contents--data__content">
                <p>Amount To Return</p>
                <p>${thousands_separators(returns)}</p>
              </div>
              <div className="confirm__box__contents--data__content">
                <p>Days Left</p>
                <p>{days} days</p>
              </div>
            </div>
          </div>
          <div className="confirm__box__data">
            <img src={SuccessImg} alt="" />
            <h1>Your Investment Was Successful</h1>
            <Link to="/">
              <button>
                <h4>
                  Go to dashboard <i className="fad fa-tachometer"></i>
                </h4>
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  menu: selectMenu,
  user: selectCurrentUser,
  message: selectMessage,
});

const mapDispatchToProps = (dispatch) => ({
  createBitCoinInvoiceStart: (amount) =>
    dispatch(createBitCoinInvoiceStart(amount)),
  setMessage: (message) => dispatch(setMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Confirm);
