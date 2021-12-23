import { useRef, useContext } from "react";
import { ProductsContainer } from "./Contact.style";
import { SectionTitle } from "../../utils/Common.style";
import { useSetActualPage } from "../../hooks/useSetActualPage";
import { Context as ActualPageContext } from "../../context/ActualPageContext";

const Products: React.FC = () => {
  const productsRef = useRef<HTMLDivElement>(null);
  const { setActualPage } = useContext(ActualPageContext);
  useSetActualPage(productsRef, "contact", setActualPage);

  return (
    <ProductsContainer ref={productsRef} id="contact">
      <SectionTitle>Kapcsolat</SectionTitle>
    </ProductsContainer>
  );
};

export default Products;
