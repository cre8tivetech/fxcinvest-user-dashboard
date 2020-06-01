import React, { useState, useMemo } from "react";
import "./withdraw-funds.styles.scss";
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
import { useHistory } from "react-router-dom";

const Confirm = ({ menu, user, setMessage, message }) => {
  const history = useHistory();
  const [width, setWidth] = useState();
  const device = window.matchMedia("(max-width: 600px)");

  const { name, country, email } = user;
  const { amount, btc_amount, wallet_address } = message;
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
      }, 2000);
    !message && history.push("/withdraw-funds/withdraw");
  }, [device.matches, history, isLoading, menu, message]);

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
              <h1>Withdrawal stats</h1>
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
                <p>Payment Gateway</p>
                <p>₿ BTC</p>
              </div>
              <div className="confirm__box__contents--data__content">
                <p>Wallet Address</p>
                <p>{wallet_address}</p>
              </div>
              <div className="confirm__box__contents--data__content">
                <p>Amount in Dollars</p>
                <p>${thousands_separators(amount)}</p>
              </div>
              <div className="confirm__box__contents--data__content">
                <p>Amount in BitCoin</p>
                <p>{thousands_separators(btc_amount)}</p>
              </div>
              <div className="confirm__box__contents--data__content">
                <p>Processing Time</p>
                <p>24 Hours</p>
              </div>
            </div>
          </div>
          <div className="confirm__box__data">
            <img src={SuccessImg} alt="" />
            <h1>Withdrawal Request Was Successful</h1>
            <p>Payment would be approved within the next 24 hours</p>
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
