// import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/festures/counterSlice";
export default function Test22() {
  // 通过useSelector直接拿到store中定义的value
  const { value } = useSelector((store) => store.counter);
  // 通过useDispatch 派发事件
  const dispatch = useDispatch();
  return (
    <div>
      test2
      <br />
      <div className="App">
        {/* 页面中应用的代码 */}
        <p>{value}</p>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          加
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          减
        </button>
      </div>
    </div>
  );
}
