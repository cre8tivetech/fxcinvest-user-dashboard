import React, { useEffect } from "react";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Countdown from "react-countdown";
import "./countdowns.styles.scss";
const CountDowns = ({ user }) => {
  const Completed = () => (
    <p style={{ color: "var(--primary-color)" }}>User can now Invest</p>
  );
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // history.push("/deposit-funds/deposit");
      return <Completed />;
    } else {
      // Render a countdown
      return (
        <span>
          {days !== 0 && `${days}:`}
          {hours !== 0 && `${hours}:`}
          {minutes !== 0 && `${minutes}:`}
          {seconds !== 0 && `${seconds}`}
        </span>
      );
    }
  };
  useEffect(() => {}, [user]);

  if (user)
    if (user.investment.expire_at) {
      return (
        <div className="countdowns">
          <p>
            <b>Investment Time Left:</b>
          </p>
          <p>
            <b>
              <Countdown
                date={new Date(user.investment.expire_at)}
                renderer={renderer}
              />
            </b>
          </p>
        </div>
      );
    } else {
      return null;
    }
};
const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});
export default connect(mapStateToProps)(CountDowns);
