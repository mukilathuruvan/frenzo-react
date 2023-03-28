import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { orderCake } from "../features/cake/cakeSlice";
import CakeView from "../features/cake/CakeView";
import { orderIce } from "../features/ice/iceSlice";
const HomePage = () => {
  const [orderCount, setOrderCount] = useState(0);
  const dispatch = useDispatch();
  return (
    <div>
      <CakeView />

      <input
        type="number"
        value={orderCount}
        onChange={(e) => setOrderCount(Number(e.target.value))}
      />
      <button onClick={() => dispatch(orderIce(orderCount))}>OrderCake</button>
    </div>
  );
};

export default HomePage;
