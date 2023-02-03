import axios from 'axios'
import type { AxiosInstance } from 'axios'



//创建实例
const service: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 30000
})

import type { AxiosError, AxiosRequestConfig } from 'axios'
import { message as Message } from 'ant-design-vue'
 
/* 请求拦截器 */
service.interceptors.request.use((config: any) => {
  //  token 
    const token =localStorage.getItem('token')//此处换成自己获取回来的token，通常存在在cookie或者store里面
        if (token) {
          // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
          if (config && config.headers){
          config.headers['X-Token'] = token
          config.headers.Authorization =  + token     
          }  
    }
//
  return config
}, (error: AxiosError) => {
  Message.error(error.message);
  return Promise.reject(error)
})

import type { AxiosResponse } from 'axios'
 
/* 响应拦截器 */
service.interceptors.response.use((response: AxiosResponse) => {
  const { code, message, data } = response.data
 
  // 根据自定义错误码判断请求是否成功
  if (code === 0) {
    // 将组件用的数据返回
    return data
  } else {
    // 处理业务错误。
    Message.error(message)
    return Promise.reject(new Error(message))
  }
}, (error: AxiosError) => {
  // 处理 HTTP 网络错误
  let message = ''
  // HTTP 状态码
  const status = error.response?.status
  switch (status) {
    case 401:
      message = 'token 失效，请重新登录'
      // 这里可以触发退出的 action
      break;
    case 403:
      message = '拒绝访问'
      break;
    case 404:
      message = '请求地址错误'
      break;
    case 500:
      message = '服务器故障'
      break;
    default:
      message = '网络连接故障'
  }
  
  Message.error(message) 
  return Promise.reject(error)
})

/* 导出封装的请求方法 */
export const http = {
    get<T=any>(url: string, config?: AxiosRequestConfig) : Promise<T> {
      return service.get(url, config)
    },
   
    post<T=any>(url: string, data?: object, config?: AxiosRequestConfig) :Promise<T> {
      return service.post(url, data, config)
    },
   
    put<T=any>(url: string, data?: object, config?: AxiosRequestConfig) :Promise<T> {
      return service.put(url, data, config)
    },
   
    delete<T=any>(url: string, config?: AxiosRequestConfig) : Promise<T> {
      return service.delete(url, config)
    }
  }

export default http