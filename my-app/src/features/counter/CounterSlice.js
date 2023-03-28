import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "count-slice",
  initialState: { value: 10 },
  reducers: {
    inc: (state, action) => {
      state.value += action.payload;
    },
  },
});

export default counterSlice.reducer;

export const { inc } = counterSlice.actions;
