import React, { useState, useEffect, useMemo } from "react";
import LoadingBar from "react-top-loading-bar";
import "./my-transfers.styles.scss";
import Message from "../../components/message/message.component";
import { connect } from "react-redux";
import { selectMenu } from "../../redux/ui/ui.selector";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";

const MyTransfers = ({ menu, user }) => {
  window.scroll(0, 0);
  const [width, setWidth] = useState();
  const device = window.matchMedia("(max-width: 600px)");
  const [loadBar, setLoadBar] = useState();
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
    setLoadBar(100);
  }, []);
  return (
    <div className="my-transfers" style={{ width: width }}>
      <LoadingBar
        progress={loadBar}
        height={3}
        color="linear-gradient(92deg, var(--secondary-color) 0%, var(--primary-color-2) 50%, var(--secondary-color-2) 100%)"
        onLoaderFinished={() => setLoadBar(0)}
      />
      {!user.is_email_confrim && <Message />}
      <div className="my-transfers__title">
        <h1>My Transfers</h1>
      </div>
      <div className="my-transfers__type">
        <div className="my-transfers__type--box1">
          <p>Transfer Type</p>
          <select name="" id="">
            <option value="">Select All</option>
          </select>
        </div>
        <div className="my-transfers__type--box2">
          <p>From</p>
          <input type="date" name="" id="" />
        </div>
        <div className="my-transfers__type--box3">
          <p>To</p>
          <input type="date" name="" id="" />
        </div>
        <div className="my-transfers__type--box4 ripple1">
          <div>
            <i className="fa fa-search"></i>
            <p>Search</p>
          </div>
        </div>
      </div>
      <div className="my-transfers__box">
        <h1>Deposits</h1>
        <div className="line1"></div>
        {/* <div className="deposit-funds__box--header">
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
            <p>Visa</p>
          </div>
          <div className="deposit-funds__box--content__2">
            <p>USD</p>
          </div>
          <div className="deposit-funds__box--content__3">
            <p>Instant</p>
          </div>
          <div
            data-tooltip="Coming Soon"
            data-tooltip-location="top"
            className="deposit-funds__box--content__4"
          >
            <p>Deposit</p>
          </div>
        </div>

        <div className="line3"></div> */}
        <p>You didn't make any transfer yet</p>
        <div className="my-transfers__box--btn ripple1">Deposit Now</div>
      </div>
      <div className="my-transfers__box">
        <h1>Withdrawals</h1>
        <div className="line1"></div>
        <p>You didn't make any transfer yet</p>
      </div>
      <div className="my-transfers__box">
        <h1>Internal transfers</h1>
        <div className="line1"></div>
        <p>You didn't make any transfer yet</p>
      </div>
      <div className="my-transfers__withdrawals"></div>
      <div className="my-transfers__internal"></div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  menu: selectMenu,
  user: selectCurrentUser,
});
export default connect(mapStateToProps)(MyTransfers);
