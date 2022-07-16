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
  isDraft: number;
  isPublished: number;
  review: number;
  draftModal: boolean;
}

export interface IFile {
  file: any;
  url: string;
}

export interface IDesign {
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

export interface IBasicInformation {
  daoName: string;
  daoUrl: string;
  shortDescription: string;
}

export interface IWallet {
  alias: string;
  address: string;
  img: string;
}

export interface IGovernance {
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

  // to do... get authorization token working (store in local storage & post using header)
  // format data to properly match the endpoint
  // view in sql
  // create data checking for the dao paths
  async createDao(draft: boolean = true): Promise<any> {
    const data = this.cleanData(this.data, draft);
    console.log(data);
    let res = await this.post<any>("/dao", data);
    return res;
  }

  cleanData(data: ICreationData, draft: boolean): any {
    return {
      dao_name: data.basicInformation.daoName,
      dao_short_description: data.basicInformation.shortDescription,
      dao_url: data.basicInformation.daoUrl,
      governance: {
        is_optimistic: data.governance.quadraticVoting,
        is_quadratic_voting: data.governance.quadraticVoting,
        time_to_challenge__sec: data.governance.timeToChallenge,
        quorum: data.governance.quorum,
        vote_duration__sec: data.governance.voteDuration,
        amount: data.governance.amount === "" ? 0 : data.governance.amount,
        currency: data.governance.currency,
        support_needed: data.governance.supportNeeded,
        governance_whitelist: [], //data.governance.whitelist.map((i: any) => i.address),
      },
      tokenomics: {
        type: data.tokenomics.type,
        token_name: data.tokenomics.tokenName,
        token_ticker: data.tokenomics.tokenTicker,
        token_amount: data.tokenomics.tokenAmount,
        token_image_url: data.tokenomics.tokenImageUrl,
        token_remaining: data.tokenomics.tokenRemaining,
        is_activated: data.tokenomics.activateTokenomics,
        token_holders: data.tokenomics.tokenHolders.map((i: ITokenHolder) => {
          return { user_id: 1, percentage: i.percentage, balance: i.balance };
        }),
        /// MVP does not include distributions...
        distributions: [],
      },
      design: {
        theme_id: data.design.theme,
        logo_url: "",
        show_banner: data.design.banner.show,
        banner_url: "",
        show_footer: data.design.footer.show,
        footer_text: data.design.footer.mainText,
        footer_social_links: data.design.footer.links.map((i: ISocialLink) => {
          return { social_network: i.socialNetwork, link_url: i.address };
        }),
      },
      is_draft: draft ? 1 : 0,
      is_published: draft ? 0 : 1,
      nav_stage: data.navStage,
      is_review: data.review,
    };
  }
}
