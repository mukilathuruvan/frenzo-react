import React, { useState } from "react";
import Button from "../../components/Button";
import { data } from "../../database/scorce";
const HomePage = () => {
  const [category, setCategory] = useState([
    ...new Set(data.map((product) => product.category)),
  ]);

  const [condition, setCondition] = useState("");

  console.log(condition);
  return (
    <div>
      <ul>
        {category.map((cate) => (
          <li key={cate}>
            <Button
              variant={"primary"}
              rounded
              size={"lg"}
              handler={() => setCondition(cate)}>
              {cate}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
