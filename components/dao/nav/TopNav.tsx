import { Avatar, Badge, Box, Button, IconButton, Modal } from "@mui/material";
import * as React from "react";
import { GlobalContext, IGlobalContext } from "../../../lib/AppContext";
import { DarkTheme, LightTheme } from "@theme/theme";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Musk from "../../../public/profile/musk-full.png";
import DarkSwitch from "../../utilities/DarkSwitch";
import Link from "next/link";
import { modalBackground } from "@components/utilities/modalBackground";
import { CapsInfo } from "@components/creation/utilities/HeaderComponents";
import {
  newNotifications,
  oldNotifications,
  Notification,
} from "@pages/dao/[id]/notifications";
import { useRouter } from "next/router";
import ConnectWallet from "@components/wallet/ConnectWallet";

const TopNav: React.FC = () => {
  const globalContext = React.useContext<IGlobalContext>(GlobalContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const router = useRouter();
  const { id } = router.query;
  return (
    <Box
      sx={{
        width: "calc(100% - 13rem)",
        p: ".5rem",
        borderBottom: "1px solid",
        borderBottomColor: "divider.main",
        display: "flex",
        backgroundColor: "backgroundColor.main",
        zIndex: 1000,
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
        <ConnectWallet />
        <Box
          sx={{
            ml: ".5rem",
            mr: ".5rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton onClick={handleOpen}>
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
        <Link href={`/dao/${id}/profile`}>
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
              <Box sx={{ color: "text.light", fontSize: ".7rem" }}>
                Lvl 7 | Philosopher
              </Box>
            </Box>
          </Box>
        </Link>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            ...modalBackground,
            p: 0,
            width: "30rem",
            right: "-12rem",
            top: "19rem",
            left: "",
          }}
        >
          <Box
            sx={{
              backgroundColor: "fileInput.main",
              p: ".5rem",
              pl: "1rem",
              display: "flex",
              alignItems: "center",
              width: "100%",
              borderTopLeftRadius: ".2rem",
              borderTopRightRadius: ".2rem",
              borderBottom: "1px solid",
              borderBottomColor: "divider.main",
            }}
          >
            <CapsInfo title="Configuration" mb={"0"} />
            <Button sx={{ ml: "auto", width: "15rem" }} size="small">
              Mark all as read
            </Button>
          </Box>

          <Box sx={{ height: "25rem", overflowY: "scroll" }}>
            {oldNotifications
              .concat(newNotifications)
              .map((i: any, c: number) => {
                return (
                  <Notification
                    i={i}
                    m={"0"}
                    key={"notification-key-modal-" + c}
                  />
                );
              })}
          </Box>
          <Box
            sx={{
              backgroundColor: "fileInput.main",
              p: ".5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              borderBottomLeftRadius: ".2rem",
              borderBottomRightRadius: ".2rem",
              borderBottom: "1px solid",
              borderBottomColor: "divider.main",
            }}
            onClick={handleClose}
          >
            <Link href={`/dao/${id}/notifications`}>
              <Button size="small">View all</Button>
            </Link>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default TopNav;
