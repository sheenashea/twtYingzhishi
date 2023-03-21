import http from "../utils/request2"
import type { getDiscussPost, addComment, like, dislike } from './types'

const ans = {
    postList: {
      id: 10034,
      title: "钢铁的反叛者",
      content: "我是一个帖子",
      type: 0,
      status: 0,
      createTime: new Date(),
      commentCount: 1,
      score: 23,
    },
    authorList: {
      userId: 10234,
      loginName: "sss",
      password: 19287365,
      email: "3022244111@tju.com",
      avatarurl: '1.jpg',
      likeCount: 12,
      likeStatus: 1,
      dislikeCount: 0,
      dislikeStatus: 0,
      showinput: false,
    },
    commentVoList: [
        {
          id: 202212,//缺少了
          comment: "string",
          author: {
            id: 1,
            loginName: "熊童子",
            avatarurl: '1.jpg',
          },
          likeCount: 0,
          likeStatus: 0,
          dislikeCount: 1,
          dislikeStatus: 1,
          replyList: [

          ],
          replyCount: 0,
          showinput: false,
        }
    ]
}

//渲染贴子
export function getPost() {
  return ans;
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
