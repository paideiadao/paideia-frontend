import { Box, Switch } from "@mui/material";
import * as React from "react";
import { Subheader } from "./HeaderComponents";

const LabeledSwitch: React.FC<{
  title: string;
  value: boolean;
  onChange: Function;
}> = (props) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mt: "1rem", mb: "1rem" }}>
      <Box>
        <Subheader title={props.title} />
      </Box>
      <Box sx={{ ml: "auto" }}>
        <Switch
          checked={props.value}
          onChange={() => props.onChange(!props.value)}
        />
      </Box>
    </Box>
  );
};

export default LabeledSwitch;
