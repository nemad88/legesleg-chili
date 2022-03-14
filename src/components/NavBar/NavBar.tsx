import { useContext } from "react";
import {
  NavBarContainer,
  ScrolledNavBarContainer,
  InCart,
} from "./NavBar.style";
import { CartDetailsContext } from "../../context/CartContext";
import { Context as ActualPageContext } from "../../context/ActualPageContext";
import { ICartItem } from "../../interfaces/ICartItem";

const NavBar: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.querySelector(`#${id}`);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const { cart, setShowCart } = useContext(CartDetailsContext);
  const { actualPage } = useContext(ActualPageContext);

  const getItemsQuantityInCart = () => {
    const cartAsArray = Object.values(cart) as ICartItem[];
    let sum = 0;
    cartAsArray.forEach((cartItem) => {
      sum = sum + cartItem.amount;
    });
    return sum;
  };

  const getNormalNavbar = () => {
    return (
      <NavBarContainer id="navigation">
        <li onClick={() => scrollTo("products")}>Termékeink</li>
        <li onClick={() => scrollTo("about")}>Rólunk</li>
        <li onClick={() => scrollTo("contact")}>Kapcsolat</li>
        <li
          onClick={() => {
            document.body.style.overflow = "hidden";
            setShowCart(true);
          }}
        >
          Kosár ({getItemsQuantityInCart()})
        </li>
      </NavBarContainer>
    );
  };

  const getScrollToLink = () => {
    if (actualPage === "products") return { prev: "hero", next: "about" };
    if (actualPage === "about") return { prev: "products", next: "" };
    // if (actualPage === "contact") return { prev: "about", next: "" };
    return { prev: "", next: "" };
  };

  const getScrolledNav = () => {
    return (
      <>
        <InCart
          onClick={() => {
            document.body.style.overflow = "hidden";
            setShowCart(true);
          }}
        >
          Kosár ({getItemsQuantityInCart()})
        </InCart>
        <ScrolledNavBarContainer>
          <img
            src={"https://legeslegchili.hu/assets/up.svg"}
            onClick={() => {
              if (getScrollToLink().prev) {
                scrollTo(getScrollToLink().prev);
              }
            }}
            alt="up"
          />
          <img
            src={"https://legeslegchili.hu/assets/down.svg"}
            onClick={() => {
              if (getScrollToLink().next) {
                scrollTo(getScrollToLink().next);
              }
            }}
            alt="down"
          />
        </ScrolledNavBarContainer>
      </>
    );
  };

  if (actualPage === "hero") {
    return getNormalNavbar();
  }

  return getScrolledNav();
};

export default NavBar;
