  //登录接口发送信息类型
  export interface LoginData {
    username: string,
    password: string,
  }
   
  //登录接口返回值类型 
  export interface LoginRes {
    code: number,
    token: string
  }
   
  //用户信息接口返回值类型 
  export interface UserInfoRes {
    userid: string,
    username: string,
    photo: string,
    address: string,
    level: number,
    email: string,
    totalLikenum: number,
    totalDislikenum: number
  }

  //注册接口信息发送类型
  export interface RegisterData {
    username: string,
    password: string,
    email: string
  }
  
  //主贴子信息接口返回类型
  export interface  MainPostInfo {
     userinfo: UserInfoRes,
     id:string,
     data: string,
     title: string,
     content: string,
     popular:{
      likenum:number,
      dislikenum:number,
     }
     whetherLike:boolean,
     whetherDislike:boolean
  }

  //评论信息返回接口类型

  export interface SonComment {
    mainpostinfo: MainPostInfo,
    tosomeone: string
  }

  export interface UserCommentInfo {
       mainpostinfo: MainPostInfo,
       sons:SonComment[]
  }

  //返回信息

  export interface PostInfo {
    mainPost: MainPostInfo,
    comments: UserCommentInfo[]
  }

  //评论信息发送接口
  export interface SubmitComment {
    id1: string,
    id2: string,
    content: string
  }
  
  //father
  //是否喜爱踩
  export interface StatusInfo {
     status: boolean,
     num: number,
  }

  //child
  //是否喜爱踩
  export interface LikeInfoComment {
    postId:string,
    commentId:string,
    status: boolean,
    num: number,
 }



 /*
 */
 //以下为为了方便书写的自定义type
   export interface SonComments {
       soncomments: SonComment
       showinput:boolean//需要添加
   }

   export interface FatherPost {
      firstComment: MainPostInfo
      showinput:boolean,//需要添加
      showSons: boolean,//需要添加
      showSonsInfo:string,//需要添加
   }

   export interface CommentType {
      fatherComment: FatherPost,
      secondComment: SonComments[]
   }
