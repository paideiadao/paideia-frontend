import { IAlerts } from "@components/utilities/Alert";
import {
  IBasicInformation,
  IGovernance,
  IDesign,
} from "@lib/creation/Interfaces";
import { AbstractApi } from "@lib/utilities";
import { IDiscussion } from "@pages/dao/[id]/discussion/create";
import { IConfigContext } from "./ConfigContext";

export interface IConfigData {
  basicInformation: IBasicInformation;
  governance: IGovernance;
  design: IDesign;
}

export default class ConfigApi extends AbstractApi {
  data: IConfigData;
  setData: Function;

  constructor(
    alert: IAlerts[],
    setAlert: Function,
    data: IConfigData,
    setData: Function
  ) {
    super(alert, setAlert);
    this.data = data;
    this.setData = setData;
  }
}
