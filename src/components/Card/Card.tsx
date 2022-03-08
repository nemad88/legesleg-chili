import React, { useContext, useState } from "react";

import { CartDetailsContext as CartContext } from "../../context/CartContext";
import downSVG from "../../assets/down.svg";
import {
  CardWrapper,
  ProductName,
  Details,
  InCartText,
  PriceWrapper,
  PriceLabel,
  PriceOptions,
  PriceOption,
  CartController,
  CartButton,
} from "./Card.style";
import CardImage from "../CardImage/CardImage";
type TypeVariation = { weight: number; price: number };
interface ICard {
  order: "normal" | "reverse";
  imageUrl: string;
  productName: string;
  details: string;
  price: number;
  id: string;
  variations: TypeVariation[];
}

const Card: React.FC<ICard> = ({
  order,
  imageUrl,
  productName,
  details,
  price,
  id,
  variations,
}) => {
  const { cart, setCart } = useContext(CartContext);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedVariation, setsSlectedVariation] = useState<TypeVariation>(
    variations[0]
  );

  const handleAmountChange = (sign: "-" | "+") => {
    if (sign === "+") {
      console.log({
        productName,
        id: `${id}-${selectedVariation.weight}`,
      });
    }
  };

  const handleOnClickDropdown = (target: React.MouseEvent<HTMLDivElement>) => {
    setDropdownVisible((visible) => !visible);
  };

  return (
    <CardWrapper elementOrder={order} imageUrl={imageUrl}>
      <CardImage />
      <div className="card-detail">
        <ProductName>{productName}</ProductName>
        <Details>{details}</Details>
        <CartController>
          <PriceWrapper>
            <PriceLabel onClick={handleOnClickDropdown}>
              {selectedVariation.weight}g - {selectedVariation.price} Ft
              <img src={downSVG} alt="" />
            </PriceLabel>
            {dropdownVisible && (
              <PriceOptions visible={dropdownVisible}>
                {variations.map((variation) => (
                  <PriceOption
                    key={variation.weight}
                    onClick={() => {
                      setsSlectedVariation(variation);
                      setDropdownVisible(false);
                    }}
                  >
                    {variation.weight}g - {variation.price} Ft
                  </PriceOption>
                ))}
              </PriceOptions>
            )}
          </PriceWrapper>
          <CartButton
            onClick={() => {
              handleAmountChange("+");
            }}
          >
            Kosárba teszem
          </CartButton>
        </CartController>
        {cart[id]?.amount ? (
          <InCartText>{cart[id]?.amount}db a kosárban</InCartText>
        ) : (
          <InCartText>Tegyél a kosárba</InCartText>
        )}
      </div>
    </CardWrapper>
  );
};

export default Card;
