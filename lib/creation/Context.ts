import { Theme } from "@mui/material";
import * as React from "react";
import { CreationApi } from "./Api";

export interface IGlobalContext {
  api: CreationApi;
}

export const GlobalContext = React.createContext({
  api: undefined,
});
