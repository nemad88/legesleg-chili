import { useEffect, useContext } from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./pages/hero/Hero";
import Products from "./pages/products/Products";
import About from "./pages/about/About";
// import Contact from "./pages/contact/Contact";
import Cart from "./pages/cart/Cart";
import Footer from "./pages/footer/Footer";
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
      {/* <Contact /> */}
      <Footer />
      {showCart ? (
        <>
          <BackDrop
            onClick={() => {
              setShowCart(false);
              document.body.style.overflow = "auto";
            }}
          />
          <Cart />
        </>
      ) : null}
    </div>
  );
}

export default App;
