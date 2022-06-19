import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const banklistSlice = createSlice({
  name: "bankList",
  initialState,
  reducers: {
    setBanklist: (state, action) => action.payload,
    updateVisitStatus: (state, action) => {
      const { placeId, value } = action.payload;
      if (placeId) {
        if (Array.isArray(state)) {
          const index = state.findIndex((el) => el.place_id === placeId);
          if (index !== -1) {
            const bankBranch = state[index];
            bankBranch.visitStatus = value;
          }
        }
      }
    },
  },
});

export const { setBanklist, updateVisitStatus } = banklistSlice.actions;

export default banklistSlice.reducer;
