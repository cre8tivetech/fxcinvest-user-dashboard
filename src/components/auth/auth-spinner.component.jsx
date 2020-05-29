import React, { useEffect } from "react";
import "./auth.styles.scss";
import Logo from "../../assets/img/Icon.svg";
import { matchPath, withRouter, Route } from "react-router";
import {
  useHistory,
  useLocation,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { setLoading } from "../../redux/user/user.actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import AuthLoader from "./auth-loader.component";

const AuthSpinner = ({ currentUser, setLoading }) => {
  const history = useHistory();
  const location = useLocation();
  const { data } = useParams();
  const authLoader = !!matchPath(location.pathname, "/auth/:data");

  useEffect(() => {
    if (!currentUser) {
      if (!authLoader) {
        setTimeout(() => {
          window.location.assign(process.env.REACT_APP_HOME_URL);
        }, 2000);
      }
    }
    if (currentUser)
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    // currentUser && console.log(currentUser);
  }, [
    authLoader,
    currentUser,
    data,
    history,
    location,
    location.pathname,
    setLoading,
  ]);

  if (authLoader) return <Route component={AuthLoader} />;
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
  setLoading: (condition) => dispatch(setLoading(condition)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AuthSpinner)
);
