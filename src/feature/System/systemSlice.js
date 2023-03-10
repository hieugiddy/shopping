import { createSlice } from "@reduxjs/toolkit";

const systemSlice = createSlice({
  name: "system",
  initialState: {
    isDarkMode: false,
  },
  reducers: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

const { actions, reducer } = systemSlice;
export const { toggleDarkMode } = actions;
export default reducer;
