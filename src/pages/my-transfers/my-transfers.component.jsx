import React from "react";
import "./my-transfers.styles.scss";
import Message from "../../components/message/message.component";
import Layout from "../../components/layout/layout.component";

const MyTransfers = () => {
  return (
    <Layout>
      <div className="my-transfers">
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
export default MyTransfers;
