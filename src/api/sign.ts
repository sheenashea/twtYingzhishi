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