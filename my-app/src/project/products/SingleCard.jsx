import React from "react";

const SingleCard = ({ product }) => {
  return (
    <li>
      <img src={product.img} alt="" />
      <div className="card-content">
        <h3>{product.productName}</h3>
        <span>{product.price}</span>
        <span>
          <h5>{product.rating}</h5>
        </span>
      </div>
    </li>
  );
};

export default SingleCard;
