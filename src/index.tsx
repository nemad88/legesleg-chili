import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
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
