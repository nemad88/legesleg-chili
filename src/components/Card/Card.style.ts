import styled from "styled-components";

interface ICardWrapper {
  elementOrder: "normal" | "reverse";
  imageUrl: string;
}

export const CardWrapper = styled.div<ICardWrapper>`
  display: grid;
  width: 100%;
  height: 520px;
  grid-template-columns: 50% 50%;

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
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%) scale(80%);
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
  /* font-weight: bold; */
  padding: 8px;
  width: 100%;
  border-radius: 8px;

  &:hover {
    background: gray;
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
`;
