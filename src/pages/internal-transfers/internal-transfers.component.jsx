import React, { useState, useMemo, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";
import "./internal-transfers.styles.scss";
import "../deposit-funds/deposit-funds.styles.scss";
import TransferImg from "../../assets/img/transfer-icon.svg";
import Message from "../../components/message/message.component";
import { selectMenu } from "../../redux/ui/ui.selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCurrentUser, selectPopUp } from "../../redux/user/user.selector";
import { transferStart } from "../../redux/user/user.actions";

const InternalTransfers = ({ menu, user, transferStart, popUp }) => {
  window.scroll(0, 0);
  const [width, setWidth] = useState();
  const device = window.matchMedia("(max-width: 600px)");
  const [loadBar, setLoadBar] = useState();
  const [confirmBtn, setConfirmBtn] = useState("Confirm");
  const [transferCredentials, setTransferCredentials] = useState({
    amount: "",
    username: "",
  });
  const { amount, username } = transferCredentials;
  useMemo(() => {
    if (menu) device.matches ? setWidth("100%") : setWidth("93%");
    if (!menu)
      if (device.matches) {
        setWidth("90%");
      } else {
        setWidth(null);
      }
    if (popUp) {
      setConfirmBtn("Transferred!");
    } else {
      setConfirmBtn("Confirm");
    }
  }, [device.matches, menu, popUp]);
  useEffect(() => {
    setLoadBar(100);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setTransferCredentials({
      amount: "",
      username: "",
    });
    setConfirmBtn("Transferring....");
    await transferStart(amount, username);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    // setErrorMessage("");
    setTransferCredentials({ ...transferCredentials, [name]: value });
  };
  return (
    <div className="internal-transfers" style={{ width: width }}>
      <LoadingBar
        progress={loadBar}
        height={3}
        color="linear-gradient(92deg, var(--secondary-color) 0%, var(--primary-color-2) 50%, var(--secondary-color-2) 100%)"
        onLoaderFinished={() => setLoadBar(0)}
      />
      {!user.is_email_confrim && <Message />}
      <div className="internal-transfers__title">
        <h1>Internal Transfer Request</h1>
      </div>
      <div className="internal-transfers__img">
        <img src={TransferImg} alt="" />
      </div>
      <form className="internal-transfers__form" onSubmit={handleSubmit}>
        {/* <div> */}
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
          <input
            type="number"
            name="amount"
            onChange={(e) => handleChange(e)}
            value={amount}
            id="amount"
            placeholder="25,000,000"
            required
          />
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
            type="text"
            name="username"
            id="username"
            onChange={(e) => handleChange(e)}
            value={username}
            placeholder="Username"
            required
          />
        </div>
        {/* </div> */}

        <div className="internal-transfers__text">
          <p>
            When carrying out non-trading operations between accounts with
            different deposit currencies, a conversion will take place according
            to the Company exchange rates on the day the funds are credited to
            Fxcinvest account.
          </p>
        </div>
        <div className="internal-transfers__btn">
          {user.is_email_confrim ? (
            <button type="submit">
              <p className="ripple1">{confirmBtn}</p>
            </button>
          ) : (
            <div
              data-tooltip="Confirm your email first"
              data-tooltip-location="right"
            >
              <button>
                <p className="comingSoon">Confirm</p>
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  menu: selectMenu,
  user: selectCurrentUser,
  popUp: selectPopUp,
});
const mapDispatchToProps = (dispatch) => ({
  transferStart: (amount, username) =>
    dispatch(transferStart({ amount, username })),
});
export default connect(mapStateToProps, mapDispatchToProps)(InternalTransfers);
