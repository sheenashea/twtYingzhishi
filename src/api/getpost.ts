import http from "../utils/request2"
import type { PostInfo,StatusInfo,LikeInfoComment,SubmitComment } from './types'

//渲染贴子
export function getFirstPost(authorid: any) {
  return http.get<PostInfo>('/detail/'+ authorid)
}

//添加评论
export function addPost(data: SubmitComment,authorid: any) {
  return http.post<PostInfo>('/detail/'+ authorid + '/add', data );
}

//主贴子实现
//修改点赞
export function changeLike(data: StatusInfo,authorid: any) {
  return http.post<StatusInfo>('/detail/'+ authorid +'/like', data );
}

//修改点踩
export function changeDislike(data: StatusInfo,authorid: any) {
  return http.post<StatusInfo>('/detail/'+ authorid +'/dislike', data);
}

//评论区的实现
//修改点赞
export function changeLike2(data: LikeInfoComment,authorid: any) {
  return http.post<StatusInfo>('/detail/'+ authorid +'/like', data );
}

//修改点踩
export function changeDislike2(data: LikeInfoComment,authorid: any) {
  return http.post<StatusInfo>('/detail/'+ authorid +'/dislike', data);
}