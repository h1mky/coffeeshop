import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  currentFilter: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload.toLowerCase();
    },
    setCurrentFilter(state, action) {
      state.currentFilter =
        action.payload === state.currentFilter ? "" : action.payload;
    },
  },
});

export const { setSearchValue, setCurrentFilter } = filterSlice.actions;
export default filterSlice.reducer;
