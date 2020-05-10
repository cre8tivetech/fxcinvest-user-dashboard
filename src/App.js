import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard/dashboard.component";
import MyTransfers from "./pages/my-transfers/my-transfers.component";
import DepositFunds from "./pages/deposit-funds.component.jsx/deposit-funds.component";
import WithdrawFunds from "./pages/withdraw-funds/withdraw-funds.component";
import InternalTransfers from "./pages/internal-transfers/internal-transfers.component";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/my-transfers" component={MyTransfers} />
        <Route exact path="/deposit-funds" component={DepositFunds} />
        <Route exact path="/withdraw-funds" component={WithdrawFunds} />
        <Route exact path="/internal-transfers" component={InternalTransfers} />
        {/* <Route path="/test-page" render={() => <p>Routing test page</p>} /> */}
      </Switch>
    </div>
  );
}

export default App;
