import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { getToken, serverUrl } from "./tools";

const instance = axios.create({
  timeout: 5000,
  baseURL: serverUrl,
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    NProgress.start();
    config.headers["token"] = getToken(); // 添加自定义请求头
    return config;
  },
  function (error) {
    // Do something with request error
    NProgress.done();
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    NProgress.done();
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    NProgress.done();
    console.dir(error); // 此处拦截状态码进行处理
    // 如果返回401，跳转到登录页
    if (error.response.status == 401) {
      window.location.href = "/#/login";
    }
    return Promise.reject(error);
  }
);

export const get = (url: string, params = {}) =>
  instance.get(url, { params }).then((res) => res.data);

export const post = (url: string, data = {}) =>
  instance.post(url, data).then((res) => res.data);

export const put = (url: string, data = {}) =>
  instance.put(url, data).then((res) => res.data);

export const patch = (url: string, data = {}) =>
  instance.patch(url, data).then((res) => res.data);

export const del = (url: string) =>
  instance.delete(url).then((res) => res.data);
