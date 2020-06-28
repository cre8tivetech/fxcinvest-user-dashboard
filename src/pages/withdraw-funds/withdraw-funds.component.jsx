import React, { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import SEO from "../../components/seo/seo.component";
import "./withdraw-funds.styles.scss";
import Message from "../../components/message/message.component";
import BankTransferImg from "../../assets/img/bank_transfer.svg";
import BitcoinImg from "../../assets/img/Bitcoin_80px.svg";
import { useMemo } from "react";
import { selectMenu } from "../../redux/ui/ui.selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { setMessage } from "../../redux/user/user.actions";

const WithdrawFunds = ({ menu, user, setMessage }) => {
  const [width, setWidth] = useState();
  const device = window.matchMedia("(max-width: 600px)");
  const [loadBar, setLoadBar] = useState();
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
  }, [device.matches, menu]);
  useEffect(() => {
    setMessage(null);
    setLoadBar(100);
  }, [setMessage]);

  return (
    <div className="withdraw-funds" style={{ width: width }}>
      <SEO title="Withdraw Funds" />
      <LoadingBar
        progress={loadBar}
        height={3}
        color="linear-gradient(92deg, var(--secondary-color) 0%, var(--primary-color-2) 50%, var(--secondary-color-2) 100%)"
        onLoaderFinished={() => setLoadBar(0)}
      />
      {!user.is_email_confrim && <Message />}
      <div className="withdraw-funds__title">
        <h1>Withdraw Funds</h1>
      </div>
      <div className="withdraw-funds__box">
        <h1>Credit / Debit cards</h1>
        <div className="line1"></div>
        <div className="withdraw-funds__box--header">
          <div className="withdraw-funds__box--header__1">
            <p>Transfer Method</p>
          </div>
          <div className="withdraw-funds__box--header__2">
            <p>Currency</p>
          </div>
          <div className="withdraw-funds__box--header__3">
            <p>Processing Time</p>
          </div>
          <div className="withdraw-funds__box--header__4"></div>
        </div>

        <div className="line2"></div>

        <div className="withdraw-funds__box--content">
          <div className="withdraw-funds__box--content__1">
            <img src={BankTransferImg} alt="" />
            <p>Bank wire transfer</p>
          </div>
          <div className="withdraw-funds__box--content__2">
            <p>USD</p>
          </div>
          <div className="withdraw-funds__box--content__3">
            <p>24 hours</p>
          </div>
          {user.is_email_confrim ? (
            <div
              data-tooltip="Coming soon"
              data-tooltip-location="top"
              className="withdraw-funds__box--content__4 comingSoon"
            >
              <p>Withdraw</p>
            </div>
          ) : (
            <div
              data-tooltip="Confirm your email first"
              data-tooltip-location="left"
              className="withdraw-funds__box--content__4 comingSoon"
            >
              <p>Withdraw</p>
            </div>
          )}
        </div>
        <div className="line3"></div>
      </div>

      <div className="withdraw-funds__box">
        <h1>E-Wallets</h1>
        <div className="line1"></div>
        <div className="withdraw-funds__box--header">
          <div className="withdraw-funds__box--header__1">
            <p>Transfer Method</p>
          </div>
          <div className="withdraw-funds__box--header__2">
            <p>Currency</p>
          </div>
          <div className="withdraw-funds__box--header__3">
            <p>Processing Time</p>
          </div>
          <div className="withdraw-funds__box--header__4"></div>
        </div>

        <div className="line2"></div>

        <div className="withdraw-funds__box--content">
          <div className="withdraw-funds__box--content__1">
            <img src={BitcoinImg} alt="" />
            <p>Bitcoin</p>
          </div>
          <div className="withdraw-funds__box--content__2">
            <p>BTC</p>
          </div>
          <div className="withdraw-funds__box--content__3">
            <p>24 hours</p>
          </div>
          {user.is_email_confrim ? (
            <Link
              to="/withdraw-funds/withdraw"
              className="withdraw-funds__box--content__4 ripple1"
            >
              <p>Withdraw</p>
            </Link>
          ) : (
            <div
              data-tooltip="Confirm your email first"
              data-tooltip-location="left"
              className="withdraw-funds__box--content__4 comingSoon"
            >
              <p>Withdraw</p>
            </div>
          )}
        </div>
      </div>
      <div className="withdraw-funds__bottom">
        <p>
          All Back office transfers are processed during standard business
          hours, i.e. 02:00-20:00 GMT +2 (GMT+3 during DST), Mon-Fri.
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  menu: selectMenu,
  user: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setMessage: (message) => dispatch(setMessage(message)),
});
export default connect(mapStateToProps, mapDispatchToProps)(WithdrawFunds);
