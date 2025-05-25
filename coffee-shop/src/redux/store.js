import { configureStore } from "@reduxjs/toolkit";
import articles from "./arcticleSlice/slice";
import filter from "./filterSlice/filterSlice";

export const store = configureStore({
  reducer: {
    articles,
    filter,
  },
});

export default store;
