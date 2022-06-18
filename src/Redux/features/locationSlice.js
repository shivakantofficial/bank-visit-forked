import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  latitude: 19.2226072,
  longitude: 72.9817542,
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
