import { AppApi } from "@lib/AppApi";
import { AbstractApi } from "@lib/utilities";
import { IDiscussion } from "@pages/dao/[id]/discussion/create";
import { IProposalEndpointBody } from "../proposal/ProposalApi";

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

  validData(): Boolean {
    return true;
  }

  cleanData(): IProposalEndpointBody {
    return {
      dao_id: 1,
      user_id: 1,
      name: this.value.name,
      image_url: "",
      category: this.value.category,
      content: this.value.content,
      references: this.value.references,
      attachments: [],
      is_proposal: false,
    };
  }

  create(): Promise<any> | void {
    const data = this.cleanData();
    console.log(this.value);
    return this.post("/proposals", data);
  }
}
