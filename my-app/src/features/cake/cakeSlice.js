import { createSlice } from "@reduxjs/toolkit";
import { orderIce } from "../ice/iceSlice";

const initialState = {
  count: 10,
};

const cakeSlice = createSlice({
  name: "cakeSlice",
  initialState,
  reducers: {
    orderCake: (state, action) => {
      state.count -= action.payload;
    },
    restockCake: (state, action) => {
      state.count += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(orderIce, (state, action) => {
      const count = action.payload / 5;
      state.count -= count;
    });
  },
});

export default cakeSlice.reducer;

export const { orderCake, restockCake } = cakeSlice.actions;
