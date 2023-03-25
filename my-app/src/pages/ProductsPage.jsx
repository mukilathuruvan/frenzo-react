import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../assets/data";
const ProductsPage = () => {
  const [categories, setCategoires] = useState([]);
  useEffect(() => {
    setCategoires([...new Set(data?.map((product) => product.category))]);
  }, []);
  return (
    <div>
      <aside>
        <ul>
          {categories?.map((link) => (
            <Link to={`${link}`} key={link}>
              {link}
            </Link>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default ProductsPage;
