import React, { useState, useMemo, useEffect, useCallback } from "react";
import "./deposit-funds.styles.scss";
import { useRouteMatch } from "react-router-dom";
import {
  selectCurrentUser,
  selectBitCoinInvoice,
} from "../../redux/user/user.selector";
import { selectMenu } from "../../redux/ui/ui.selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { useRef } from "react";
import BitCoinImg from "../../assets/img/pay_now_64.png";
import BitCoinLoaderImg from "../../assets/img/BitcoinLoader.gif";
import BitCoinSuccessImg from "../../assets/img/BitcoinSuccess.webp";
// import Loader from "../../assets/img/"
import { createBitCoinInvoiceStart } from "../../redux/user/user.actions";

const Pay = ({ menu, user, bitCoinInvoice }) => {
  const [width, setWidth] = useState();
  const device = window.matchMedia("(max-width: 600px)");
  const { address, price_in_btc, amount } = bitCoinInvoice;
  const { name, country, email } = user;
  const [loadBar, setLoadBar] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // const match = useRouteMatch();
  const ajaxSrc = useRef(null);
  const bitSrc = useRef(null);
  const ajax = document.createElement("script");
  const bit = document.createElement("script");

  const pay = (e) => {
    e.preventDefault();
    const name = e.currentTarget.parentElement;
    console.log(name);
    // name.className = "hide";
  };
  function thousands_separators(num) {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }
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
    isLoading &&
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
  }, [device.matches, isLoading, menu]);
  useEffect(() => {
    ajax.src =
      "https://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js";
    bit.src = "https://blockchain.info/Resources/js/pay-now-button.js";
    ajaxSrc.current.appendChild(ajax);
    bitSrc.current.appendChild(bit);
    setLoadBar(100);
  }, [ajax, bit]);

  return (
    <div className="pay" style={{ width: width }}>
      {isLoading ? (
        <div ref={ajaxSrc}>
          <img
            ref={bitSrc}
            src="https://blockchain.info/Resources/loading-large.gif"
            alt=""
          />
        </div>
      ) : (
        <div className="pay__box">
          <div className="pay__box__contents">
            <div className="pay__box__contents--title">
              <h1>Payment Transfer</h1>
            </div>
            <div className="pay__box--data">
              <div className="pay__box__contents--data__content">
                <p>Name</p>
                <p>{name}</p>
              </div>
              <div className="pay__box__contents--data__content">
                <p>Email</p>
                <p>{email}</p>
              </div>
              <div className="pay__box__contents--data__content">
                <p>Country</p>
                <p>{country}</p>
              </div>
              <div className="pay__box__contents--data__content">
                <p>Payment Gateway</p>
                <p>BTC</p>
              </div>
              <div className="pay__box__contents--data__content">
                <p>Amount in Dollars</p>
                <p>${thousands_separators(amount)}</p>
              </div>
              <div className="pay__box__contents--data__content">
                <p>Amount in BitCoin</p>
                <p>{thousands_separators(price_in_btc)}</p>
              </div>
              <div className="pay__box__contents--data__content">
                <p>Processing Time</p>
                <p>24 Hours</p>
              </div>
            </div>
          </div>
          <div
            ref={ajaxSrc}
            style={{
              fontSize: "16px",
              margin: "0 auto",
              width: "40rem",
              // display: "none",
            }}
            className="blockchain-btn pay__box__btn"
            data-address={"1933phfhK3ZgFQNLGSDXvqCn32k2buXY8a"}
            // data-address={address}
            data-shared="false"
          >
            <div ref={bitSrc}>
              <div
                id="pay"
                className="blockchain stage-begin"
                style={{ display: "none" }}
                onClick={(e) => pay(e)}
              >
                <img src={BitCoinImg} alt="" />
                {/* <p id="pay_btn">Pay Now</p> */}
              </div>

              <div
                className="blockchain stage-loading"
                style={{ textAlign: "center" }}
              >
                <img src={BitCoinLoaderImg} alt="" />
              </div>
              <div
                style={{ display: "none" }}
                className="blockchain stage-ready"
              >
                <p align="center">
                  Please Pay To This Bitcoin Address: <b>[[address]]</b>
                </p>
                <p align="center" className="qr-code"></p>
              </div>
              <div
                style={{ display: "none" }}
                className="blockchain stage-paid"
              >
                <img src={BitCoinSuccessImg} alt="" />
                <h1>Transaction was successful</h1>
                <p>
                  Payment of <b>[[value]] BTC</b> Received. Thank You.
                </p>
              </div>
              <div
                style={{ display: "none" }}
                className="blockchain stage-error"
              >
                <font color="red">[[error]]</font>
              </div>
            </div>
          </div>
        </div>
      )}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Pay);
