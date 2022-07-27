import { ITokenHolder } from "@lib/creation/CreationApi";
import { AbstractApi } from "@lib/utilities";
// import { IProposal } from "@pages/dao/[id]/proposal/create";

export interface IAsset {
  amount: number;
  usd: number;
  balance: number;
  ticker: string;
  logo: string;
}

export interface IReceiver {
  address: string;
  assets: IAsset;
}

export interface ISendFunds {
  receivers: ITokenHolder[];
  recurring: boolean;
  firstPayment: Date;
  frequency: "Hourly" | "Weekly" | "Daily" | "Monthly" | "Yearly";
  emissionLengthValue: number;
  emissionLength: "Hours" | "Weeks" | "Days" | "Months" | "Years";
}

export default class SendApi extends AbstractApi {
  value: ISendFunds;
  setValue: (value: ISendFunds) => void;

  constructor(
    _alert: any,
    _setAlert: Function,
    _value: ISendFunds,
    _setValue: (value: ISendFunds) => void
  ) {
    super(_alert, _setAlert);
    this.value = _value;
    this.setValue = _setValue;
  }
}
