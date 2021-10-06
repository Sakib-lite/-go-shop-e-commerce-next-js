import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartIsVisible: false,
    emptyCart: true,
    showModal: false,
    loading: false,
    errorMessage: null,
    error: false,
  },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    hideCartButton(state) {
      state.cartIsVisible = false;
    },
    setEmptycartTrue(state) {
      state.emptyCart = true;
    },
    setEmptycartFalse(state) {
      state.emptyCart = false;
    },
    modalToggler(state) {
      state.showModal = !state.showModal;
    },
    showLoader(state) {
      state.loading = true;
    },
    hideLoader(state) {
      state.loading = false;
    },
    errorHandler(state, action) {
      (state.errorMessage = action.payload), (state.error = true);
    },
    hideErrorBar(state) {
      state.error = false;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
