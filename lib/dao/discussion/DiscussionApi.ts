import { AppApi } from "@lib/AppApi";
import { AbstractApi } from "@lib/utilities";
import { IDiscussion } from "@pages/dao/[id]/discussion/create";

export default class DiscussionApi extends AbstractApi {
  api: AppApi;
  value: IDiscussion;
  setValue: Function;

  constructor(api: AppApi, value: IDiscussion, setValue: Function) {
    super();
    this.api = api;
    this.value = value;
    this.setValue = setValue;
  }
}
