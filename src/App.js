import React, { useMemo } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard/dashboard.component";
import MyTransfers from "./pages/my-transfers/my-transfers.component";
import DepositFunds from "./pages/deposit-funds/deposit-funds.component";
import WithdrawFunds from "./pages/withdraw-funds/withdraw-funds.component";
import InternalTransfers from "./pages/internal-transfers/internal-transfers.component";
import Investment from "./pages/investment/investment.component";
import Referrals from "./pages/referrals/referrals.component";
import MyProfile from "./pages/my-profile/my-profile.component";
import Error404 from "./pages/Error/error-404.component";
import AuthSpinner from "./components/auth/auth-spinner.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectMenu } from "./redux/ui/ui.selector";
import { checkAuth } from "./redux/user/user.actions";
import { useEffect } from "react";
import { selectIsLoading, selectCurrentUser } from "./redux/user/user.selector";

function App({ isLoading, checkAuth, user }) {
  const memorized = useMemo(() => {
    checkAuth();
  }, [checkAuth]);
  useEffect(() => {
    checkAuth();
  }, [checkAuth, memorized, user]);
  return (
    <div className="App">
      {isLoading && !user ? (
        <AuthSpinner />
      ) : (
        <Switch>
          <Route
            exact
            path="/"
            render={() => (user ? <Dashboard /> : <AuthSpinner />)}
          />
          <Route exact path="/auth/:data" component={AuthSpinner} />
          <Route exact path="/my-transfers" component={MyTransfers} />
          <Route exact path="/deposit-funds" component={DepositFunds} />
          <Route exact path="/withdraw-funds" component={WithdrawFunds} />
          <Route
            exact
            path="/internal-transfers"
            component={InternalTransfers}
          />
          <Route exact path="/investment" component={Investment} />
          <Route exact path="/referrals" component={Referrals} />
          <Route exact path="/my-profile" component={MyProfile} />
          <Route path="/test-page" render={() => <p>Routing test page</p>} />
          <Route path="*" component={Error404} />
        </Switch>
      )}
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  menu: selectMenu,
  isLoading: selectIsLoading,
  user: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  checkAuth: () => dispatch(checkAuth()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
