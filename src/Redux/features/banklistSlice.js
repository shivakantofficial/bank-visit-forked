import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const banklistSlice = createSlice({
  name: "bankList",
  initialState,
  reducers: {
    setBanklist: (state, action) => action.payload,
  },
});

export const { setBanklist } = banklistSlice.actions;

export default banklistSlice.reducer;
