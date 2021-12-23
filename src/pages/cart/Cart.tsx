import { useRef, useContext } from "react";
import { CartContainer, ClosButton } from "./Cart.style";
import { SectionTitle } from "../../utils/Common.style";
import { CartDetailsContext as CartContext } from "../../context/CartContext";

const Cart: React.FC = () => {
  const cartRef = useRef<HTMLDivElement>(null);
  const { setShowCart } = useContext(CartContext);

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
      <SectionTitle>Rólunk</SectionTitle>
    </CartContainer>
  );
};

export default Cart;
