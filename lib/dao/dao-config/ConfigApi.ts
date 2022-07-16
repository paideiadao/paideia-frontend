import { IBasicInformation, IGovernance } from "@lib/creation/CreationApi";
import { AbstractApi, IAlert } from "@lib/utilities";
import { IDiscussion } from "@pages/dao/[id]/discussion/create";
import { IConfigContext } from "./ConfigContext";

export interface IConfigData {
  basicInformation: IBasicInformation;
  governance: IGovernance;
}

export default class ConfigApi extends AbstractApi {
  data: IConfigData;
  setData: Function;

  constructor(
    alert: IAlert,
    setAlert: Function,
    data: IConfigData,
    setData: Function
  ) {
    super(alert, setAlert);
    this.data = data;
    this.setData = setData;
  }
}
