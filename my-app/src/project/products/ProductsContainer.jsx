import React from "react";
import { productsData } from "../navbar/data";
import SingleCard from "./SingleCard";

const ProductsContainer = () => {
  return (
    <ul>
      {productsData.map((product) => (
        <SingleCard product={product} key={product.id} />
      ))}
    </ul>
  );
};

export default ProductsContainer;
