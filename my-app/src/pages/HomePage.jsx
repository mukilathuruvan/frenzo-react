import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CakeView from "../features/cake/CakeView";
import { orderIce } from "../features/ice/iceSlice";
import UserPage from "../features/user/UserPage";
const HomePage = () => {
  const [orderCount, setOrderCount] = useState(0);
  const dispatch = useDispatch();
  return (
    <div>
      <UserPage />
    </div>
  );
};

export default HomePage;
