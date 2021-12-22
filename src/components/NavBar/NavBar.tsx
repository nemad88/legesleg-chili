import { SetStateAction } from "react";
import { NavBarContainer, ScrolledNavBarContainer } from "./NavBar.style";
import { IActualPage } from "../../utils/ISetActualPage";
import upSVG from "../../assets/up.svg";
import downSVG from "../../assets/down.svg";

interface INavbar extends IActualPage {
  setShowCart: React.Dispatch<SetStateAction<boolean>>;
}

const NavBar: React.FC<INavbar> = ({ actualPage, setShowCart }) => {
  const scrollTo = (id: string) => {
    const element = document.querySelector(`#${id}`);
    if (element) element.scrollIntoView({ behavior: "smooth" });
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
          Kosár
        </li>
      </NavBarContainer>
    );
  };

  const getScrollToLink = () => {
    if (actualPage === "products") return { prev: "hero", next: "about" };
    if (actualPage === "about") return { prev: "products", next: "contact" };
    if (actualPage === "contact") return { prev: "about", next: "" };
    return { prev: "", next: "" };
  };

  const getScrolledNav = () => {
    return (
      <ScrolledNavBarContainer>
        <img
          src={upSVG}
          onClick={() => {
            if (getScrollToLink().prev) {
              scrollTo(getScrollToLink().prev);
            }
          }}
          alt=""
        />
        <img
          src={downSVG}
          onClick={() => {
            if (getScrollToLink().next) {
              scrollTo(getScrollToLink().next);
            }
          }}
          alt=""
        />

        {/* <li onClick={() => scrollTo("hero")}>Kezdőoldal</li>
        <li onClick={() => scrollTo("products")}>Termékeink</li>
        <li onClick={() => scrollTo("about")}>Rólunk</li>
        <li onClick={() => scrollTo("contact")}>Kapcsolat</li>
        <li
          onClick={() => {
            document.body.style.overflow = "hidden";
            setShowCart(true);
          }}
        >
          Kosár
        </li> */}
      </ScrolledNavBarContainer>
    );
  };

  if (actualPage === "hero") {
    return getNormalNavbar();
  }

  return getScrolledNav();
};

export default NavBar;
