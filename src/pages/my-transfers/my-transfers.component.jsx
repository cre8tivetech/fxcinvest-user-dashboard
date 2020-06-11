import React, { useState, useEffect, useMemo } from "react";
import LoadingBar from "react-top-loading-bar";
import "./my-transfers.styles.scss";
import Message from "../../components/message/message.component";
import { connect } from "react-redux";
import { selectMenu } from "../../redux/ui/ui.selector";
import { createStructuredSelector } from "reselect";
import {
  selectCurrentUser,
  selectMyTransfers,
} from "../../redux/user/user.selector";
import { getTransfersStart } from "../../redux/user/user.actions";

const MyTransfers = ({ menu, user, getTransfersStart, my_transfers }) => {
  const [width, setWidth] = useState();
  const device = window.matchMedia("(max-width: 600px)");
  const [loadBar, setLoadBar] = useState();
  const [type, setType] = useState("");
  useMemo(() => {
    user && user.is_email_confrim && getTransfersStart("");
  }, [getTransfersStart, user]);
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
    setLoadBar(100);
  }, []);
  const createdAt = (data) => {
    const result = data.split("T");
    return result[0];
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    type === "all" && setType("");
    // setRegisterBtn("Registering....");
    getTransfersStart(type);
    // !refUser && (await signUpStart(email, name, password, country));
    //
    // setTimeout(() => {
    // }, 15000);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    // setMessage("");
    setType(value);
    console.log(type);
  };
  // ref_id / status / amount / currency / created_at
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
      <form className="my-transfers__type" onSubmit={handleSubmit}>
        <div className="my-transfers__type--box1">
          <p>Transfer Type</p>

          <select
            name="type"
            id="type"
            required
            value={type}
            onChange={handleChange}
          >
            <option value="all">Select All</option>
            <option value="?status=successful">Successful</option>
            <option value="?status=pending">Pending</option>
            <option value="?status=failed">Failed</option>
          </select>
        </div>
        <button type="submit" className="my-transfers__type--box4 ripple1">
          <div>
            <i className="fa fa-search"></i>
            <p>Search</p>
          </div>
        </button>
      </form>

      <div className="my-transfers__box">
        <h1>Deposits</h1>
        <div className="line1"></div>
        <div className="my-transfers__box--header">
          <div className="my-transfers__box--header__1">
            <p>Ref_ID</p>
          </div>
          <div className="my-transfers__box--header__2">
            <p>Status</p>
          </div>
          <div className="my-transfers__box--header__3">
            <p>Amount</p>
          </div>
          <div className="my-transfers__box--header__4">
            <p>Currency</p>
          </div>
          <div className="my-transfers__box--header__5">
            <p>Deposited_at</p>
          </div>
        </div>
        <div className="line2"></div>

        {my_transfers &&
          my_transfers.deposit.map((list, i) => (
            <div className="box-list">
              <div className="my-transfers__box--content">
                <div className="my-transfers__box--content__1">
                  <p>{list.ref_id}</p>
                </div>
                <div className="my-transfers__box--content__2">
                  <p>{list.status}</p>
                </div>
                <div className="my-transfers__box--content__3">
                  <p>${list.amount}</p>
                </div>
                <div className="my-transfers__box--content__4">
                  <p>{list.currency}</p>
                </div>
                <div className="my-transfers__box--content__5">
                  <p>{createdAt(list.created_at)}</p>
                </div>
              </div>
              <div className="line3"></div>
            </div>
          ))}
        {/* <div className="line3"></div> */}

        {user.is_email_confrim ? (
          <div className="box">
            {my_transfers && !my_transfers.deposit.length && (
              <p>You didn't make any deposit yet</p>
            )}
            {my_transfers && !my_transfers.deposit.length && (
              <div className="my-transfers__box--btn ripple1">Deposit Now</div>
            )}
          </div>
        ) : (
          <div
            data-tooltip="Confirm your email first"
            data-tooltip-location="right"
            className="my-transfers__box--btn comingSoon"
          >
            Deposit Now
          </div>
        )}
      </div>
      <div className="my-transfers__box">
        <h1>Withdrawals</h1>
        <div className="line1"></div>
        <div className="my-transfers__box--header">
          <div className="my-transfers__box--header__1">
            <p>Ref_ID</p>
          </div>
          <div className="my-transfers__box--header__2">
            <p>Status</p>
          </div>
          <div className="my-transfers__box--header__3">
            <p>Amount</p>
          </div>
          <div className="my-transfers__box--header__4">
            <p>Currency</p>
          </div>
          <div className="my-transfers__box--header__5">
            <p>Withdraw_at</p>
          </div>
        </div>
        <div className="line2"></div>

        {my_transfers &&
          my_transfers.withdrawal.length !== 0 &&
          my_transfers.withdrawal.map((list, i) => (
            <div className="box-list">
              <div className="my-transfers__box--content">
                <div className="my-transfers__box--content__1">
                  <p>{list.ref_id}</p>
                </div>
                <div className="my-transfers__box--content__2">
                  <p>{list.status}</p>
                </div>
                <div className="my-transfers__box--content__3">
                  <p>${list.amount}</p>
                </div>
                <div className="my-transfers__box--content__4">
                  <p>{list.currency}</p>
                </div>
                <div className="my-transfers__box--content__5">
                  <p>{createdAt(list.withdraw_at)}</p>
                </div>
              </div>
              <div className="line3"></div>
            </div>
          ))}
        {/* <div className="line3"></div> */}

        {user.is_email_confrim ? (
          <div className="box">
            {my_transfers && !my_transfers.withdrawal.length && (
              <p>You didn't make any withdrawal yet</p>
            )}
            {my_transfers && !my_transfers.withdrawal.length && (
              <div className="my-transfers__box--btn ripple1">Withdraw Now</div>
            )}
          </div>
        ) : (
          <div
            data-tooltip="Confirm your email first"
            data-tooltip-location="right"
            className="my-transfers__box--btn comingSoon"
          >
            Withdraw Now
          </div>
        )}
      </div>
      <div className="my-transfers__box">
        <h1>Internal transfers</h1>
        <div className="line1"></div>
        <div className="my-transfers__box--header">
          <div className="my-transfers__box--header__1">
            <p>Ref_ID</p>
          </div>
          <div className="my-transfers__box--header__2">
            <p>Status</p>
          </div>
          <div className="my-transfers__box--header__3">
            <p>Amount</p>
          </div>
          <div className="my-transfers__box--header__4">
            <p>Currency</p>
          </div>
          <div className="my-transfers__box--header__5">
            <p>Transferred_at</p>
          </div>
        </div>
        <div className="line2"></div>

        {my_transfers &&
          my_transfers.transfer.map((list, i) => (
            <div className="box-list">
              <div className="my-transfers__box--content">
                <div className="my-transfers__box--content__1">
                  <p>{list.ref_id}</p>
                </div>
                <div className="my-transfers__box--content__2">
                  <p>{list.status}</p>
                </div>
                <div className="my-transfers__box--content__3">
                  <p>${list.amount}</p>
                </div>
                <div className="my-transfers__box--content__4">
                  <p>{list.currency}</p>
                </div>
                <div className="my-transfers__box--content__5">
                  <p>{createdAt(list.transfered_at)}</p>
                </div>
              </div>
              <div className="line3"></div>
            </div>
          ))}
        {/* <div className="line3"></div> */}

        {user.is_email_confrim ? (
          <div className="box">
            {my_transfers && !my_transfers.transfer.length && (
              <p>You didn't make any transfer yet</p>
            )}
            {my_transfers && !my_transfers.transfer.length && (
              <div className="my-transfers__box--btn ripple1">Deposit Now</div>
            )}
          </div>
        ) : (
          <div
            data-tooltip="Confirm your email first"
            data-tooltip-location="right"
            className="my-transfers__box--btn comingSoon"
          >
            Transfer Now
          </div>
        )}
      </div>
      {/* <div className="my-transfers__type--box2">
          <p>From</p>
          <input type="date" name="" id="" />
        </div>
        <div className="my-transfers__type--box3">
          <p>To</p>
          <input type="date" name="" id="" />
        </div> */}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  menu: selectMenu,
  user: selectCurrentUser,
  my_transfers: selectMyTransfers,
});
const mapDispatchToProps = (dispatch) => ({
  getTransfersStart: (query) => dispatch(getTransfersStart(query)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MyTransfers);
