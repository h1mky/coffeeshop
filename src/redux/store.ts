import { configureStore } from "@reduxjs/toolkit";

import articles from "./arcticleSlice/slice";
import filter from "./filterSlice/filterSlice";
import admin from "./adminRedux/adminSlice";

import type { ArticlesState } from "./arcticleSlice/types";
import type { FilterSliceState } from "./filterSlice/type";

export const store = configureStore({
  reducer: {
    articles,
    filter,
    admin,
  },
});

export type RootState = {
  admin: any;
  articles: ArticlesState;
  filter: FilterSliceState;
};
export type AppDispatch = typeof store.dispatch;
