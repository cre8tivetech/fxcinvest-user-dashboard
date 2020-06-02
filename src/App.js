import React, { useMemo } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard/dashboard.component";
import MyTransfers from "./pages/my-transfers/my-transfers.component";
import DepositFunds from "./pages/deposit-funds/deposit-funds.component";
import WithdrawFunds from "./pages/withdraw-funds/withdraw-funds.component";
import Withdraw from "./pages/withdraw-funds/withdraw.component";
import InternalTransfers from "./pages/internal-transfers/internal-transfers.component";
import Investment from "./pages/investment/investment.component";
import Invest from "./pages/investment/invest.component";
import Referrals from "./pages/referrals/referrals.component";
import MyProfile from "./pages/my-profile/my-profile.component";
import Error404 from "./pages/Error/error-404.component";
import AuthSpinner from "./components/auth/auth-spinner.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectMenu } from "./redux/ui/ui.selector";
import { checkAuth, checkUserSession } from "./redux/user/user.actions";
import { useEffect } from "react";
import {
  selectIsLoading,
  selectCurrentUser,
  selectBitCoinInvoice,
} from "./redux/user/user.selector";
import Layout from "./components/layout/layout.component";
import Deposit from "./pages/deposit-funds/deposit.component";
import PopUp from "./components/message/popup.component";
import CountDowns from "./components/countdowns/countdowns.component";
// import Pay from "./pages/deposit-funds/pay.component";
// import Pay from "./pages/deposit-funds/pay.component";

function App({ isLoading, checkAuth, checkUserSession, user, bitcoinInvoice }) {
  useMemo(() => {
    checkAuth();
    checkUserSession();
  }, [checkAuth, checkUserSession]);
  useEffect(() => {}, []);
  return (
    <div className="App">
      {isLoading || !user ? (
        <AuthSpinner />
      ) : (
        <main>
          <Layout>
            <CountDowns />
            <PopUp />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/auth/:data" component={AuthSpinner} />
              <Route exact path="/my-transfers" component={MyTransfers} />
              <Route exact path="/deposit-funds" component={DepositFunds} />
              <Route exact path="/deposit-funds/deposit" component={Deposit} />
              <Route
                exact
                path="/deposit-funds/pay"
                render={() => (bitcoinInvoice ? <Deposit /> : <Error404 />)}
                // component={Deposit}
              />
              <Route
                exact
                path="/deposit-funds/pay/success"
                render={() => (bitcoinInvoice ? <Deposit /> : <Error404 />)}
                // component={Deposit}
              />
              <Route exact path="/withdraw-funds" component={WithdrawFunds} />
              <Route
                exact
                path="/withdraw-funds/withdraw"
                component={Withdraw}
              />
              <Route
                exact
                path="/withdraw-funds/confirm"
                component={Withdraw}
              />
              <Route
                exact
                path="/internal-transfers"
                component={InternalTransfers}
              />
              <Route exact path="/investment" component={Investment} />
              <Route exact path="/investment/invest" component={Invest} />
              <Route exact path="/investment/confirm" component={Invest} />
              <Route exact path="/referrals" component={Referrals} />
              <Route exact path="/my-profile" component={MyProfile} />
              <Route
                path="/test-page"
                render={() => <p>Routing test page</p>}
              />
              <Route path="*" component={Error404} />
            </Switch>
          </Layout>
        </main>
      )}
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  menu: selectMenu,
  isLoading: selectIsLoading,
  user: selectCurrentUser,
  bitcoinInvoice: selectBitCoinInvoice,
});
const mapDispatchToProps = (dispatch) => ({
  checkAuth: () => dispatch(checkAuth()),
  checkUserSession: () => dispatch(checkUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
