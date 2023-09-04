/* eslint-disable react/no-children-prop */
// import React from "react";
// import $http from "../api/index";
// import { useState, useEffect } from "react";
import sy from "./HomeList.module.scss";
import HomeListItem from "../../components/HomeListItem";
import Profile from "../../components/Profile";
export default function Test11() {
  const tsest = {
    height: "40vh",
    background: "#df8282",
  };
  const listValue = [
    {
      id: 1,
      title: "文章标题",
      message: "文章简介。。。。",
      date: "2023-01-01",
    },
    {
      id: 2,
      title: "文章标题",
      message: "文章简介。。。。",
      date: "2023-01-01",
    },
    {
      id: 3,
      title: "文章标题",
      message: "文章简介。。。。",
      date: "2023-01-01",
    },
    {
      id: 4,
      title: "文章标题",
      message: "文章简介。。。。",
      date: "2023-01-01",
    },
  ];
  return (
    <div className={sy.homelist}>
      <div style={tsest}></div>
      <div className={sy.infoBox}>
        <div className={sy.itemBox}>
          <HomeListItem listValue={listValue} />
        </div>
        <Profile></Profile>
      </div>
    </div>
  );
}
