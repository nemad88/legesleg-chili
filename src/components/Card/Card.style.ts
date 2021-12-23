import styled from "styled-components";

interface ICardWrapper {
  elementOrder: "normal" | "reverse";
  imageUrl: string;
}

export const CardWrapper = styled.div<ICardWrapper>`
  display: flex;
  width: 100%;
  height: 520px;

  .card-detail {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1 1;

    ${({ elementOrder }) => {
      if (elementOrder === "reverse") {
        return "order: 1; background: linear-gradient(68.69deg, #E0E0E0 3.17%, rgba(255, 255, 255, .1) 86%);";
      } else {
        return "order: 2; background: linear-gradient(242.97deg, #E0E0E0 11.01%, rgba(255, 255, 255, .1) 90.29%);";
      }
    }}
    padding: 36px;
  }

  .card-picture {
    content: "";
    flex: 1 1;
    ${({ imageUrl }) =>
      `background-image: url(${imageUrl}); background-size: cover; background-position: center;`}
    ${({ elementOrder }) => {
      if (elementOrder === "reverse") return "order: 2;";
      return "order: 1;";
    }}
    padding: 36px;
  }
`;

export const ProductName = styled.div`
  font-weight: bold;
  font-size: 42px;
  text-transform: uppercase;
  letter-spacing: 0.125em;
  color: #d90b0b;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  margin-bottom: 48px;
`;

export const Details = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  text-align: justify;
  letter-spacing: 0.125em;
  color: #000000;
  margin-bottom: 32px;
`;

export const Price = styled.div`
  font-style: italic;
  font-weight: bold;
  margin-bottom: 32px;
`;

export const CartLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  font-weight: 900;
  font-size: 18px;
  letter-spacing: 0.125em;
  min-width: 320px;
`;

export const CartController = styled.div`
  display: flex;
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
  font-size: 18px;
  letter-spacing: 0.125em;
  color: #ffffff;
  cursor: pointer;
`;
