import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  buttonClicked: false,
};
const buttonClickedSlice = createSlice({
  name: "buttonClicked",
  initialState: initialState,
  reducers: {
    clicked: (state, action) => {
      state.buttonClicked = true;
    },
  },
});
export const { clicked } = buttonClickedSlice.actions;

export default buttonClickedSlice.reducer;
