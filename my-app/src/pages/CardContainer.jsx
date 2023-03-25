import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../assets/data";

const CardContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data);
  }, []);

  console.log(products);
  return (
    <div>
      <h1>Card Page</h1>
      {products
        ?.filter((product) => product.category === category)
        ?.map((product) => (
          <h5 key={product.id}>{product.name}</h5>
        ))}
    </div>
  );
};

export default CardContainer;
