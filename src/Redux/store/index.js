import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import locationSlice from "../features/locationSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    location: locationSlice,
  },
});
