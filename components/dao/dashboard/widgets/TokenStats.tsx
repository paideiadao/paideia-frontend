import * as React from "react";
import { CapsInfo } from "../../../creation/utilities/HeaderComponents";
import { Box, Paper, Button } from "@mui/material";

const TokenStats: React.FC = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: ".5rem",
        backgroundColor: "fileInput.outer",
        border: "1px solid",
        borderColor: "divider.main",
        p: ".5rem",
        mt: 0,
        pl: 0,
        pr: 0,
        pb: 0,
        mr: "1rem",
        mb: "1rem",
      }}
    >
      <Box sx={{ pl: ".5rem" }}>
        <CapsInfo title="Token Stats" small />
      </Box>
      <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            width: "50%",
            textAlign: "center",
            fontSize: ".7rem",
            color: "text.light",
            borderRight: "1px solid",
            borderColor: "divider.main",
          }}
        >
          Ticker
          <Box sx={{ fontSize: "1.2rem", color: "text.main" }}>PTK</Box>
        </Box>
        <Box
          sx={{
            width: "50%",
            textAlign: "center",
            fontSize: ".7rem",
            color: "text.light",
          }}
        >
          Price
          <Box sx={{ fontSize: "1.2rem", color: "text.main" }}>$0.1342</Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          mt: "1rem",
          mb: "1rem",
        }}
      >
        <Box
          sx={{
            width: "50%",
            textAlign: "center",
            fontSize: ".7rem",
            color: "text.light",
            borderRight: "1px solid",
            borderColor: "divider.main",
          }}
        >
          Market cap
          <Box sx={{ fontSize: "1rem", color: "text.main" }}>
            $10,467,400
          </Box>
        </Box>
        <Box
          sx={{
            width: "50%",
            textAlign: "center",
            fontSize: ".7rem",
            color: "text.light",
          }}
        >
          Tokens
          <Box sx={{ fontSize: "1rem", color: "text.main" }}>78,000,000</Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          fontSize: ".9rem",
          mt: ".5rem",
          color: "primary.main",
          textAlign: "center",
          borderTop: "1px solid",
          borderTopColor: "divider.main",
          pt: ".25rem",
          pb: ".25rem",
        }}
      >
        <Button>Learn More</Button>
      </Box>
    </Paper>
  );
};

export default TokenStats;
