import Progress from "./Progress";
import * as React from "react";
import { Box, Divider } from "@mui/material";
import StepSelector from "./StepSelector";
import Help from './Help'

export default function Nav(props) {
  return (
    <Box sx={{ width: "15rem",pb: 2, borderRight: "1px solid rgba(0, 0, 0, .125)", borderBottom: '1px solid rgba(0, 0, 0, .125)' }}>
      <Progress {...props} />
      <Divider sx={{ mt: 1, mb: 1 }} />
      <StepSelector {...props} />
      <Divider sx={{ mt: 1, mb: 1 }} />
      <Help/>
    </Box>
  );
}
