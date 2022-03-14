import styled from "styled-components";

export const HeroWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  background-image: url(${"https://legeslegchili.hu/assets/hero.jpeg"});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-attachment: scroll;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: 300;
  font-size: 48px;
  text-align: left;
  letter-spacing: 0.23em;
  margin: 24px;

  #hero-company {
    font-weight: bold;
    font-size: 24px;
    color: #bc0c0c;
    letter-spacing: 0.1em;
  }

  span {
    text-transform: uppercase;
  }

  padding: 16px;
  border-left: 5px solid #ffffff;

  @media only screen and (max-width: 800px) {
    max-width: 384px;
  }
`;
