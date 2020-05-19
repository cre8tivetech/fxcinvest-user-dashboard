import React, { useState, useEffect, useMemo } from "react";
import "./my-transfers.styles.scss";
import Message from "../../components/message/message.component";
import Layout from "../../components/layout/layout.component";
import { connect } from "react-redux";
import { selectMenu } from "../../redux/ui/ui.selector";
import { createStructuredSelector } from "reselect";

const MyTransfers = ({ menu }) => {
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
      <div className="my-transfers" style={{ width: width }}>
        <Message />
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
    </Layout>
  );
};
const mapStateToProps = createStructuredSelector({
  menu: selectMenu,
});
export default connect(mapStateToProps)(MyTransfers);
