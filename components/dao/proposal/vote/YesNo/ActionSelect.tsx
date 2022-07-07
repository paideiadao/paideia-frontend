import { Box } from "@mui/material";
import * as React from "react";
import { IActionType } from "./AddAction";

const ActionSelection: React.FC<IActionType> = (props) => {
  return (
    <Box sx={{ width: "100%", alignItems: "center", display: "flex" }}></Box>
  );
};

export default ActionSelection;
