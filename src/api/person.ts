import http from "../utils/request2"
import type { UserInfoRes, updateUserInfo } from './types'
import { uuid } from "vue-uuid";



const person = {
    userid: uuid.v1(),
    username: sessionStorage.getItem('username')?.toString(),
    avatarurl: '1.jpg',
    address: '天津',
    level: 114,
    email: '3022222222@qq.com',
    totalLikenum: 11,
    totalDislikenum: 3,
    passWord: '1234abcd'
}

export function getPersonPage() {
    return person;
  }

export function updatePersonPage (data: updateUserInfo) {
    return http.post<UserInfoRes>('/' + data.id, data);
}