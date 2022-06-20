import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import locationSlice from "../features/locationSlice";
import banklistSlice from "../features/banklistSlice";
import loaderSlice from "../features/loaderSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    location: locationSlice,
    bankList: banklistSlice,
    loader: loaderSlice,
  },
});
