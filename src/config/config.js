/**
 * Created by zcr on 2018/1/25.
 */

let proxySource = {
  "/productionApi": "",
  "/devapi": "http://localhost:3000/",
};
let proxyRoot
let isTest = true
if (isTest) {
  proxyRoot = proxySource["/devapi"]
}
export default {
  prefix: "adminTemplate_", //项目前缀
  xAppVersion: "1.0.0", //版本
  base_path: "", //  项目地址
  proxySource: proxySource, //代理源配置
  proxyRoot: proxyRoot, //代理源配置
  proxyUrl: {
    defult: "api/",
    defultTest: "AdminTemplate/public/index.php",
  },
  publicKey: "LTAI4GKXdB0hcaFS78629b526a153b17",
  platform: {
    name: "管理后台模板",
    des: "研发一部",
  },
  isTest: isTest, //是否测试环境
};
