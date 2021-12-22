import { useRef, SetStateAction } from "react";
import { CartContainer, ClosButton } from "./Cart.style";
import { SectionTitle } from "../../utils/Common.style";
import { useSetActualPage } from "../../hooks/useSetActualPage";
import { ISetActualPage } from "../../utils/ISetActualPage";

interface ICart {
  setShowCart: React.Dispatch<SetStateAction<boolean>>;
  isVisible: boolean;
}

const Cart: React.FC<ICart> = ({ isVisible, setShowCart }) => {
  const cartRef = useRef<HTMLDivElement>(null);

  return (
    <CartContainer isVisible={isVisible} ref={cartRef}>
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
