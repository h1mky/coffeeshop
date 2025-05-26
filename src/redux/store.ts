import { configureStore } from "@reduxjs/toolkit";

import articles from "./arcticleSlice/slice";
import filter from "./filterSlice/filterSlice";

import type { ArticlesState } from "./arcticleSlice/types";
import type { FilterSliceState } from "./filterSlice/type";

export const store = configureStore({
  reducer: {
    articles,
    filter,
  },
});

export type RootState = {
  articles: ArticlesState;
  filter: FilterSliceState;
};
export type AppDispatch = typeof store.dispatch;
