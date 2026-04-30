import { createSlice } from "@reduxjs/toolkit";

// ReduxToolkit slice store 생성.
export const todoSlice = createSlice({
  name: "todo-slice", // action의 type으로 사용될 이름.
  initialState: {
    // store = 가변객체 ==> 값을 직접적으로 바꿀수없음. ==> list가 바뀌게 만들어줌.
    list: [],
  }, // todo-slice가 사용할 초기 state 값.
  reducers: {
    // 안의 함수가 state를 변경한다.
    refresh(store, action) {
      // store의 메모리는 바뀌지않음. list의 메모리가 바뀜
      // ==> toolkit의 요구사항 만족(가변객체의 메모리가 바뀌면 안된다.)
      store.list = action.payload;
    },
    doneItem(store, action) {
      // action == done 처리할 todo의 ID가 전달.
      // store.list에서 id가 action과 같은 todo의 인덱스를 찾아온다.
      const index = store.list.findIndex((todo) => todo.id === action.payload);
      store.list[index].done = true;
    },
    allDone(store) {
      // 모든것을 done처리하므로 사실상 action 필요X ==> action 삭제
      store.list = store.list.map((todo) => ({ ...todo, done: true }));
    },
  },
});

// reducer를 호출하는 action data객체
export const todoAction = todoSlice.actions;
console.log("TodoAction", todoAction);
