import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthorized: false,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setisAuthorized(state, action) {
      state.isAuthorized = action.payload;
    },
  },
});

export const { setisAuthorized } = adminSlice.actions;
export default adminSlice.reducer;
