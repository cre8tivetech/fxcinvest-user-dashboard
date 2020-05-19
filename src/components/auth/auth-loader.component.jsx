import React, { useEffect } from "react";
import "./auth.styles.scss";
import Logo from "../../assets/img/Icon.svg";
import { useParams, useHistory } from "react-router-dom";
import { signInByTokenStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { useCallback } from "react";

const AuthLoader = ({ signInByTokenStart, currentUser }) => {
  const { data } = useParams();
  const result = data.split("-");
  const data1 = result[0];
  const data2 = result[1];
  const uid = window.atob(data1);
  const token = window.atob(data2);
  const history = useHistory();
  // const [text, setText] = useState("Verifying user, Please wait....");

  const signIn = useCallback(() => {
    signInByTokenStart(uid, token);
  }, [signInByTokenStart, uid, token]);
  useEffect(() => {
    if (!currentUser) data && signIn();
    if (currentUser)
      setTimeout(() => {
        // setText("Redirecting to Your Dashboard.....");
        history.push("/");
      }, 6000);
    // currentUser && console.log(currentUser);
  }, [currentUser, data, history, signIn]);

  return (
    <div className="auth-loader">
      <div>
        <img className="image" src={Logo} alt="" />
        <div className="texts">
          <h1>FCXINVEST</h1>
        </div>
      </div>
      {(function () {
        let rows = [];
        for (let i = 0; i < 100; i++) {
          rows.push(<div className="particle"></div>);
        }
        return rows;
      })()}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  signInByTokenStart: (uid, token) =>
    dispatch(signInByTokenStart({ uid, token })),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoader);
