// import React from "react";
import { useState } from "react";
import { doHello } from "../utils/enevt";
export default function Test44() {
  const [message, setMessage] = useState("");

  function hello() {
    // 触发组件间通讯的事件，传递参数。
    doHello("world");

    setMessage("I said hello.");
  }
  return (
    <div>
      test4
      <br />
      <button onClick={hello}>say hello</button>
      <br />
      {message}
    </div>
  );
}
