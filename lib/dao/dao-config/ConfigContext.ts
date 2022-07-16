import { IBasicInformation } from "@lib/creation/CreationApi";
import { Theme } from "@mui/material";
import * as React from "react";
import ConfigApi from "./ConfigApi";

export interface IConfigContext {
  api: ConfigApi;
}

export const ConfigContext = React.createContext<IConfigContext>({
  api: undefined,
});
