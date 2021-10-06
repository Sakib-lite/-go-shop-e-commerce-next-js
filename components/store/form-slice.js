import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    users: [],
    formIsValid: false,
    loggedIn: false,
    inputBoxTouched: false,
    stateChanged: false,
  },
  reducers: {
    formValidator(state) {
      state.formIsValid = !state.formIsValid;
    },
    inputBoxTouchedHandler(state) {
      state.inputBoxTouched = true;
    },
    setInputBoxTouchedFalse(state) {
      state.inputBoxTouched = false;
    },
    replaceUserdata(state, action) {
      state.users = action.payload.users;
    },
    addUserToDatabase(state, action) {
      const newItem = action.payload;
      state.stateChanged = true;
      state.users.push({
        username: newItem.username,
        password: newItem.password,
        name: newItem.name,
        number: newItem.number,
        email: newItem.email,
      });
    },

    logOut(state) {
      state.loggedIn = false;
    },
    login(state) {
      state.loggedIn = true;
    },
  },
});

export const formActions = formSlice.actions;
export default formSlice.reducer;
