import { AbstractApi } from "@lib/utilities";
import { IProposal } from "@pages/dao/[id]/proposal/create";

export default class ProposalApi extends AbstractApi {
  value: IProposal;
  setValue: Function;

  constructor(
    _alert: any,
    _setAlert: Function,
    _value: IProposal,
    _setValue: Function
  ) {
    super(_alert, _setAlert);
    this.value = _value;
    this.setValue = _setValue;
  }
}
