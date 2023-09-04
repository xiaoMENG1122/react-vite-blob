import pageConfig from "../../config/config"
// const pageConfig = require("../../config/config");
//深拷贝
function deepCopy (data) {
  if (data && typeof data === "object") {
    //针对函数的拷贝
    if (typeof data === "function") {
      let tempFunc = data.bind(null);
      tempFunc.prototype = deepCopy(data.prototype);
      return tempFunc;
    }

    switch (Object.prototype.toString.call(data)) {
      case "[object String]":
        return data.toString();
      case "[object Number]":
        return Number(data.toString());
      case "[object Boolean]":
        return new Boolean(data.toString());
      case "[object Date]":
        return new Date(data.getTime());
      case "[object Array]":
        var arr = [];
        for (let i = 0; i < data.length; i++) {
          arr[i] = deepCopy(data[i]);
        }
        return arr;

      //js自带对象或用户自定义类实例
      case "[object Object]":
        var obj = {};
        for (let key in data) {
          //会遍历原型链上的属性方法，可以用hasOwnProperty来控制 （obj.hasOwnProperty(prop)
          obj[key] = deepCopy(data[key]);
        }
        return obj;
    }
  } else {
    //string,number,bool,null,undefined,symbol
    return data;
  }
}

/**
 * 存储本地缓存
 * @param key  缓存名称
 * @param val  缓存数据
 */
function setlocalStorage (key, val) {
  localStorage.setItem(pageConfig.prefix + key, val);
}
/**
 * 获取本地缓存
 * @param key  缓存名称
 */
function getlocalStorage (key) {
  let item = localStorage.getItem(pageConfig.prefix + key);
  return item;
}
/**
 * 移除本地缓存
 * @param key  缓存名称
 */
function removelocalStorage (key) {
  localStorage.removeItem(pageConfig.prefix + key);
}

/**
 * 检测本地缓存
 * @param key   缓存名称
 * @returns {boolean|any}
 */
function checklocalStorage (key) {
  let userdata = getlocalStorage(key);
  if (userdata) {
    try {
      userdata = JSON.parse(userdata);
      return userdata;
    } catch (err) {
      return false;
    }
  } else {
    return false;
  }
}

/**
 * 检测是否为JSON
 * @param str
 * @returns {boolean|any}
 */
function isJSON (str) {
  if (typeof str == "string") {
    try {
      var obj = JSON.parse(str);
      if (typeof obj == "object" && obj) {
        return obj;
      } else {
        return false;
      }
    } catch (e) {
      // console.log("error：" + str + "!!!" + e);
      return false;
    }
  } else {
    return false;
  }
}

/**
 * 将base64转换为文件
 * @param dataurl    base64
 * @param filename  文件名称
 * @returns {File}  文件对象
 */
function dataURLtoFile (dataurl, filename) {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}
/**
 * 节流  一段时间，只能触发一次，再触发就忽略掉（每XX毫秒内只触发一次）
 * @param fn     处理函数
 * @param delay  时间 毫秒
 * @returns {(function(*): void)|*}
 */
function throttle (fn, delay) {
  let canRun = true; // 通过闭包保存一个标记
  return function () {
    // 在函数开头判断标记是否为true，不为true则return
    if (!canRun) return;
    // 立即设置为false
    canRun = false;
    // 将外部传入的函数的执行放在setTimeout中
    setTimeout(() => {
      // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。
      // 当定时器没有执行的时候标记永远是false，在开头被return掉
      fn.apply(this, arguments);
      canRun = true;
    }, delay);
  };
}

/**
 * 防抖  计划在一段时间后执行某任务，如果在这段时间内又一次触发，则重新等待（调用结束后，xx毫秒后触发一次）
 * @param fn     处理函数
 * @param delay  时间 毫秒
 * @returns {(function(*): void)|*}
 */
function debounce (fn, delay) {
  var timeout = null; // 创建一个标记用来存放定时器的返回值
  return function () {
    // 每当用户输入的时候把前一个 setTimeout clear 掉
    clearTimeout(timeout);
    // 然后又创建一个新的 setTimeout, 这样就能保证interval 间隔内如果时间持续触发，就不会执行 fn 函数
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}
let common = {
  deepCopy,
  setlocalStorage,
  getlocalStorage,
  removelocalStorage,
  checklocalStorage,
  dataURLtoFile,
  isJSON,
  debounce,
  throttle,
};


// 返回在vue模板中的调用接口
export default common;

export const zCommon = common;
