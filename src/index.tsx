import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CartContext from "./context/CartContext";
import ActualPageContext from "./context/ActualPageContext";

ReactDOM.render(
  <React.StrictMode>
    <ActualPageContext>
      <CartContext>
        <App />
      </CartContext>
    </ActualPageContext>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
