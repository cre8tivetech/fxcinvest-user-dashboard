import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.scss";
import "./themes/button.styles.scss";
import "./themes/lines.styles.scss";
import "./themes/tooltip.styles.scss";
import "./themes/particles.styles.scss";
import "./themes/mixins.scss";
// import "./assets/fonts/font-awesome-pro-5.13.0-web/css/all.min.css";
import "./assets/fonts/font-awesome-pro-5.13.0-web/css/all.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
