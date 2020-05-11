import React from "react";
import Layout from "../../components/layout/layout.component";
import "./internal-transfers.styles.scss";
import TransferImg from "../../assets/img/transfer-icon.svg";
import Message from "../../components/message/message.component";

const InternalTransfers = () => {
  window.scroll(0, 0);
  return (
    <Layout>
      <div className="internal-transfers">
        <Message />
        <div className="internal-transfers__title">
          <h1>Internal Transfer Request</h1>
        </div>
        <div className="internal-transfers__img">
          <img src={TransferImg} alt="" />
        </div>
        <div className="internal-transfers__form">
          <div className="internal-transfers__form--box">
            <div className="internal-transfers__form--box__title">
              <p
                data-tooltip="Please type a validt"
                data-tooltip-location="left"
              >
                Amount
              </p>
              <div
                data-tooltip="Please type a valid amount"
                data-tooltip-location="right"
              >
                i
              </div>
            </div>
            <input type="number" name="" id="" placeholder="25,000,000" />
          </div>
          <div className="internal-transfers__form--box">
            <div className="internal-transfers__form--box__title">
              <p>Deposit to account</p>
              <div
                data-tooltip="Please type a valid account number"
                data-tooltip-location="right"
              >
                i
              </div>
            </div>
            <input
              type="number"
              name=""
              id=""
              placeholder="5323 8888 9999 7777"
            />
          </div>
        </div>
        <div className="internal-transfers__text">
          <p>
            When carrying out non-trading operations between accounts with
            different deposit currencies, a conversion will take place according
            to the Company exchange rates on the day the funds are credited to
            Fxcinvest account.
          </p>
        </div>
        <div className="internal-transfers__btn">
          <p className="ripple1">Confirm</p>
        </div>
      </div>
    </Layout>
  );
};

export default InternalTransfers;
