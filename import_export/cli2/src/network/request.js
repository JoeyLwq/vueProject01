import axios from 'axios'

/*创建实例*/
let axiosInstance = axios.create({
  baseURL: 'http://httpbin.org',
  timeout: 5000,
});

/*拦截器*/
axiosInstance.interceptors.request.use(config=>{
  console.log(config);
  return config
},error => {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(res=>{
  return res
},error => {
  console.log(error);
});

/*一般请求*/
export function request(config) {
  return axiosInstance(config)
}

/*多重请求*/
export function multiRequest(requests) {
  return axios.all(requests)
}
