import http from "../utils/request2"
import type { getDiscussPost, addComment, like, dislike } from './types'

//渲染贴子
export function getPost(discussPostId: number) {
  return http.get<getDiscussPost>('/comment/add/'+ discussPostId)
}

//添加评论
export function addPost(data: addComment,discussPostId: number) {
  return http.post<getDiscussPost>('/comment/add/'+ discussPostId , data );
}

//修改点赞
export function changeLike(data: like) {
  return http.post<getDiscussPost>('/like', data );
}

//修改点踩
export function changeDislike(data: dislike) {
  return http.post<getDiscussPost>('/dislike', data);
}
