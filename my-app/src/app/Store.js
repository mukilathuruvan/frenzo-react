import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../api/userApi";
import cakeSlice from "../features/cake/cakeSlice";
import counterReducer from "../features/counter/CounterSlice";
import iceSlice from "../features/ice/iceSlice";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    cake: cakeSlice,
    ice: iceSlice,
    user: userSlice,
  },
});

export default store;
