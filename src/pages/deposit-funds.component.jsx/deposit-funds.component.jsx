import React from "react";
import "./deposit-funds.styles.scss";
import Layout from "../../components/layout/layout.component";
import Message from "../../components/message/message.component";
import VisaImg from "../../assets/img/visa_1.svg";
import MasterImg from "../../assets/img/mastercard-icon.svg";
import BitcoinImg from "../../assets/img/Bitcoin_80px.svg";

const DepositFunds = () => {
  return (
    <Layout>
      <div className="deposit-funds">
        <Message />
        <div className="deposit-funds__title">
          <h1>My Transfers</h1>
        </div>
        <div className="deposit-funds__box">
          <h1>Credit / Debit cards</h1>
          <div className="line1"></div>
          <div className="deposit-funds__box--header">
            <div className="deposit-funds__box--header__1">
              <p>Transfer Method</p>
            </div>
            <div className="deposit-funds__box--header__2">
              <p>Currency</p>
            </div>
            <div className="deposit-funds__box--header__3">
              <p>Processing Time</p>
            </div>
            <div className="deposit-funds__box--header__4"></div>
          </div>

          <div className="line2"></div>

          <div className="deposit-funds__box--content">
            <div className="deposit-funds__box--content__1">
              <img src={VisaImg} alt="" />
              <p>Visa</p>
            </div>
            <div className="deposit-funds__box--content__2">
              <p>USD</p>
            </div>
            <div className="deposit-funds__box--content__3">
              <p>Instant</p>
            </div>
            <div className="deposit-funds__box--content__4 ripple1">
              <p>Deposit</p>
            </div>
          </div>

          <div className="line3"></div>

          <div className="deposit-funds__box--content">
            <div className="deposit-funds__box--content__1">
              <img src={MasterImg} alt="" />
              <p>Master</p>
            </div>
            <div className="deposit-funds__box--content__2">
              <p>USD</p>
            </div>
            <div className="deposit-funds__box--content__3">
              <p>Instant</p>
            </div>
            <div className="deposit-funds__box--content__4 ripple1">
              <p>Deposit</p>
            </div>
          </div>
        </div>

        <div className="deposit-funds__box">
          <h1>E-Wallets</h1>
          <div className="line1"></div>
          <div className="deposit-funds__box--header">
            <div className="deposit-funds__box--header__1">
              <p>Transfer Method</p>
            </div>
            <div className="deposit-funds__box--header__2">
              <p>Currency</p>
            </div>
            <div className="deposit-funds__box--header__3">
              <p>Processing Time</p>
            </div>
            <div className="deposit-funds__box--header__4"></div>
          </div>

          <div className="line2"></div>

          <div className="deposit-funds__box--content">
            <div className="deposit-funds__box--content__1">
              <img src={BitcoinImg} alt="" />
              <p>Bitcoin</p>
            </div>
            <div className="deposit-funds__box--content__2">
              <p>BTC</p>
            </div>
            <div className="deposit-funds__box--content__3">
              <p>Instant</p>
            </div>
            <div className="deposit-funds__box--content__4 ripple1">
              <p>Deposit</p>
            </div>
          </div>
        </div>
        <div className="deposit-funds__bottom">
          <p>
            Deposits are processed instantly in case there is no need for
            additional verification.
          </p>
          <p>
            FXCINVEST is not liable for any transfer delays you may experience
            due to a disruption of service in the system of the payment
            processor.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default DepositFunds;
