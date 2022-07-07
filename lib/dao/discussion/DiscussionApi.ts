import { AbstractApi } from "@lib/utilities";
import { IDiscussion } from "@pages/dao/[id]/discussion/create";

export default class DiscussionApi extends AbstractApi {
  value: IDiscussion;
  setValue: Function;

  constructor(
    _alert: any,
    _setAlert: Function,
    _value: IDiscussion,
    _setValue: Function
  ) {
    super(_alert, _setAlert);
    this.value = _value;
    this.setValue = _setValue;
  }
}
