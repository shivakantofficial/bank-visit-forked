import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    updateLoadingStatus: (state, action) => {
      return action.payload;
    },
  },
});

export const { updateLoadingStatus } = loaderSlice.actions;

export default loaderSlice.reducer;
