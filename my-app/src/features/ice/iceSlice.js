import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 50,
};

const iceSlice = createSlice({
  name: "iceSlice",
  initialState,
  reducers: {
    orderIce: (state, action) => {
      state.count -= action.payload;
    },
    restockIce: (state, action) => {
      state.count += action.payload;
    },
  },
});

export default iceSlice.reducer;

export const { orderIce, restockIce } = iceSlice.actions;
