import http from "../utils/request2"
import type { LoginData, LoginRes, UserInfoRes,RegisterData } from './types'

//登录
export function login(data: LoginData) {
    return http.post<LoginRes>('/user/login', data);
  }
   
// 获取用户信息
export function getUserInfo() {
    return http.get<UserInfoRes>('/user/userinfo')
  }
  
//注册
export function register(data: RegisterData) {
    return http.post<any>('/user/register', data);
  }