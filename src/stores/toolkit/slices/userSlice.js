import { createSlice } from "@reduxjs/toolkit";

// ReduxToolkit slice store 생성.
export const userSlice = createSlice({
  name: "user-slice",
  initialState: {
    token: null,
    info: null,
  },
  reducers: {
    logout(store) {
      store.token = null;
      store.info = null;
    },
    loadMyInfo(store, action) {
      store.info = action.payload;
    },
    autoLogin(store) {
      // session Storage에 있는 token을 가져와서 userSlice에 등록한다.
      const token = sessionStorage.getItem("token");
      if (token) {
        store.token = token;
      }
    },
    login(store, action) {
      store.token = action.payload;
    },
  },
});

export const userAction = userSlice.actions;
