import { IComment } from "@components/dao/discussion/Comments";
import { AppApi } from "@lib/AppApi";
import { AbstractApi } from "@lib/utilities";
import { IDiscussion } from "@pages/dao/[id]/discussion/create";

type FollowDirection = "follow" | "unfollow";

interface IFollowPut {
  user_id: number;
  type: FollowDirection;
}

export default class FollowApi extends AbstractApi {
  api: AppApi;
  putUrl: string;

  constructor(api: AppApi, putUrl: string) {
    super();
    this.api = api;
    this.putUrl = putUrl;
  }

  followData(type: FollowDirection): IFollowPut {
    let user_id = parseInt(localStorage.getItem("user_id"));
    return {
      user_id: user_id,
      type: type,
    };
  }

  follow(type: FollowDirection): Promise<any> | void {
    let data = this.followData(type);
    return this.put(this.putUrl, data, "Followed proposal");
  }
}
