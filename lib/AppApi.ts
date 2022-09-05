import { AbstractApi } from "./utilities";
import { Theme } from "@mui/material";
import { CreationApi } from "./creation/CreationApi";
import { IAlerts } from "@components/utilities/Alert";

export class AppApi extends AbstractApi {
  theme: Theme;
  setTheme: Function;
  daoData: any;
  setDaoData: Function;

  constructor(
    alert: IAlerts[],
    setAlert: (val: IAlerts[]) => void,
    theme: Theme,
    setTheme: Function,
    daoData: any,
    setDaoData: Function
  ) {
    super();
    this.alert = alert;
    this.setAlert = setAlert;
    this.theme = theme;
    this.setTheme = setTheme;
    this.daoData = daoData;
    this.setDaoData = setDaoData;
  }
}
