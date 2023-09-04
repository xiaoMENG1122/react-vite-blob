

// import store from "../../store";
import apiAjax from "../api/index";
// import router from "./../../router/index";
//显示loading 把数据给状态库，这里就给redux把
const $loadingShow = function () {
  // store.commit("setDataByName", { key: "fullscreenLoading", val: true });
};
//隐藏loading
const $loadingHide = function () {
  // store.commit("setDataByName", { key: "fullscreenLoading", val: false });
};
/**
 * 全局请求方法
 * 方式一：$post(method, url, postObj, isShowLoding, channel)
 * @returns {Promise<unknown>}
 * 方式二：$post(method,url, postObj, success, failure, isShowLoding, channel)
 * @returns null
 *
 * @param method   请求方式  get post put delete
 * @param url      请求地址
 * @param postObj  请求参数
 * @param success  成功回调
 * @param failure  失败回调
 * @param isShowLoding  是否loading
 * @param channel  请求地址渠道
 */
const $request = function () {
  let method, url, postObj, success, failure, isShowLoding, channel;
  method = arguments[0];
  //判断传参是否正确
  if (!["get", "post ", "put", "delete"].includes(method)) {
    return failure && failure('方法传参错误，"get", "post ", "put", "delete"这几个你选一个喜欢的呀（开玩笑是选正确的）')
  }
  url = arguments[1];
  postObj = arguments[2];
  //4号/5号 参数是函数，则视为方式二
  if (typeof arguments[3] == "function" || typeof arguments[4] == "function") {
    success = arguments[3];
    failure = arguments[4];
    isShowLoding = arguments[5];
    channel = arguments[6];
  } else {
    isShowLoding = arguments[3];
    channel = arguments[4];
  }
  if (isShowLoding) {
    $loadingShow("加载中");
  }
  return new Promise((resolve, reject) => {
    apiAjax.get(
      url,
      postObj,
      function (msg) {
        if (isShowLoding) {
          $loadingHide();
        }
        if (success) {
          success(msg);
        } else {
          resolve(msg);
        }
      },
      function (err) {
        if (isShowLoding) {
          $loadingHide();
        }
        if (failure) {
          failure(err);
        } else {
          reject(err);
        }
      },
      channel
    );
  });
};

const $promiseAll = function (promiseList, success, fail) {
  Promise.all(promiseList.map((p) => p.catch((e) => e)))
    .then((res) => {
      if (success) {
        success(res);
      }
    })
    .catch((error) => {
      //console.log("error=>", error);
      if (fail) {
        fail(error);
      }
    });
};

const zGlobalFun = {
  $loadingShow,
  $loadingHide,
  $request,
  $promiseAll,
};

//const uGlobal = {
//  install(Vue) {
//    Vue.provide("$uGlobal", uGlobalFun);
//  },
//  uGlobal: uGlobalFun,
//};
export default zGlobalFun;
export const zGlobal = zGlobalFun;
