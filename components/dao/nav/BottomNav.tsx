import { Box } from "@mui/material";
import * as React from "react";
import RedditIcon from "@mui/icons-material/Reddit";
import TwitterIcon from "@mui/icons-material/Twitter";
import { deviceWrapper } from "@components/utilities/Style";

const BottomNav: React.FC = () => {
  return (
    <Box
      sx={{
        width: "calc(100%)",
        backgroundColor: "backgroundColor.main",
        borderTop: "1px solid",
        borderTopColor: "border.main",

        p: ".5rem",
        display: "flex",
        alignItems: "center",
        mb: "-1rem",
        pb: deviceWrapper(".5rem", ".75rem"),
        pt: deviceWrapper(".5rem", ".75rem"),
        flexDirection: deviceWrapper("column", "row"),
      }}
    >
      <Box sx={{ fontSize: ".9rem" }}>Visit our website at dao.paidiea.im.</Box>
      <Box
        sx={{
          ml: deviceWrapper("", "auto"),
          mt: deviceWrapper(".5rem", "0"),
          display: "flex",
          alignItems: "center",
        }}
      >
        <TwitterIcon color="primary" sx={{ mr: ".5rem" }} />
        <RedditIcon color="primary" />
      </Box>
    </Box>
  );
};

export default BottomNav;
