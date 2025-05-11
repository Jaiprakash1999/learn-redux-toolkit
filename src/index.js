import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux-store/store/store";
// import Routing from "./Routing";
// import Higher from "./component/higher-order-component/Higher";
// import GridComponent from "./component/learn-grid/GridComponent";
import Accordian from "./common-component/accordian/Accordian";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <Routing /> */}
    {/* <Higher /> */}
    {/* <GridComponent /> */}
    <Accordian />
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
