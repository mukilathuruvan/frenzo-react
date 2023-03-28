import React from "react";
import { useSelector } from "react-redux";

const CakeView = () => {
  const cakeCount = useSelector((store) => store.cake.count);
  const iceCount = useSelector((store) => store.ice.count);

  return (
    <div>
      <h1>Cake : {cakeCount}</h1>
      <h1>Ice : {iceCount}</h1>
    </div>
  );
};

export default CakeView;
