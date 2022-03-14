import styled from "styled-components";

interface ICardWrapper {
  elementOrder: "normal" | "reverse";
  imageUrl: string;
}

export const CardWrapper = styled.div<ICardWrapper>`
  display: grid;
  width: 100%;
  grid-template-columns: 50% 50%;
  grid-template-rows: 540px;

  @media only screen and (max-width: 720px) {
    grid-template-columns: 100%;
    margin-bottom: 16px;
  }

  .card-detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    flex: 1 1;
    background: linear-gradient(64.29deg, #0b0c0c -8.14%, #031930 74.55%);
    ${({ elementOrder }) => {
      if (elementOrder === "reverse") {
        return "order: 1;";
      } else {
        return "order: 2;";
      }
    }}
    padding: 36px;

    @media only screen and (max-width: 960px) {
      padding: 24px;
    }
  }

  .card-picture {
    content: "";
    position: relative;
    flex: 1 1;
    ${({ elementOrder }) => {
      if (elementOrder === "reverse") return "order: 2;";
      return "order: 1;";
    }}
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-position: center;
      object-fit: cover;
    }

    @media only screen and (max-width: 720px) {
      display: none;
    }
  }
`;

export const ProductName = styled.div`
  font-weight: bold;
  font-size: 42px;
  text-transform: uppercase;
  letter-spacing: 0.125em;
  color: #d90b0b;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  margin-bottom: 52px;

  @media only screen and (max-width: 960px) {
    text-align: center;
    font-size: 34px;
  }
`;

export const Details = styled.div`
  margin-bottom: 40px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: justify;
  letter-spacing: 0.125em;
  color: #f7f7f7;

  @media only screen and (max-width: 960px) {
    font-size: 14px;
  }
`;

export const InCartText = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.125em;
  color: #ffffff;
  margin-top: 72px;
  height: 16px;
`;

export const PriceWrapper = styled.div`
  padding: 10px;
  cursor: pointer;
  letter-spacing: 0.125em;
  border-radius: 8px;
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  background: #ffffff;
  position: relative;
  width: 200px;
  @media only screen and (max-width: 960px) {
    padding: 6px;
    width: 160px;
  }
`;

export const PriceLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  img {
    width: 12px;
    height: 12px;
  }

  @media only screen and (max-width: 960px) {
    font-size: 12px;
  }
`;

export const PriceOptions = styled.div`
  display: flex;
  background: #ffffff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 44px;
  font-size: 14px;
  margin-bottom: 32px;
  width: 100%;
  border-radius: 8px;
  padding: 4px;
  gap: 4px;
`;

export const PriceOption = styled.div`
  padding: 8px;
  width: 100%;
  border-radius: 8px;
  text-align: center;

  &:hover {
    background: gray;
  }

  @media only screen and (max-width: 960px) {
    font-size: 12px;
  }
`;

export const CartController = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

export const CartButton = styled.button`
  all: unset;
  padding: 10px;
  background: #273557;
  border-radius: 8px;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  letter-spacing: 0.125em;
  color: #ffffff;
  cursor: pointer;

  @media only screen and (max-width: 960px) {
    padding: 6px;
    font-size: 12px;
  }
`;
