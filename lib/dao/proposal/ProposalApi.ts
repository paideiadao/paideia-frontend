import { AppApi } from "@lib/AppApi";
import { AbstractApi } from "@lib/utilities";
import { IProposal } from "@pages/dao/[id]/proposal/create";

export default class ProposalApi extends AbstractApi {
  api: AppApi;
  value: IProposal;
  setValue: Function;

  constructor(api: AppApi, value: IProposal, setValue: Function) {
    super();
    this.api = api;
    this.value = value;
    this.setValue = setValue;
  }
}
