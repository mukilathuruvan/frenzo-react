import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetcher = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return await response.data;
};

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const userThunk = createAsyncThunk("getUsers", fetcher);

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userThunk.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isError = false;
        state.isLoading = false;
      })
      .addCase(userThunk.rejected, (state, action) => {
        state.data = [];
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(userThunk.pending, (state, action) => {
        state.data = [];
        state.isError = false;
        state.isLoading = true;
      });
  },
});

export default userSlice.reducer;
