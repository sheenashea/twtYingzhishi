  //登录接口发送信息类型
  export interface LoginData {
    loginName: string,
    passWord: string,
  }
   
  //登录接口返回值类型 
  export interface LoginRes {
    code: number,
    success: boolean,
    token: string
  }
   
  //用户信息接口返回值类型 
  //  export interface UserInfoRes {
  //   userid: string,
  //   username: string,
  //   photo: string,
  //   address: string,
  //   level: number,
  //   email: string,
  //   totalLikenum: number,
  //   totalDislikenum: number
  // }

  //注册接口信息发送类型
  export interface RegisterData {
    loginName: string,
    passWord: string,
    email: string
  }

  //注册接口返回值类型
  export interface RegisterRes {
    code: number,
    success: boolean,
  }
  
  //主贴子信息接口返回类型  getdiscusspost
  export interface  postList {
    //帖子列表
     id: number,
     title: string,
     content: string,
     type: number,
     status: number,
     createTime: Date,
     commentCount: number,
     score: number,
  }

 export interface authorList {
    //作者列表
     userId: number,
     loginName: string,
     password: number,
     email: string,
     avatarurl: string,
     likeCount: number,
     likeStatus: number,
     dislikeCount: number,
     dislikeStatus: number,
 }

  export interface replyList {
    //回复列表
    id: number,//缺少了
    reply: string,
    author: {
       id: number,
       loginName: string,
       avatarurl: string,
    }
    target: {
       id: number,
       loginName: string,
       avatarurl: string,
    }
    likeCount: number,
    likeStatus: number,
    dislikeCount: number,
    dislikeStatus: number,
    showinput: boolean
  } 

  export interface commentVoList {
    //评论列表
    id: number,//缺少了
    comment: string,
    author: {
      id: number,
      loginName: string,
      avatarurl: string,
    },
    likeCount: number,
    likeStatus: number,
    dislikeCount: number,
    dislikeStatus: number,
    replyList: replyList[],
    replyCount: number,
    showinput: boolean,
  }

  export interface getDiscussPost {
    postList: postList,
    authorList: authorList,
    commentVoList: commentVoList[]
  }

   //添加评论,addComment 参数
   export interface addComment {
     discussPostId: number,
     id: number,
     userId: number,
     entityType: number,
     entityId: number,
     targetId: number,
     content: string,
     createTime: Date,
     status: string,
   }

   //like 修改
   export interface like {
      entityType: number,
      entityId: number,
      entityUserId: number,
      postId: number,
   }

   //dislike修改
   export interface dislike {
       entityType: number,
       entityId: number,
       entityUserId: number,
       postId: number,
   }

