import React, { useState, useMemo, useEffect, useCallback } from "react";
import LoadingBar from "react-top-loading-bar";
import SEO from "../../components/seo/seo.component";
import "./deposit-funds.styles.scss";
import BitCoinImg from "../../assets/img/Bitcoin_80px.svg";
import Message from "../../components/message/message.component";
import { selectMenu } from "../../redux/ui/ui.selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { Link, useRouteMatch, useHistory, useLocation } from "react-router-dom";
import Countdown from "react-countdown";
import {
  selectCurrentUser,
  selectBitCoinInvoice,
} from "../../redux/user/user.selector";
import Pay from "./pay.component";
import {
  createBitCoinInvoiceStart,
  expireBitCoinInvoice,
} from "../../redux/user/user.actions";

const Deposit = ({
  menu,
  user,
  createBitCoinInvoiceStart,
  bitCoinInvoice,
  expireBitCoinInvoice,
}) => {
  const [width, setWidth] = useState();
  const device = window.matchMedia("(max-width: 600px)");
  const [loadBar, setLoadBar] = useState();
  const [price, setPrice] = useState("");
  const [confirmBtn, setConfirmBtn] = useState("Confirm");
  const match = useRouteMatch();
  const { path } = match;
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const history = useHistory();
  const location = useLocation();
  const success = location.pathname === "/deposit-funds/pay/success";

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

    if (bitCoinInvoice && confirmBtn === "Processing....") {
      setTimeout(() => {
        history.push("/deposit-funds/pay");
        setConfirmBtn("Confirm");
      }, 5000);
    }
  }, [bitCoinInvoice, confirmBtn, device.matches, history, menu]);

  const activeNav = useCallback(
    (nav) => {
      switch (nav || path) {
        case "/deposit-funds/deposit":
          history.push("/deposit-funds/deposit");
          setNav1("current");
          setNav2(null);
          break;
        case "/deposit-funds/pay" || "/deposit-funds/pay/success":
          if (bitCoinInvoice) {
            history.push("/deposit-funds/pay");
            setNav2("current");
            setNav1(null);
          } else if (!bitCoinInvoice) {
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
    [bitCoinInvoice, history, path]
  );
  useEffect(() => {
    setLoadBar(100);
    activeNav();
    // let d = new Date();
    // let v = new Date();
    // v.setMinutes(d.getMinutes() + 30);
    // setDated(v);
  }, [activeNav]);

  // Random component
  // const Completed = () => null;

  // Renderer callback with condition
  // const renderer = ({ minutes, seconds, completed }) => {
  //   if (completed) {
  // Render a completed state
  // expireBitCoinInvoice();
  // history.push("/deposit-funds/deposit");
  // return <Completed />;
  // } else {
  // Render a countdown
  //     return (
  //       <span>
  //         {minutes}:{seconds}
  //       </span>
  //     );
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createBitCoinInvoiceStart(price);
    setPrice("");
    setConfirmBtn("Processing....");
  };

  const handleChange = (event) => {
    const { value } = event.target;
    // setErrorMessage("");
    setPrice(value);
  };

  return (
    <div className="deposit" style={{ width: width }}>
      <SEO title="Deposit Funds" />
      <LoadingBar
        progress={loadBar}
        height={3}
        color="linear-gradient(92deg, var(--secondary-color) 0%, var(--primary-color-2) 50%, var(--secondary-color-2) 100%)"
        onLoaderFinished={() => setLoadBar(0)}
      />
      {!user.is_email_confrim && <Message />}
      {!success && (
        <div className="deposit__title">
          <h1>Deposit Request</h1>
          {/* {bitCoinInvoice ? (
          <div>
            <p>
              <b>
                <Countdown
                  date={new Date(bitCoinInvoice.expire)}
                  renderer={renderer}
                />
              </b>{" "}
              Minutes Remaining for Wallet Address To Expire
            </p>
          </div>
        ) : null} */}
        </div>
      )}
      {!success && (
        <div className="deposit__link">
          <div className="steps">
            <ul>
              <li
                className={nav1}
                onClick={() => activeNav("/deposit-funds/deposit")}
              >
                <Link to="">Transfer Details</Link>
              </li>
              <li
                className={nav2}
                onClick={() => activeNav("/deposit-funds/pay")}
              >
                <Link to="#">Confirm Transfer</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      {path === "/deposit-funds/deposit" && (
        <div className="deposit__content">
          <div className="deposit__content__img">
            <img src={BitCoinImg} alt="" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="deposit__content__form">
              <div className="deposit__content__form--box">
                <div className="deposit__content__form--box__title">
                  <p>Payment System</p>
                </div>
                <input
                  type="text"
                  value="Bitcoin"
                  disabled
                  placeholder="(Min: 100)"
                />
              </div>
              <div className="deposit__content__form--box">
                <div className="deposit__content__form--box__title">
                  <p>Currency</p>
                </div>
                <input
                  type="text"
                  value="$ USD"
                  disabled
                  placeholder="(Min: 100)"
                />
              </div>
              <div className="deposit__content__form--box">
                <div className="deposit__content__form--box__title">
                  <p>Client Name</p>
                </div>
                <input
                  type="text"
                  value={user.name}
                  disabled
                  placeholder="(Min: 100)"
                />
              </div>
              <div className="deposit__content__form--box">
                <div className="deposit__content__form--box__title">
                  <p>Region</p>
                </div>
                <input
                  type="text"
                  value={user.country}
                  disabled
                  placeholder="(Min: 100)"
                />
              </div>
              <div className="deposit__content__form--box">
                <div className="deposit__content__form--box__title">
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
                  min="10"
                  onChange={(e) => handleChange(e)}
                  value={price}
                  placeholder="(Min: $10)"
                  required
                />
              </div>
            </div>
            <div className="deposit__content__text">
              <p>
                When carrying out non-trading operations between accounts with
                different deposit currencies, a conversion will take place
                according to the Company exchange rates on the day the funds are
                credited to DHP BTC account.
              </p>
            </div>
            <div className="deposit__content__btn">
              <button type="submit">
                <p className="ripple1">{confirmBtn}</p>
              </button>
            </div>
          </form>
        </div>
      )}
      {(bitCoinInvoice && path === "/deposit-funds/pay" && <Pay />) ||
        (bitCoinInvoice && path === "/deposit-funds/pay/success" && <Pay />)}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  menu: selectMenu,
  user: selectCurrentUser,
  bitCoinInvoice: selectBitCoinInvoice,
});

const mapDispatchToProps = (dispatch) => ({
  createBitCoinInvoiceStart: (amount) =>
    dispatch(createBitCoinInvoiceStart(amount)),
  expireBitCoinInvoice: () => dispatch(expireBitCoinInvoice()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Deposit);
