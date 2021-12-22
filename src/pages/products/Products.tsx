import { useRef, useEffect } from "react";
import { ProductsContainer, CardsContainer } from "./Products.style";
import { SectionTitle } from "../../utils/Common.style";
import { useSetActualPage } from "../../hooks/useSetActualPage";
import { ISetActualPage } from "../../utils/ISetActualPage";
import Card from "../../components/Card/Card";
import csajozosJPG from "../../assets/csajozos.jpg";
import csilikeJPG from "../../assets/csilike.jpg";
import edesemJPG from "../../assets/edesem.jpg";
import nemCsiplekJPG from "../../assets/nem_csiplek.jpg";
import sargaIrigysegJPG from "../../assets/sarga_irigyseg.jpg";
import productsList from "../../data/products.json";

interface IProducts extends ISetActualPage {}

interface IProduct {
  order: "normal" | "reverse";
}

const Products: React.FC<IProducts> = ({ setActualPage }) => {
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(productsList);
  }, []);

  useSetActualPage(productsRef, "products", setActualPage);

  return (
    <ProductsContainer ref={productsRef} id="products">
      <SectionTitle>Prémium kézműves termékeink</SectionTitle>
      <CardsContainer>
        {productsList.products.map((product: any) => {
          const { order, imgUrl, name, id, details } = product;
          return (
            <Card
              order={order}
              imageUrl={imgUrl}
              productName={name}
              key={id}
              details={details}
            />
          );
        })}

        {/* <Card order="normal" imageUrl={csajozosJPG} />
        <Card order="reverse" imageUrl={csilikeJPG} />
        <Card order="normal" imageUrl={edesemJPG} />
        <Card order="reverse" imageUrl={nemCsiplekJPG} />
        <Card order="normal" imageUrl={sargaIrigysegJPG} /> */}
      </CardsContainer>
    </ProductsContainer>
  );
};

export default Products;
