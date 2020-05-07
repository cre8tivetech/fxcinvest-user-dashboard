import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route exact path="/" component={} /> */}
        {/* <Route exact path="/investment-plans" component={Investment} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/register" component={Auth} />
        <Route exact path="/signin" component={Auth} />
        <Route path="/test-page" render={() => <p>Routing test page</p>} /> */}
      </Switch>
    </div>
  );
}

export default App;
