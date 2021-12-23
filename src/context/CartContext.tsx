import React, { useState, SetStateAction } from "react";
import { ICartItem } from "../interfaces/ICartItem";

interface ICart {
  [key: string]: ICartItem;
}

interface ICardDetailsContext {
  cart: ICart;
  setCart: React.Dispatch<SetStateAction<ICart>>;
  showCart: boolean;
  setShowCart: React.Dispatch<SetStateAction<boolean>>;
}

export const CartDetailsContext = React.createContext<ICardDetailsContext>({
  cart: {},
  setCart: () => {},
  showCart: false,
  setShowCart: () => {},
});

const CartContext: React.FC = ({ children }) => {
  const [cart, setCart] = useState<ICart>({});
  const [showCart, setShowCart] = useState(false);
  return (
    <CartDetailsContext.Provider
      value={{ cart, setCart, showCart, setShowCart }}
    >
      {children}
    </CartDetailsContext.Provider>
  );
};

export default CartContext;
