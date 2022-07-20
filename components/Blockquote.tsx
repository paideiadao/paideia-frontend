import React, { FC } from "react";
import { Grid, Box, Typography } from "@mui/material";
import { SxProps } from "@mui/material";

const paragraphStyle = {
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "24px",
  letterSpacing: "0.15px",
};

const blockquoteStyle = {
  fontFamily: '"Space Grotesk", sans-serif',
  fontWeight: "600",
  fontSize: "20px",
  lineHeight: "28px",
};

interface BlockquoteProps {
  small?: boolean;
  sx?: SxProps;
}

const Blockquote: FC<BlockquoteProps> = ({ small, sx, children }) => {
  return (
    <Grid container wrap="nowrap" spacing={2} sx={sx ? sx : { mb: "32px" }}>
      <Grid item>
        <Box
          sx={{
            mt: "3px",
            ml: small ? "0" : "36px",
            width: "8px",
            height: "95%",
            background:
              "linear-gradient(161.68deg, #6FA1A9 19.58%, #ED7E21 84.97%)",
          }}
        ></Box>
      </Grid>
      <Grid item zeroMinWidth>
        <Typography sx={small ? paragraphStyle : blockquoteStyle}>
          {children}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Blockquote;
