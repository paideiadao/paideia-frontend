import React, { FC } from 'react';
import { Grid, Box, Typography } from "@mui/material";
import { DarkTheme } from "@theme/theme";

const paragraphStyle = {
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "24px",
  letterSpacing: "0.15px",
};

const blockquoteStyle = {
  fontFamily: '"Space Grotesk", sans-serif',
  fontWeight: "700",
  fontSize: "24px",
  lineHeight: "32px",
}

interface BlockquoteProps {
  small?: boolean;
}

const Blockquote: FC<BlockquoteProps> = ({ small, children }) => {
  return (
    <Grid container wrap="nowrap" spacing={2}>
      <Grid item>
        <Box
          sx={{
            mt: "3px",
            ml: (small ? '0' : '36px' ),
            width: "8px",
            height: "95%",
            background:
              "linear-gradient(161.68deg, #6FA1A9 19.58%, #ED7E21 84.97%)",
          }}
        ></Box>
      </Grid>
      <Grid item zeroMinWidth>
        <Typography component="p" sx={small ? paragraphStyle : blockquoteStyle}>
          {children}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Blockquote;