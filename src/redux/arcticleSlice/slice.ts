import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { request } from "../../hooks/https.hook";

import type { Article, ArticlesState } from "./types";

export const fetchArticle = createAsyncThunk<Article[]>(
  "article/fetchArticle",
  async () => {
    return await request(
      "https://api.render.com/deploy/srv-d0revlmmcj7s7387dg9g?key=l5fJAr2pN0M/cards"
    );
  }
);

export const fetchArticleById = createAsyncThunk<Article, number>(
  "articles/fetchById",
  async (id) =>
    await request(
      `https://api.render.com/deploy/srv-d0revlmmcj7s7387dg9g?key=l5fJAr2pN0M/${id}`
    )
);

const initialState: ArticlesState = {
  articles: null,
  selectedArticles: null,
  loading: false,
  error: null,
  selectedArticle: null,
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setSelectedArticles(state, action: PayloadAction<Article[]>) {
      state.selectedArticles = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticle.fulfilled, (state, action) => {
        state.articles = action.payload;
        state.selectedArticles = action.payload;
        state.loading = false;
      })
      .addCase(fetchArticle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Unknown error";
      })
      .addCase(fetchArticleById.fulfilled, (state, action) => {
        state.selectedArticle = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchArticleById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

export const { setSelectedArticles } = articlesSlice.actions;
export default articlesSlice.reducer;
