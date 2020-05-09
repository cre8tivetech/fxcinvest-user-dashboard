import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard/dashboard.component";
import MyTransfers from "./pages/my-transfers/my-transfers.component";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/my-transfers" component={MyTransfers} />
        {/* <Route exact path="/faq" component={Faq} /> */}
        {/* <Route exact path="/register" component={Auth} /> */}
        {/* <Route exact path="/signin" component={Auth} /> */}
        {/* <Route path="/test-page" render={() => <p>Routing test page</p>} /> */}
      </Switch>
    </div>
  );
}

export default App;
