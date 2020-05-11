import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard/dashboard.component";
import MyTransfers from "./pages/my-transfers/my-transfers.component";
import DepositFunds from "./pages/deposit-funds.component.jsx/deposit-funds.component";
import WithdrawFunds from "./pages/withdraw-funds/withdraw-funds.component";
import InternalTransfers from "./pages/internal-transfers/internal-transfers.component";
import Investment from "./pages/investment/investment.component";
import Referrals from "./pages/referrals/referrals.component";
import MyProfile from "./pages/my-profile/my-profile.component";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/my-transfers" component={MyTransfers} />
        <Route exact path="/deposit-funds" component={DepositFunds} />
        <Route exact path="/withdraw-funds" component={WithdrawFunds} />
        <Route exact path="/internal-transfers" component={InternalTransfers} />
        <Route exact path="/investment" component={Investment} />
        <Route exact path="/referrals" component={Referrals} />
        <Route exact path="/my-profile" component={MyProfile} />
        <Route path="/test-page" render={() => <p>Routing test page</p>} />
      </Switch>
    </div>
  );
}

export default App;
