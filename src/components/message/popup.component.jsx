import React, { useMemo, useState, useCallback } from "react";
import { connect } from "react-redux";
import { selectPopUp } from "../../redux/user/user.selector";
import { createStructuredSelector } from "reselect";

const PopUp = ({ popUp }) => {
  const [bgColor, setBgColor] = useState();
  // const { type, message } = messageData;
  const close = (e) => {
    return (e.currentTarget.parentElement.className = "close");
  };

  const messages = useCallback(() => {
    if (popUp) {
      console.log("going");
      popUp.type === "error"
        ? setBgColor("#FF0000")
        : setBgColor("var(--color-primary)");
      popUp.type === "success" ? setBgColor("#4BB543") : setBgColor("white");
    }
  }, [popUp]);

  useMemo(() => {
    messages();
  }, [messages]);
  if (popUp) {
    return (
      <div className="popup" style={{ backgroundColor: bgColor }}>
        <span onClick={(e) => close(e)}>x</span>
        <div>
          <p>{popUp.message}</p>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};
const mapStateToProps = createStructuredSelector({
  popUp: selectPopUp,
});
export default connect(mapStateToProps)(PopUp);
