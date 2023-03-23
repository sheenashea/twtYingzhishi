import http from "../utils/request2"
import type { getDiscussPost, addComment, like, dislike } from './types'

const ans = {
    postList: {
      id: '0',
      title: "[破事水]为啥都说新耶拉是终端",
      content: "不说第一第二吧,这个跟上架新潮期很相关。影之诗(sv)卡池很浅,上个月底才有第二弹暗黑进化,直接送10包,500万dl又送五包,而一包八张,闪卡概率出奇地高。要说这游戏骗磕是不可能的,福利太多,除了上述15包,中立虹卡撒旦加百列路西法也是随便送…炉石没玩过有这等福利么?…感慨cy大方去吧,当然,这游戏卡面延承自cy旗下手游神击的巴哈姆特(有动画,坊间口碑不错),并不是凭空出现。卡池的深度决定了游戏的玩法多样性与复杂性,所以这点不能跟炉石相比,sv也在发展之中,就上个月更新中新增的【突进】技能,据说在炉石新卡上也有所体现,互相借鉴吧,当然在炉石面前还是不要提mtg吧(笑)另外在日本影之诗(sv)力压炉石是必然的，谁会抛弃萌妹子去找欧美魔幻风格的妹子（炉石有妹子么……）呢？这就是我们死宅的心声。",
      type: 0,
      status: 0,
      createTime: new Date(),
      commentCount: 1,
      score: 23,
    },
    authorList: {
      userId: '0',
      loginName: "双叶",
      password: '19287365',
      email: "302224111@tju.com",
      avatarurl: 'profile2.jpg',
      likeCount: 12,
      likeStatus: true,
      dislikeCount: 0,
      dislikeStatus: false,
      showinput: false,
    },
    commentVoList: [
        {
          id: '0',//缺少了
          comment: "卧槽淘宝425充5000钻???我前天刚完已经充了450了才开三包预组",
          author: {
            id: '1',
            loginName: "桃金娘www",
            avatarurl: '1.jpg',
          },
          likeCount: 0,
          likeStatus: false,
          dislikeCount: 1,
          dislikeStatus: true,
          replyList: [
            {
            id: '0',//缺少了
            reply: "占位待更新",
            author: {
               id: '2',
               loginName: "Donald&",
               avatarurl: '../../assets/1.jpg',
            },
            target: {
               id: '1',
               loginName: "桃金娘www",
               avatarurl: '../../assets/1.jpg',
            },
            likeCount: 0,
            likeStatus: false,
            dislikeCount: 0,
            dislikeStatus: false,
            showinput: false
          }
          ],
          replyCount: 1,
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
