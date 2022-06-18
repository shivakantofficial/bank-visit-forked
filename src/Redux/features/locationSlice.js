import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  latitude: 0,
  longitude: 0,
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    updateLocation: (state, action) => {
      if (action.payload) {
        const { latitude, longitude } = action.payload;
        state.latitude = latitude;
        state.longitude = longitude;
      }
    },
  },
});

export const { updateLocation } = locationSlice.actions;

export default locationSlice.reducer;
