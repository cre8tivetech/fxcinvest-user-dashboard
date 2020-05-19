import React, { useState, useMemo, useEffect } from "react";
import Layout from "../../components/layout/layout.component";
import "./internal-transfers.styles.scss";
import "../deposit-funds/deposit-funds.styles.scss";
import TransferImg from "../../assets/img/transfer-icon.svg";
import Message from "../../components/message/message.component";
import { selectMenu } from "../../redux/ui/ui.selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

const InternalTransfers = ({ menu }) => {
  window.scroll(0, 0);
  const [width, setWidth] = useState();
  const device = window.matchMedia("(max-width: 600px)");
  const memorizedValue = useMemo(() => {
    if (menu) device.matches ? setWidth("100%") : setWidth("93%");
    if (!menu)
      if (device.matches) {
        setWidth("90%");
      } else {
        setWidth(null);
      }
  }, [device.matches, menu]);
  useEffect(() => {}, [memorizedValue]);
  return (
    <Layout>
      <div className="internal-transfers" style={{ width: width }}>
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
              <p>Amount</p>
              <div
                data-tooltip="Please type a valid amount"
                data-tooltip-location="top"
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
                data-tooltip-location="top"
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

const mapStateToProps = createStructuredSelector({
  menu: selectMenu,
});
export default connect(mapStateToProps)(InternalTransfers);
