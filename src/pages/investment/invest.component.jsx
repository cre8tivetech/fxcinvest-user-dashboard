import React, { useState, useMemo, useEffect, useCallback } from "react";
import LoadingBar from "react-top-loading-bar";
import SEO from "../../components/seo/seo.component";
import "./investment.styles.scss";
import InvestImg from "../../assets/img/invest.svg";
import Message from "../../components/message/message.component";
import { selectMenu } from "../../redux/ui/ui.selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {
  Link,
  useRouteMatch,
  useHistory,
  withRouter,
  useLocation,
} from "react-router-dom";
import {
  selectCurrentUser,
  selectBitCoinInvoice,
  selectPopUp,
  selectMessage,
  selectInvestData,
} from "../../redux/user/user.selector";
// import Pay from "./pay.component";
import {
  setMessage,
  setPopUp,
  investStart,
} from "../../redux/user/user.actions";
import Confirm from "./confirm.component";

const Invest = ({
  menu,
  user,
  popUp,
  setMessage,
  message,
  setPopUp,
  investStart,
  investData,
}) => {
  const [width, setWidth] = useState();
  const device = window.matchMedia("(max-width: 600px)");
  const [loadBar, setLoadBar] = useState();
  const [investBtn, setInvestBtn] = useState("Invest");
  const match = useRouteMatch();
  const { path } = match;
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const history = useHistory();
  const { name, minimum, maximum, days, percentage } = investData;
  const [details, setDetails] = useState({
    plan: name,
    amount: "",
  });
  const { plan, amount } = details;

  const activeNav = useCallback(
    (nav) => {
      switch (nav || path) {
        case "/investment/invest":
          history.push("/investment/invest");
          setNav1("current");
          setNav2(null);
          break;
        case "/investment/confirm":
          if (message) {
            history.push("/investment/confirm");
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
        popUp.type === "success" && history.push("/investment/confirm");
      }, 5000);
    }
  }, [device.matches, history, menu, popUp, setMessage, setPopUp]);

  useEffect(() => {
    setLoadBar(100);
    activeNav();
    if (popUp) {
      setInvestBtn("Invest");
    }
  }, [activeNav, popUp]);

  const handleSubmit = async (event) => {
    setMessage(null);
    event.preventDefault();
    await investStart(plan, amount);
    setDetails({
      plan: plan,
      amount: "",
    });
    setInvestBtn("Processing....");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetails({ ...details, [name]: value });
  };

  return (
    <div className="invest" style={{ width: width }}>
      <SEO title="Select investment plan" />
      <LoadingBar
        progress={loadBar}
        height={3}
        color="linear-gradient(92deg, var(--secondary-color) 0%, var(--primary-color-2) 50%, var(--secondary-color-2) 100%)"
        onLoaderFinished={() => setLoadBar(0)}
      />
      {!user.is_email_confrim && <Message />}
      <div className="invest__title">
        <h1>Investment Request</h1>
      </div>
      <div className="invest__link">
        <div className="steps">
          <ul>
            <li
              className={nav1}
              onClick={() => activeNav("/investment/invest")}
            >
              <Link to="">Investment Details</Link>
            </li>
            <li
              className={nav2}
              onClick={() => activeNav("/investment/confirm")}
            >
              <Link to="#">Confirm Investment</Link>
            </li>
          </ul>
        </div>
      </div>
      {path === "/investment/invest" && (
        <div className="invest__content">
          <div className="invest__content__img">
            <img src={InvestImg} alt="" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="invest__content__form">
              <div className="invest__content__form--box">
                <div className="invest__content__form--box__title">
                  <p>Plan Name</p>
                </div>
                <input type="text" disabled value={plan} />
              </div>
              <div className="invest__content__form--box">
                <div className="invest__content__form--box__title">
                  <p>Minimum Amount</p>
                </div>
                <input
                  type="text"
                  disabled
                  value={"$" + minimum}
                  onChange={() => ""}
                />
              </div>
              <div className="invest__content__form--box">
                <div className="invest__content__form--box__title">
                  <p>Maximum Amount</p>
                </div>
                <input type="text" disabled value={"$" + maximum} />
              </div>
              <div className="invest__content__form--box">
                <div className="invest__content__form--box__title">
                  <p>Days Of Maturity</p>
                </div>
                <input type="text" disabled value={days + " days"} />
              </div>
              <div className="invest__content__form--box">
                <div className="invest__content__form--box__title">
                  <p>Percentage Income</p>
                </div>
                <input type="text" value={percentage + "%"} disabled />
              </div>
              <div className="invest__content__form--box">
                <div className="invest__content__form--box__title">
                  <p>Amount</p>
                  <div
                    data-tooltip={`Minimum amount is $${minimum}, Maximum amount is $${maximum}`}
                    data-tooltip-location="top"
                  >
                    i
                  </div>
                </div>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  min={minimum}
                  max={maximum}
                  onChange={(e) => handleChange(e)}
                  value={amount}
                  placeholder={`(Min: $${minimum}, Max: $${maximum})`}
                  required
                />
              </div>
            </div>
            <div className="invest__content__text"></div>
            <div className="invest__content__btn">
              <button type="submit">
                <p className="ripple1">{investBtn}</p>
              </button>
            </div>
          </form>
        </div>
      )}
      {message && path === "/investment/confirm" && <Confirm />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  menu: selectMenu,
  user: selectCurrentUser,
  bitCoinInvoice: selectBitCoinInvoice,
  popUp: selectPopUp,
  message: selectMessage,
  investData: selectInvestData,
});

const mapDispatchToProps = (dispatch) => ({
  investStart: (plan, amount) =>
    dispatch(
      investStart({
        plan,
        amount,
      })
    ),
  setMessage: (message) => dispatch(setMessage(message)),
  setPopUp: (data) => dispatch(setPopUp(data)),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Invest));
