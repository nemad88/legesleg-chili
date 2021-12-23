import { useRef, useContext } from "react";
import { HeroWrapper, HeroText } from "./Hero.style";
import { useSetActualPage } from "../../hooks/useSetActualPage";
import { Context as ActualPageContext } from "../../context/ActualPageContext";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const { setActualPage } = useContext(ActualPageContext);

  useSetActualPage(heroRef, "hero", setActualPage);

  return (
    <HeroWrapper ref={heroRef} id="hero">
      <HeroText>
        <span id="hero-company">Legesleg</span>
        <span>prémium kézműves</span>
        <span>termékek</span>
      </HeroText>
    </HeroWrapper>
  );
};

export default Hero;
