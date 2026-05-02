import { createSlice } from "@reduxjs/toolkit";

// ReduxToolkit slice store 생성.
export const articleSlice = createSlice({
  name: "article-slice", // action의 type으로 사용될 이름.
  initialState: {
    count: 0,
    result: [],
    pagination: {},
    token: null,
    loginErrors: null,
    viewPageNo: 0,
  },
  reducers: {
    refresh(state, action) {
      const { count, result, pagination } = action.payload;
      state.count = count;
      state.result = result;
      state.pagination = pagination;
    },
    loginSuccess(state, action) {
      state.token = action.payload.token;
      state.loginErrors = null;
    },
    loginFailure(state, action) {
      state.loginErrors = action.payload;
    },
    setViewPageNo(state, action) {
      state.viewPageNo = action.payload;
    },
    addArticleSuccess(state, action) {
      state.result = [action.playload, ...state.result];
      state.count += 1;
    },
    addArticleFailure(state, action) {
      state.loginErrors = action.playload;
    },
  },
});

export const articleAction = articleSlice.actions;
export default articleSlice.reducer;
