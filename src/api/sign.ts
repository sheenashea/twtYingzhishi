import http from "../utils/request2"
import type { LoginData, LoginRes, RegisterRes ,RegisterData } from './types'

//登录
export function login(data: LoginData) {
    return http.post<LoginRes>('/login', data);
  }
  
  
//注册
export function register(data: RegisterData) {
    return http.post<RegisterRes>('/register', data);
  }

//找回密码
export function submit(data: RegisterData) {
  return http.post<RegisterRes>('/user/change', data);
}