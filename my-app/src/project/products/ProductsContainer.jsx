import React from "react";
import { productsData } from "../navbar/data";
import SingleCard from "./SingleCard";
import "./products.css";
const ProductsContainer = () => {
  return (
    <ul className="grid-container list-none">
      {productsData.map((product) => (
        <SingleCard product={product} key={product.id} />
      ))}
    </ul>
  );
};

export default ProductsContainer;
