import { useRef } from "react";
import { HeroWrapper, HeroText } from "./Hero.style";
import { useSetActualPage } from "../../hooks/useSetActualPage";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useSetActualPage(heroRef, "hero");

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
