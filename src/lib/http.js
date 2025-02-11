// @ts-nocheck
import axios from "axios";
// import { getAuthClient } from '@mdfe/auth';
// import { showMessageBox } from '@mdfe/bmis-ui';
// import { inMicroApp } from '@mdfe/stark-app';
// import lyra from '@mdfe/lyra';
import { devToken, devJiGouXX } from "@/lib/login";

// 创建axios实例
const http = axios.create({
  baseURL: "/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
  timeout: 50000,
  withCredentials: true,
});

// 请求拦截器
http.interceptors.request.use(
  async (config) => {
    // 可以在这里添加请求头等信息
    // config.headers['Authorization'] = 'your token';
    let userInfoHeaders = null;
    let Authorization = null;
    //开发环境用本地写死的假token

    Authorization = devToken;
    userInfoHeaders = devJiGouXX;
    // if (!inMicroApp) {
    //   Authorization = devToken;
    //   userInfoHeaders = devJiGouXX;
    // } else {
    //   //生产环境拿lyra给的
    //   const auth = getAuthClient();
    //   Authorization = await auth.getAuthorizationHeaderValue();
    //   userInfoHeaders = lyra.getShareDataSync();
    // }
    config.headers["Authorization"] = Authorization;
    config.params = config.params || {};
    config.data = config.data || {};

    userInfoHeaders.WeiZhiMC = encodeURIComponent(userInfoHeaders.weiZhiMC);
    userInfoHeaders.KeShiMC = encodeURIComponent(userInfoHeaders.keShiMC);
    userInfoHeaders.BingQuMC = encodeURIComponent(userInfoHeaders.bingQuMC);
    userInfoHeaders.JiGouMC = encodeURIComponent(userInfoHeaders.jiGouMC);
    userInfoHeaders.diZhiSFMC = encodeURIComponent(userInfoHeaders.diZhiSFMC);
    userInfoHeaders.diZhiSDQMC = encodeURIComponent(userInfoHeaders.diZhiSDQMC);
    userInfoHeaders.diZhiXQMC = encodeURIComponent(userInfoHeaders.diZhiXQMC);
    userInfoHeaders.diZhiXZJDMC = encodeURIComponent(
      userInfoHeaders.diZhiXZJDMC
    );
    userInfoHeaders.WeiZhiLXMC = encodeURIComponent(userInfoHeaders.WeiZhiLXMC);
    userInfoHeaders.WeiZhiDLMC = encodeURIComponent(userInfoHeaders.WeiZhiDLMC);

    config.headers = {
      ...config.headers,
      ...userInfoHeaders,
    };
    return config;
  },
  (error) => {
    // 请求错误处理
    return Promise.reject(error);
  }
);

// 响应拦截器
http.interceptors.response.use(
  (response) => {
    // 这里的 res 是后台返回的数据
    const res = Object(response.data);
    //目前先加一层判断 因为mock数据没做code
    if (res.code !== undefined) {
      // 如果 code 为 0 表示正常数据，那就直接返回 data
      if (res.code === 0) return res.data;
      // if (response.config.errLanJieBZ !== 1) showMessageBox(res);
      return Promise.reject(
        new Error(
          res.message || `出现未知的系统错误，错误代码: ${res.code || -1}`
        )
      );
    } else {
      return res;
    }
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          break;
        case 400:
          return Promise.reject(
            new Error(`系统内部错误：${error.response.data.title}`)
          );
      }
    }
    // 响应错误处理
    return Promise.reject(error);
  }
);

export default http;
