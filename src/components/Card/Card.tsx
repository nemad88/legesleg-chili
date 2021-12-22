import { CardWrapper, ProductName, Details } from "./Card.style";

interface ICard {
  order: "normal" | "reverse";
  imageUrl: string;
  productName: string;
  details: string;
}

const Card: React.FC<ICard> = ({ order, imageUrl, productName, details }) => {
  return (
    <CardWrapper elementOrder={order} imageUrl={imageUrl}>
      <div className="card-picture" />
      <div className="card-detail">
        <ProductName>{productName}</ProductName>
        <Details>{details}</Details>
      </div>
    </CardWrapper>
  );
};

export default Card;
