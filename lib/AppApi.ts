import { AbstractApi } from "./utilities";
import { Theme } from "@mui/material";
import { CreationApi } from "./creation/Api";

export class AppApi extends AbstractApi {
  theme: Theme;
  setTheme: Function;
  daoId: string;
  setDaoId: Function;
  constructor(
    _alert: any,
    _setAlert: Function,
    _theme: Theme,
    _setTheme: Function,
    _daoId: string,
    _setDaoId: Function
  ) {
    super(_alert, _setAlert);
    this.theme = _theme;
    this.setTheme = _setTheme;
    this.daoId = _daoId;
    this.setDaoId = _setDaoId;
  }

  ///
}
