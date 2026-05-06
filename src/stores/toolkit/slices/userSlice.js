import { createSlice } from "@reduxjs/toolkit";

// ReduxToolkit slice store 생성.
export const userSlice = createSlice({
  name: "user-slice",
  initialState: {
    token: null,
  },
  reducers: {
    login(store, action) {
      store.token = action.payload;
    },
  },
});

export const userAction = userSlice.actions;
