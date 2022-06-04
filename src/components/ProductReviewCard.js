import React from "react";
import "../styles/ProductReviewCard.css";

const ProductReviewCard = ({ image, review, name, price }) => {
  return (
    <div className="ProductReviewCard">
      <img src={image} alt={`card image`} />
      <h5>{review}</h5>
      <div className="product_price">
        <span>{name}</span>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default ProductReviewCard;
