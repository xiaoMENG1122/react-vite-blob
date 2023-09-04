// 引用axios
import axios from "axios";
import pageConfig from "../config/config"
import qs from "qs";

// 创建axios实例
const instance = axios.create({
  // 基本请求路径的抽取
  baseURL: pageConfig.root,
  // 这个时间是你每次请求的过期时间，这次请求认为5秒之后这个请求就是失败的
  timeout: 5000,
});


// 自定义判断元素类型JS
function toType (obj) {
  return {}.toString
    .call(obj)
    .match(/\s([a-zA-Z]+)/)[1]
    .toLowerCase();
}

// 参数过滤函数
function filterNull (o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key];
    }
    if (toType(o[key]) === "string") {
      o[key] = o[key].trim();
    } else if (toType(o[key]) === "object") {
      o[key] = filterNull(o[key]);
    } else if (toType(o[key]) === "array") {
      o[key] = filterNull(o[key]);
    }
  }
  return o;
}



function apiAxios (method, url, params, success, failure, channelType = 'default') {
  if (params) {
    params = filterNull(params);
  }
  // let apiData = apiEncryptHandle(url, params, header, channelType);
  let header
  if (channelType === 'default') {
    header = {
      'Content-Type': 'application/json', // 设置请求的内容类型为 JSON
      // 'Authorization': 'Bearer YourAccessToken', // 设置授权令牌（示例）
    }
  }
  instance({
    method: method,
    url: url,
    // data: method === 'POST' || method === 'PUT' ? qs.stringify(params) : null,
    data: method === "POST" || method === "PUT" ? params : null,
    params:
      method === "GET" || method === "DELETE" ? qs.stringify(params) : null,
    headers: header,
    // responseType: 'json',
  })
    .then(function (res) {
      // console.log(res);
      try {
        const response = res
        if (response.status) {
          if (success) {
            success(response.data);
          }
        } else {
          failure(response.data);
        }
      } catch (e) {
        console.log(e);
        failure({ msg: "数据异常，请联系管理员" });
      }
    })
    .catch(function (err) {
      //let res = err.response
      if (err) {
        if (failure) {
          let res = { msg: "系统繁忙，请稍后重试" };
          failure(res);
        }
        console.log("api error, HTTP CODE: " + url);
        console.log(err);
      }
    });
}

var apiAjax = {
  get: function (url, params, success, failure) {
    return apiAxios("GET", url, params, success, failure);
  },
  post: function (url, params, success, failure, channel) {
    return apiAxios("POST", url, params, success, failure, channel);
  },
  put: function (url, params, success, failure) {
    return apiAxios("PUT", url, params, success, failure);
  },
  delete: function (url, params, success, failure) {
    return apiAxios("DELETE", url, params, success, failure);
  },
};


export default apiAjax;
export const $http = apiAjax;
