import { useRef, useContext } from "react";
import { CartContainer, ClosButton, ItemList, Item } from "./Cart.style";
import { SectionTitle } from "../../utils/Common.style";
import { CartDetailsContext as CartContext } from "../../context/CartContext";

const Cart: React.FC = () => {
  const cartRef = useRef<HTMLDivElement>(null);
  const { cart, setShowCart } = useContext(CartContext);

  console.log("CART", cart);

  return (
    <CartContainer ref={cartRef}>
      <ClosButton
        onClick={() => {
          setShowCart(false);
          document.body.style.overflow = "auto";
        }}
      >
        X
      </ClosButton>
      <SectionTitle>KOSÁR</SectionTitle>

      <ItemList>
        {Object.values(cart).length > 0 ? (
          Object.values(cart).map((cartItem) => {
            return (
              <Item key={cartItem.id}>
                <div>Termék neve: {cartItem.itemName}</div>
                <div>Ár: {cartItem.itemPrice}</div>
                <div>Mennyiség: {cartItem.amount}</div>
                <div>Össz: {cartItem.sum}</div>
              </Item>
            );
          })
        ) : (
          <div>Nincs termék a kosárban</div>
        )}
      </ItemList>
    </CartContainer>
  );
};

export default Cart;
