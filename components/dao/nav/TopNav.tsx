import { Avatar, Badge, Box, IconButton } from "@mui/material";
import * as React from "react";
import { GlobalContext, IGlobalContext } from "../../../lib/AppContext";
import { DarkTheme, LightTheme } from "@theme/theme";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Musk from "../../../public/profile/musk.png";
import DarkSwitch from "../../utilities/DarkSwitch";

const TopNav: React.FC = () => {
  const globalContext = React.useContext<IGlobalContext>(GlobalContext);
  return (
    <Box
      sx={{
        width: "calc(100% - 15rem)",
        p: ".5rem",
        borderBottom: "1px solid",
        borderBottomColor: "divider.main",
        display: "flex",
        backgroundColor: "backgroundColor.main",
        zIndex: 100,
      }}
    >
      <Box
        sx={{
          color: "primary.text",
          backgroundColor: "backgroundColor.main",
          ml: "auto",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
        }}
      >
        <DarkSwitch />
        <Box
          sx={{
            ml: ".5rem",
            mr: ".5rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton>
            <Badge badgeContent={1} color="primary">
              <NotificationsIcon
                sx={{
                  fontSize: "1.1rem",
                  opacity: globalContext.api.theme === DarkTheme ? "1" : ".5",
                }}
              />
            </Badge>
          </IconButton>
        </Box>
        <Box sx={{ ml: "1rem", display: "flex", alignItems: "center" }}>
          <Avatar sx={{ mr: ".5rem" }}>
            <img src={Musk.src} />
          </Avatar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box sx={{ fontSize: ".9rem" }}>Alone Musk</Box>
            <Box sx={{ color: "primary.lightText", fontSize: ".7rem" }}>
              Lvl 7 | Philosopher
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TopNav;
