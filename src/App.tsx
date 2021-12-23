import { useState, useEffect, useContext } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./pages/hero/Hero";
import Products from "./pages/products/Products";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Cart from "./pages/cart/Cart";
import { BackDrop } from "./utils/Common.style";
import FullPageImage from "./components/FullPageImage/FullPageImage";

import { CartDetailsContext as CartContext } from "./context/CartContext";

function App() {
  const { showCart, setShowCart, cart } = useContext(CartContext);

  useEffect(() => {
    console.log("cart", cart);
  }, [cart]);

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Products />
      <FullPageImage />
      <About />
      <Contact />
      {showCart ? (
        <>
          <BackDrop
            onClick={() => {
              setShowCart(false);
            }}
          />
          <Cart />
        </>
      ) : null}
    </div>
  );
}

export default App;
