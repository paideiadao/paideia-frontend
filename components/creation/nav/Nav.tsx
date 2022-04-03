import Progress from "./Progress";
import * as React from "react";
import { Box, Divider } from "@mui/material";
import StepSelector from "./StepSelector";
import Help from "./Help";

export default function Nav(props) {
  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: "15rem",
          pb: 2,
          borderRight: "1px solid",
          borderBottom: "1px solid",
          borderRightColor: "divider.main",
          borderBottomColor: "divider.main",
          backgroundColor: "backgroundColor.main",
          color: "color.main",
        }}
      >
        <Progress {...props} />
        <Divider sx={{ mt: 1, mb: 1, borderBottomColor: "divider.main" }} />
        <StepSelector {...props} />
        <Divider sx={{ mt: 1, mb: 1, borderBottomColor: "divider.main" }} />
        <Help />
      </Box>
      <Box sx={{
          position: 'fixed',
          top: '0',
          ml: '15rem', 
          backgroundColor: "backgroundColor.main",
          borderBottom: '1px solid',
          borderBottomColor: "divider.main",
          height: '3rem',
          width: 'calc(100% - 15rem)'
      }}>

      </Box>
    </>
  );
}
