import axios from "axios";

// 创建基于 Axios 的实例
const instance = axios.create({
  baseURL: "http://interview-api-t.itheima.net/h5/",
  timeout: 5000, // 请求超时时间
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    // console.log("请求拦截器:", config);
    // 可以在请求头中添加 token 等信息
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    // console.error("请求拦截器错误:", error);
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应数据做些什么
    // console.log("响应拦截器:", response);
    return response.data;
  },
  (error) => {
    // 对响应错误做些什么
    console.error("响应拦截器错误:", error);
    return Promise.reject(error);
  }
);

export default instance;
