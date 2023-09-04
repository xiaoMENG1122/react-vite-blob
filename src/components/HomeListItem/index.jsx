/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import sy from "./HomeListItem.module.scss";
export default function Index(props) {
  // const [itemList, setItemList] = useState([]);
  // useEffect(() => {
  //   // eslint-disable-next-line react/prop-types
  //   setItemList(props.listValue);
  // }, [props.listValue]);
  let itemList = props.listValue;
  if (!props.listValue) {
    props.listValue = [];
  }
  return (
    <>
      {itemList.map((item) => (
        <div className={sy.item}>
          <div className={sy.itemTop}>
            <h3 className={sy.itemTopTitle}>{item.title}</h3>
            <span className={sy.itemTopDate}>{item.date}</span>
          </div>
          <div className={sy.itemBottom}>{item.message}</div>
        </div>
      ))}
    </>
  );
}
