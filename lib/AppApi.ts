import { AbstractApi } from "./utilities";
import { Theme } from "@mui/material";

export class AppApi extends AbstractApi {
  theme: Theme;
  setTheme: Function;
  daoId: string;


  constructor(
    _alert: any,
    _setAlert: Function,
    _theme: Theme,
    _setTheme: Function,
    _daoId: string
  ) {
    super(_alert, _setAlert);
    this.theme = _theme;
    this.setTheme = _setTheme;
    this.daoId = _daoId;
  }
}
