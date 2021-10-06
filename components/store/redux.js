import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";
import formSlice from "./form-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    ui: uiSlice,
    form: formSlice,
  },
});

export default store;
