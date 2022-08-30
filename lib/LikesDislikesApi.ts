import { IComment } from "@components/dao/discussion/Comments";
import { AppApi } from "@lib/AppApi";
import { AbstractApi } from "@lib/utilities";
import { IDiscussion } from "@pages/dao/[id]/discussion/create";

type LikeDislikeAction = "like" | "dislike" | "remove";

interface ILikeDislikePut {
  user_id: number;
  type: LikeDislikeAction;
}

export default class LikesDislikesApi extends AbstractApi {
  api: AppApi;
  putUrl: string;

  constructor(api: AppApi, putUrl: string) {
    super();
    this.api = api;
    this.putUrl = putUrl;
  }

  likeDislikeData(type: LikeDislikeAction): ILikeDislikePut {
    let user_id = parseInt(localStorage.getItem("user_id"));
    return {
      user_id: user_id,
      type: type,
    };
  }

  like(): Promise<any> | void {
    let data = this.likeDislikeData("like");
    return this.put(this.putUrl, data, "");
  }

  dislike(): Promise<any> | void {
    let data = this.likeDislikeData("dislike");
    return this.put(this.putUrl, data, "");
  }

  remove(): Promise<any> | void {
    let data = this.likeDislikeData("remove");
    return this.put(this.putUrl, data, "");
  }
}
