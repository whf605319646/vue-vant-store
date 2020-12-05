let debug = process.env.NODE_ENV === "development";
export const global = window;
console.dir(global);
const assetsUrl = `${location.protocol}//${location.host}`.replace(/\/$/, "");

// let socketHost = "http://192.168.101.40:30072";
let baseUrl = debug?"http://192.168.101.40:8034":"https://yapi.baidu.com/mock/18999";

/**
 * 后端地址
 * @type {string}
 */
export const commonSetting = {
    ...{
        // 后端地址
        baseUrl: baseUrl, // "http://192.168.101.39:8084/V3/" : "",
        // sockjsUrl: socketHost + "/stomp-websocket"
    },
    // openRSA: true, // 是否对密码进行加密传输
    ...global.commonSetting,
    // 前端包路径
    // assetsUrl: debug ? assetsUrl : global.commonSetting.assetsUrl
};