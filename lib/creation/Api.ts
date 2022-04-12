import { Theme } from "@mui/material";
import { AbstractApi } from "../utilities";

export interface ICreationData {
  navStage: number;
  basicInformation: IBasicInformation;
  governance: IGovernance;
  tokenomics: ITokenomics;
}

interface IBasicInformation {
  daoName: string;
  daoUrl: string;
  shortDescription: string;
}

interface IGovernance {
  optimisticGovernance: boolean;
  quadraticVoting: boolean;
  timeToChallenge: number;
  timeToChallengeUnits: string;

  quorum: number;
  voteDuration: number;
  voteDurationUnits: string;
  whitelist: {
    alias: string;
    address: string;
    img: string;
  }[];
  amount: number | string;
  currency: string;
  supportNeeded: number;
}

export interface ITokenomics {
  tokenName: string;
  // check restrictions...
  tokenTicker: string;
  tokenAmount: number;
  tokenImage: any;
  tokenHolders: {
    alias: string;
    address: string;
    img: string;
    balance: number;
    percentage: number;
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
