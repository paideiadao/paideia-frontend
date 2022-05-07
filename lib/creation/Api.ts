import { Theme } from "@mui/material";
import { IAirdropInfo } from "../../components/creation/tokenomics/AdvancedTokenomics/Airdrop";
import { ILiquidityInfo } from "../../components/creation/tokenomics/AdvancedTokenomics/Liquidity";
import { IPrivateRoundInfo } from "../../components/creation/tokenomics/AdvancedTokenomics/PrivateRound";
import { IPublicRoundInfo } from "../../components/creation/tokenomics/AdvancedTokenomics/PublicRound";
import { IStakingInfo } from "../../components/creation/tokenomics/AdvancedTokenomics/Staking";
import { ITeamPartnersInfo } from "../../components/creation/tokenomics/AdvancedTokenomics/TeamPartners";
import { ITreasuryInfo } from "../../components/creation/tokenomics/AdvancedTokenomics/Treasury";
import { IVestingSchedule } from "../../components/creation/tokenomics/AdvancedTokenomics/VestingSchedule";
import { AbstractApi } from "../utilities";

export interface ISocialLink {
  socialNetwork: string;
  address: string;
}

export interface ICreationData {
  navStage: number;
  basicInformation: IBasicInformation;
  governance: IGovernance;
  tokenomics: ITokenomics;
  design: IDesign;
}

export interface IFile {
  file: any;
  url: string;
}

interface IDesign {
  theme: number;
  logo: IFile;
  banner: {
    show: boolean;
    data: IFile;
  };
  footer: {
    show: boolean;
    mainText: string;
    links: ISocialLink[];
  };
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

export interface ITokenHolder {
  alias: string;
  address: string;
  img: string;
  balance: number;
  percentage: number;
}

export interface ITokenomics {
  type: string;
  tokenName: string;
  tokenId: string;
  // check restrictions...
  tokenTicker: string;
  tokenAmount: number;
  tokenImage: any;
  tokenImageUrl: string;
  tokenRemaining: number;
  tokenHolders: ITokenHolder[];
  activateTokenomics: boolean;
  distributions: (
    | ITreasuryInfo
    | ITeamPartnersInfo
    | IPrivateRoundInfo
    | IPublicRoundInfo
    | IAirdropInfo
    | ILiquidityInfo
    | IStakingInfo
  )[];
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
