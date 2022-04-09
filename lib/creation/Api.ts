import { Theme } from "@mui/material";
import { AbstractApi } from "../utilities";

export interface ICreationData {
  navStage: number;
  basicInformation: IBasicInformation;
  governance: IGovernance;
}

interface IBasicInformation {
  dao_name: string;
  dao_url: string;
  short_description: string;
}

interface IGovernance {
  optimisticGovernance: boolean;
  quadraticVoting: boolean;
  supportNeeded: number;
  quorum: number;
  voteDuration: number;
  voteDurationUnits: string;
  whitelist: {
    alias: string;
    address: string;
    img: string;
  }[];
}

export class CreationApi extends AbstractApi {
  theme: Theme;
  setTheme: Function;
  data: ICreationData;
  setData: Function;

  constructor(
    _alert: any,
    _setAlert: Function,
    _theme: Theme,
    _setTheme: Function,
    _data: ICreationData,
    _setData: Function
  ) {
    super(_alert, _setAlert);
    this.theme = _theme;
    this.setTheme = _setTheme;
    this.data = _data;
    this.setData = _setData;
  }
}
