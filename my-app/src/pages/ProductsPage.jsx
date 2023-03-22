import React, { useEffect } from "react";
import { data } from "../assets/data";
import connect from "../context/connect";
const createProduct = async (product) => {
  const response = await connect.post("/products", product);
  console.log(response);
};
const ProductsPage = () => {
  useEffect(() => {
    data.forEach((product) => {
      createProduct(product);
    });
  }, []);
  return <div></div>;
};

export default ProductsPage;
