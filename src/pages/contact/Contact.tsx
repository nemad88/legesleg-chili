import { useRef } from "react";
import { ProductsContainer } from "./Contact.style";
import { SectionTitle } from "../../utils/Common.style";
import { useSetActualPage } from "../../hooks/useSetActualPage";

const Products: React.FC = () => {
  const productsRef = useRef<HTMLDivElement>(null);

  useSetActualPage(productsRef, "contact");

  return (
    <ProductsContainer ref={productsRef} id="contact">
      <SectionTitle>Kapcsolat</SectionTitle>
    </ProductsContainer>
  );
};

export default Products;
