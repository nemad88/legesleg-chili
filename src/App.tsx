import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./pages/hero/Hero";
import Products from "./pages/products/Products";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Cart from "./pages/cart/Cart";
import { BackDrop } from "./utils/Common.style";
import FullPageImage from "./components/FullPageImage/FullPageImage";

function App() {
  const [actualPage, setActualPage] = useState<
    "hero" | "products" | "about" | "contact"
  >("hero");
  const [showCart, setShowCart] = useState<boolean>(false);

  useEffect(() => {
    console.log("Actual page", actualPage);
  }, [actualPage]);

  return (
    <div className="App">
      <NavBar actualPage={actualPage} setShowCart={setShowCart} />
      <Hero setActualPage={setActualPage} />
      <Products setActualPage={setActualPage} />
      <FullPageImage />
      <About setActualPage={setActualPage} />
      <Contact setActualPage={setActualPage} />
      {showCart ? <BackDrop /> : null}
      <Cart setShowCart={setShowCart} isVisible={showCart} />
    </div>
  );
}

export default App;
