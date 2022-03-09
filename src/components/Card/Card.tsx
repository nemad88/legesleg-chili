import React, { useContext, useState } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
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
type TypeVariation = { weight: number; price: number };
interface ICard {
  order: "normal" | "reverse";
  imageUrl: string;
  productName: string;
  details: string;
  id: string;
  variations: TypeVariation[];
}

const Card: React.FC<ICard> = ({
  order,
  imageUrl,
  productName,
  details,
  id,
  variations,
}) => {
  const { cart, setCart } = useContext(CartContext);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedVariation, setsSlectedVariation] = useState<TypeVariation>(
    variations[0]
  );
  const refClickOutside = useOnClickOutside(() => setDropdownVisible(false));

  const handleAmountChange = (sign: "-" | "+") => {
    const cartId = `${id}-${selectedVariation.weight}`;

    const currentItem = {
      productName,
      id: cartId,
      weight: selectedVariation.weight,
      itemPrice: selectedVariation.price,
    };

    console.log("currentItem", currentItem);

    if (sign === "+") {
      setCart((cart) => {
        return {
          ...cart,
          [cartId]: {
            ...currentItem,
            amount: cart[cartId]?.amount ? cart[cartId].amount + 1 : 1,
            sum: cart[cartId]?.amount
              ? currentItem.itemPrice * cart[cartId].amount +
                currentItem.itemPrice
              : currentItem.itemPrice,
          },
        };
      });
    }
  };

  const handleOnClickDropdown = (target: React.MouseEvent<HTMLDivElement>) => {
    setDropdownVisible((visible) => !visible);
  };

  return (
    <CardWrapper elementOrder={order} imageUrl={imageUrl}>
      <div className="card-picture" />
      <div className="card-detail">
        <ProductName>{productName}</ProductName>
        <Details>{details}</Details>
        <CartController>
          <PriceWrapper ref={refClickOutside} onClick={handleOnClickDropdown}>
            <PriceLabel>
              {selectedVariation.weight}g - {selectedVariation.price} Ft
              <img src={downSVG} alt="" />
            </PriceLabel>
            {dropdownVisible && (
              <PriceOptions>
                {variations.map((variation) => (
                  <PriceOption
                    key={variation.weight}
                    onClick={() => {
                      setsSlectedVariation(variation);
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
