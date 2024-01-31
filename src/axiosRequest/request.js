import axios from 'axios'

//? Create a new instance of axios with a custom config
const request = axios.create({
  baseURL: "/path",
  timeout: 10000,
  header:{}
})


//? Add a request interceptor
request.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  });

//? Add a response interceptor
request.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});
  
export default request