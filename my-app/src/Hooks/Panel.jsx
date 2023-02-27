import React, { useState } from "react";
import { productsData } from "../project/navbar/data";
import Button from "../components/Button";
const Panel = () => {
  const [index, setIndex] = useState(0);
  let post = productsData[index];
  const handleNext = () => {
    if (productsData.length - 1 > index) {
      setIndex(index + 1);
    }
  };
  const handlePre = () => {
    if (0 < index) {
      setIndex(index - 1);
    }
  };
  return (
    <div>
      <h1>
        {index + 1}/{productsData.length}
      </h1>
      <>
        <img src={post?.img} alt="" />
        <h1>{post?.productName}</h1>
        <h4>{post?.price}</h4>
      </>
      <>
        <Button
          size={"lg"}
          variant="primary"
          rounded
          handler={handlePre}
          disabled={index === 0}>
          pre
        </Button>
        <Button
          size={"lg"}
          variant="danger"
          rounded
          handler={handleNext}
          disabled={productsData.length - 1 <= index}>
          next
        </Button>
      </>
    </div>
  );
};

export default Panel;
