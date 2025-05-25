import type { RootState } from "./store";

export const selectArticles = (state: RootState) => state.articles.articles;
export const selectSelectedArticles = (state: RootState) =>
  state.articles.selectedArticles;
export const selectSelectedArticle = (state: RootState) =>
  state.articles.selectedArticle;
export const selectArticlesLoading = (state: RootState) =>
  state.articles.loading;
export const selectArticlesError = (state: RootState) => state.articles.error;

export const selectSearchValue = (state: RootState) => state.filter.searchValue;
export const selectCurrentFilter = (state: RootState) =>
  state.filter.currentFilter;
