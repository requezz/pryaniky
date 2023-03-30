import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./app/styles/reset.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store/store";
import 'semantic-ui-css/semantic.min.css'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
