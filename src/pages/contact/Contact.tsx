import { useRef } from "react";
import { ProductsContainer } from "./Contact.style";
import { SectionTitle } from "../../utils/Common.style";
import { useSetActualPage } from "../../hooks/useSetActualPage";
import { ISetActualPage } from "../../utils/ISetActualPage";

interface IContact extends ISetActualPage {}

const Products: React.FC<IContact> = ({ setActualPage }) => {
  const productsRef = useRef<HTMLDivElement>(null);

  useSetActualPage(productsRef, "contact", setActualPage);

  return (
    <ProductsContainer ref={productsRef} id="contact">
      <SectionTitle>Kapcsolat</SectionTitle>
    </ProductsContainer>
  );
};

export default Products;
