import { useRef } from "react";
import { ProductsContainer, CardsContainer } from "./Products.style";
import { SectionTitle } from "../../utils/Common.style";
import { useSetActualPage } from "../../hooks/useSetActualPage";
import Card from "../../components/Card/Card";

import productsList from "../../data/products.json";

const Products: React.FC = () => {
  const productsRef = useRef<HTMLDivElement>(null);
  useSetActualPage(productsRef, "products");

  return (
    <ProductsContainer ref={productsRef} id="products">
      <SectionTitle>Prémium kézműves termékeink</SectionTitle>
      <CardsContainer>
        {productsList.products.map((product: any) => {
          const { order, imgUrl, name, id, details, variations } = product;
          return (
            <Card
              id={id}
              order={order}
              imageUrl={imgUrl}
              productName={name}
              key={id}
              details={details}
              variations={variations}
            />
          );
        })}
      </CardsContainer>
    </ProductsContainer>
  );
};

export default Products;
