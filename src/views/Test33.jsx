// import React from "react";
import $http from "../api/index";
import { useState, useEffect } from "react";
import { addListenerHello } from "../utils/enevt";
import Test44 from "./Test44";
export default function Test33() {
  const [message, setMessage] = useState("Hello");
  // 测试api
  const Api = () => {
    useEffect(() => {
      // 注册事件监听，把事件触发时要调用的处理函数传递过去。
      // 运行一次即可
      addListenerHello(helloHandler);
    }, []);

    // 组件间通讯事件触发时的处理。
    function helloHandler(args) {
      setMessage("Hello, " + args + "!");
    }

    $http.get(
      "/devapi",
      "",
      (response) => {
        // 处理成功的响应
        console.log(response.data);
      },
      (error) => {
        // 处理错误
        console.error("Error:", error);
      }
    );
  };
  return (
    <div>
      test33
      <hr />
      <Test44 />
      <hr />
      {message}
      <hr />
      <button onClick={Api}>请求</button>
    </div>
  );
}
