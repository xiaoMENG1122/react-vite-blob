/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import router from "./router/index";
import { useRoutes, useLocation, useNavigate } from "react-router-dom";
import "./App.scss";

function ToHome() {
  const navigateTo = useNavigate();
  useEffect(() => {
    // 加载完组件之后执行这里的代码
    navigateTo("/homelist");
  }, []);
  return <div></div>;
}
function ToLogin() {
  const navigateTo = useNavigate();
  useEffect(() => {
    // 加载完组件之后执行这里的代码
    navigateTo("/Login");
  }, []);
  return <div></div>;
}
// 全局路由拦截器
function BeforRouterEnter() {
  const outlet = useRoutes(router);
  const token = true; //之后本地读取或者redux去拿
  const location = useLocation();
  if (location.pathname === "/Login" && token) {
    return <ToHome />;
  }
  if (location.pathname !== "/Login" && !token) {
    return <ToLogin />;
  }
  return outlet;
}

function App() {
  return (
    <>
      <div className="App">
        <BeforRouterEnter />
      </div>
    </>
  );
}

export default App;
