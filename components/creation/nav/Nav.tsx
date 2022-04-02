import Progress from "./Progress";
import * as React from "react";
import { Box } from "@mui/material";

export default function Nav(props) {
  return (
    <Box>
      <Progress {...props} />
    </Box>
  );
}
