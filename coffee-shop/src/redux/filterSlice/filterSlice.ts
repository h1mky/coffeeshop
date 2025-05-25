import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

import type { FilterSliceState } from "./type";

const initialState: FilterSliceState = {
  searchValue: "",
  currentFilter: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload.toLowerCase();
    },
    setCurrentFilter(state, action: PayloadAction<string>) {
      state.currentFilter =
        action.payload === state.currentFilter ? "" : action.payload;
    },
  },
});

export const { setSearchValue, setCurrentFilter } = filterSlice.actions;
export default filterSlice.reducer;
