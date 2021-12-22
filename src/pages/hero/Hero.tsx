import { useRef } from "react";
import { HeroWrapper, HeroText } from "./Hero.style";
import { useSetActualPage } from "../../hooks/useSetActualPage";
import { ISetActualPage } from "../../utils/ISetActualPage";

interface IHero extends ISetActualPage {}

const Hero: React.FC<IHero> = ({ setActualPage }) => {
  const heroRef = useRef<HTMLDivElement>(null);

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
