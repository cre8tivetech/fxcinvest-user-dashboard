import React, { useEffect } from "react";
import "./auth.styles.scss";
import Logo from "../../assets/img/Icon.svg";
import {
  useParams,
  useHistory,
  useLocation,
  withRouter,
  matchPath,
} from "react-router-dom";
import { signInByTokenStart, setLoading } from "../../redux/user/user.actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { useCallback } from "react";

const AuthLoader = ({ signInByTokenStart, currentUser, setLoading }) => {
  const location = useLocation();
  const history = useHistory();
  const authLoader = !!matchPath(location.pathname, "/auth/:data");
  // const [text, setText] = useState("Verifying user, Please wait....");
  const signIn = useCallback(
    (uid, token) => {
      signInByTokenStart(uid, token);
    },
    [signInByTokenStart]
  );
  useEffect(() => {
    if (authLoader) {
      if (location) {
        const paramData = location.pathname.split("/")[2];
        const result = paramData.split("-");
        const data1 = result[0];
        const data2 = result[1];
        const uid = window.atob(data1);
        const token = window.atob(data2);
        if (!currentUser) paramData && signIn(uid, token);
      }

      if (currentUser) {
        // setText("Redirecting to Your Dashboard.....");
        history.push("/");
        currentUser && console.log(currentUser);
      }
    }
    // console.log(data);
  }, [authLoader, currentUser, history, location, setLoading, signIn]);

  return (
    <div className="auth-loader">
      <div>
        <img className="image" src={Logo} alt="" />
        {/* <div className="texts">
          <h1>FCXINVEST</h1>
        </div> */}
      </div>
      {(function () {
        let rows = [];
        for (let i = 0; i < 100; i++) {
          rows.push(<div key={i} className="particle"></div>);
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
  setLoading: (condition) => dispatch(setLoading(condition)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AuthLoader)
);
