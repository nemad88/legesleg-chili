import { useContext, useState, useEffect } from "react";
import { CartDetailsContext as CartContext } from "../../context/CartContext";

import {
  CardWrapper,
  ProductName,
  Details,
  Price,
  CartLabel,
  CartController,
  CartButton,
} from "./Card.style";

interface ICard {
  order: "normal" | "reverse";
  imageUrl: string;
  productName: string;
  details: string;
  price: number;
  id: string;
}

const Card: React.FC<ICard> = ({
  order,
  imageUrl,
  productName,
  details,
  price,
  id,
}) => {
  const { cart, setCart } = useContext(CartContext);

  const handleAmountChange = (sign: "-" | "+") => {
    if (sign === "+") {
      setCart({ ...cart, [id]: { amount: cart[id]?.amount + 1 } });
    } else {
      setCart({ ...cart, [id]: { amount: cart[id]?.amount - 1 } });
    }
  };

  return (
    <CardWrapper elementOrder={order} imageUrl={imageUrl}>
      <div className="card-picture" />
      <div className="card-detail">
        <ProductName>{productName}</ProductName>
        <Details>{details}</Details>
        <Price>{price} Ft</Price>
        <CartController>
          {cart[id]?.amount > 0 ? (
            <>
              <CartButton onClick={() => handleAmountChange("-")}>-</CartButton>
              <CartLabel>{cart[id].amount} db termék a kosárban</CartLabel>
              <CartButton onClick={() => handleAmountChange("+")}>+</CartButton>
            </>
          ) : (
            <CartButton
              onClick={() => {
                setCart((cart) => {
                  return { ...cart, [id]: { amount: 1 } };
                });
              }}
            >
              Kosárba teszem
            </CartButton>
          )}
        </CartController>
      </div>
    </CardWrapper>
  );
};

export default Card;
