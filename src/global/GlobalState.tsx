import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainState: "" || null,
  toggle: false,
};

const GlobalState = createSlice({
  name: "state",
  initialState,
  reducers: {
    user: (state, { payload }) => {
      state.mainState = payload;
    },
    logOut: (state) => {
        state.mainState = null
    },
    ontoggle: (state, {payload})=> {
        state.toggle = payload
    }
  },
});

export const {logOut, user, ontoggle} = GlobalState.actions;

export default GlobalState.reducer;
