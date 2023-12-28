import { configureStore } from "@reduxjs/toolkit";
import buttonClickedReducer, { clicked } from "./saveClicked/saveClicked";

const store = configureStore({
  reducer: {
    buttonClicked: buttonClickedReducer,
  },
});

export default store;
