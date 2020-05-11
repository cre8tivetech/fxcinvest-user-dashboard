import React from "react";
import "./withdraw-funds.styles.scss";
import Layout from "../../components/layout/layout.component";
import Message from "../../components/message/message.component";
import BankTransferImg from "../../assets/img/bank_transfer.svg";
import BitcoinImg from "../../assets/img/Bitcoin_80px.svg";

const WithdrawFunds = () => {
  window.scroll(0, 0);
  return (
    <Layout>
      <div className="withdraw-funds">
        <Message />
        <div className="withdraw-funds__title">
          <h1>My Transfers</h1>
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
            <div className="withdraw-funds__box--content__4 ripple1">
              <p>Withdraw</p>
            </div>
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
            <div className="withdraw-funds__box--content__4 ripple1">
              <p>Withdraw</p>
            </div>
          </div>
        </div>
        <div className="withdraw-funds__bottom">
          <p>
            All Back office transfers are processed during standard business
            hours, i.e. 02:00-20:00 GMT +2 (GMT+3 during DST), Mon-Fri.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default WithdrawFunds;
