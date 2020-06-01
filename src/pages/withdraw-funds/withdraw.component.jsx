import React, { useState, useMemo, useEffect, useCallback } from "react";
import LoadingBar from "react-top-loading-bar";
import "./withdraw-funds.styles.scss";
import BitCoinImg from "../../assets/img/Bitcoin_80px.svg";
import Message from "../../components/message/message.component";
import { selectMenu } from "../../redux/ui/ui.selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import {
  selectCurrentUser,
  selectBitCoinInvoice,
  selectPopUp,
  selectMessage,
} from "../../redux/user/user.selector";
// import Pay from "./pay.component";
import {
  bitcoinWithdrawalStart,
  setMessage,
  setPopUp,
} from "../../redux/user/user.actions";
import Confirm from "./confirm.component";

const Withdraw = ({
  menu,
  user,
  bitcoinWithdrawalStart,
  bitCoinInvoice,
  popUp,
  setMessage,
  message,
  setPopUp,
}) => {
  const [width, setWidth] = useState();
  const device = window.matchMedia("(max-width: 600px)");
  const [loadBar, setLoadBar] = useState();
  // const [price, setPrice] = useState("");
  const [withdrawBtn, setWithdrawBtn] = useState("Withdraw");
  const match = useRouteMatch();
  const { path } = match;
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const history = useHistory();
  const [details, setDetails] = useState({
    amount: "",
    wallet_address: "",
    withdrawal_type: "",
    transaction_type: "btc",
  });

  const { amount, wallet_address, withdrawal_type, transaction_type } = details;

  const activeNav = useCallback(
    (nav) => {
      switch (nav || path) {
        case "/withdraw-funds/withdraw":
          history.push("/withdraw-funds/withdraw");
          setNav1("current");
          setNav2(null);
          break;
        case "/withdraw-funds/confirm":
          if (message) {
            history.push("/withdraw-funds/confirm");
            setNav2("current");
            setNav1(null);
          } else if (!message) {
            setNav1("current");
            setNav2(null);
          }
          break;
        default:
          setNav1("current");
          setNav2(null);
          return;
      }
    },
    [history, message, path]
  );

  useMemo(() => {
    window.scroll(0, 0);
  }, []);
  useMemo(() => {
    if (menu) device.matches ? setWidth("100%") : setWidth("93%");
    if (!menu)
      if (device.matches) {
        setWidth("90%");
      } else {
        setWidth(null);
      }
    if (popUp) {
      setTimeout(() => {
        setMessage(popUp.details);
        setPopUp(null);
        history.push("/withdraw-funds/confirm");
      }, 3000);
    }
  }, [device.matches, history, menu, popUp, setMessage, setPopUp]);

  useEffect(() => {
    setLoadBar(100);
    activeNav();
    // if (popUp) {
    //   setWithdrawBtn("Withdraw");
    //   console.log("gooda");
    // if (popUp.type === "success") {

    // }
  }, [activeNav]);

  const handleSubmit = async (event) => {
    setMessage(null);
    event.preventDefault();
    await bitcoinWithdrawalStart(
      amount,
      wallet_address,
      withdrawal_type,
      transaction_type
    );
    setDetails({
      amount: "",
      wallet_address: "",
      withdrawal_type: "",
      transaction_type: "btc",
    });
    setWithdrawBtn("Processing....");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    // setErrorMessage("");
    setDetails({ ...details, [name]: value });
  };

  return (
    <div className="withdraw" style={{ width: width }}>
      <LoadingBar
        progress={loadBar}
        height={3}
        color="linear-gradient(92deg, var(--secondary-color) 0%, var(--primary-color-2) 50%, var(--secondary-color-2) 100%)"
        onLoaderFinished={() => setLoadBar(0)}
      />
      {!user.is_email_confrim && <Message />}
      <div className="withdraw__title">
        <h1>Withdrawal Request</h1>
      </div>
      <div className="withdraw__link">
        <div className="steps">
          <ul>
            <li
              className={nav1}
              onClick={() => activeNav("/withdraw-funds/withdraw")}
            >
              <Link to="">Withdrawal Details</Link>
            </li>
            <li
              className={nav2}
              onClick={() => activeNav("/withdraw-funds/confirm")}
            >
              <Link to="#">Confirm Withdrawal</Link>
            </li>
          </ul>
        </div>
      </div>
      {path === "/withdraw-funds/withdraw" && (
        <div className="withdraw__content">
          <div className="withdraw__content__img">
            <img src={BitCoinImg} alt="" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="withdraw__content__form">
              <div className="withdraw__content__form--box">
                <div className="withdraw__content__form--box__title">
                  <p>Payment System</p>
                  <div
                    data-tooltip="Your system for payment"
                    data-tooltip-location="top"
                  >
                    i
                  </div>
                </div>
                <input
                  type="text"
                  value="₿ Bitcoin"
                  onChange={() => ""}
                  placeholder="(Min: 100)"
                />
              </div>
              <div className="withdraw__content__form--box">
                <div className="withdraw__content__form--box__title">
                  <p>Client Name</p>
                  <div data-tooltip="Your username" data-tooltip-location="top">
                    i
                  </div>
                </div>
                <input
                  type="text"
                  value={user.name}
                  onChange={() => ""}
                  placeholder="(Min: 100)"
                />
              </div>
              <div className="withdraw__content__form--box">
                <div className="withdraw__content__form--box__title">
                  <p>Region</p>
                  <div data-tooltip="Your username" data-tooltip-location="top">
                    i
                  </div>
                </div>
                <input
                  type="text"
                  value={user.country}
                  onChange={() => ""}
                  placeholder="(Min: 100)"
                />
              </div>
              <div className="withdraw__content__form--box">
                <div className="withdraw__content__form--box__title">
                  <p>Transaction Type</p>
                  <div
                    data-tooltip="Minimum amount is $10"
                    data-tooltip-location="top"
                  >
                    i
                  </div>
                </div>
                <input
                  type="text"
                  onChange={(e) => handleChange(e)}
                  value={transaction_type}
                  required
                />
              </div>

              <div className="withdraw__content__form--box">
                <div className="withdraw__content__form--box__title">
                  <p>Wallet Address</p>
                  <div
                    data-tooltip="Enter your BitCoin Wallet Address"
                    data-tooltip-location="top"
                  >
                    i
                  </div>
                </div>
                <input
                  type="text"
                  onChange={(e) => handleChange(e)}
                  id="wallet_address"
                  name="wallet_address"
                  value={wallet_address}
                  placeholder="BitCoin Wallet Address"
                  required
                />
              </div>

              <div className="withdraw__content__form--box">
                <div className="withdraw__content__form--box__title">
                  <p>Withdrawal Type</p>
                  <div
                    data-tooltip="Your type of withdrawal"
                    data-tooltip-location="top"
                  >
                    i
                  </div>
                </div>
                <select
                  className="form__input--box"
                  required
                  id="withdrawal_type"
                  name="withdrawal_type"
                  value={withdrawal_type}
                  onChange={(e) => handleChange(e)}
                >
                  <option disabled selected value="">
                    Select withdrawal type
                  </option>
                  <option value="balance">Earnings Balance</option>
                  <option value="referral_earnings">Referral Earnings</option>
                </select>
              </div>

              <div className="withdraw__content__form--box">
                <div className="withdraw__content__form--box__title">
                  <p>Amount</p>
                  <div
                    data-tooltip="Minimum amount is $10"
                    data-tooltip-location="top"
                  >
                    i
                  </div>
                </div>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  min="10"
                  onChange={(e) => handleChange(e)}
                  value={amount}
                  placeholder="(Min: $10)"
                  required
                />
              </div>
            </div>
            <div className="withdraw__content__text">
              <p>
                When carrying out non-trading operations between accounts with
                different withdraw currencies, a conversion will take place
                according to the Company exchange rates on the day the funds are
                credited to Fxcinvest account.
              </p>
            </div>
            <div className="withdraw__content__btn">
              <button type="submit">
                <p className="ripple1">{withdrawBtn}</p>
              </button>
            </div>
          </form>
        </div>
      )}
      {message && path === "/withdraw-funds/confirm" && <Confirm />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  menu: selectMenu,
  user: selectCurrentUser,
  bitCoinInvoice: selectBitCoinInvoice,
  popUp: selectPopUp,
  message: selectMessage,
});

const mapDispatchToProps = (dispatch) => ({
  bitcoinWithdrawalStart: (
    amount,
    wallet_address,
    withdrawal_type,
    transaction_type
  ) =>
    dispatch(
      bitcoinWithdrawalStart({
        amount,
        wallet_address,
        withdrawal_type,
        transaction_type,
      })
    ),
  setMessage: (message) => dispatch(setMessage(message)),
  setPopUp: (data) => dispatch(setPopUp(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Withdraw);
