import {
  Avatar,
  Badge,
  Box,
  Button,
  ClickAwayListener,
  IconButton,
  Modal,
  Slide,
} from "@mui/material";
import * as React from "react";
import { GlobalContext, IGlobalContext } from "../../../lib/AppContext";
import { DarkTheme } from "@theme/theme";
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
import { deviceWrapper } from "@components/utilities/Style";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeContext, IThemeContext } from "@lib/ThemeContext";
import LightFooter from "@public/dao/light-footer.png";
import DarkFooter from "@public/dao/dark-footer.png";
import DaoBio from "./DaoBio";
import Contents from "./Contents";
import CloseIcon from "@mui/icons-material/Close";
import { useWallet } from "@components/wallet/WalletContext";
import ConnectWallet from "@components/wallet/ConnectWallet";
import { isAddressValid } from "@components/wallet/AddWallet";
import { ProfilePopup } from "./Popups";

export interface INav {
  setShowMobile: (val: boolean) => void;
  showMobile: boolean;
}

const TopNav: React.FC<INav> = (props) => {
  const globalContext = React.useContext<IGlobalContext>(GlobalContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openProfile, setOpenProfile] = React.useState(false);
  const handleOpenProfile = () => setOpenProfile(true);
  const handleCloseProfile = () => setOpenProfile(false);
  const router = useRouter();
  const { id } = router.query;
  const { wallet } = useWallet();
  const themeContext = React.useContext<IThemeContext>(ThemeContext);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          p: ".5rem",
          borderBottom: "1px solid",
          borderBottomColor: "border.main",
          display: "flex",
          backgroundColor: "backgroundColor.main",
          zIndex: 1000,
          position: "sticky",
          top: 0,
        }}
      >
        <IconButton
          color="primary"
          onClick={() => props.setShowMobile(true)}
          sx={{ display: deviceWrapper("flex", "none") }}
        >
          <MenuIcon color="primary" />
        </IconButton>
        <Box
          sx={{
            color: "text.primary",
            backgroundColor: "backgroundColor.main",
            ml: "auto",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* <DarkSwitch /> */}
          {isAddressValid(wallet) && (
            <>
              <Box
                sx={{
                  ml: ".5rem",
                  mr: ".5rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Link
                  href={
                    id === undefined
                      ? "/dao/notifications"
                      : `/dao/${id}/notifications`
                  }
                >
                  <IconButton sx={{ display: deviceWrapper("flex", "none") }}>
                    <Badge badgeContent={1} color="primary">
                      <NotificationsIcon
                        sx={{
                          fontSize: "1.1rem",
                          opacity:
                            globalContext.api.theme === DarkTheme ? "1" : ".5",
                        }}
                      />
                    </Badge>
                  </IconButton>
                </Link>

                <IconButton
                  onClick={handleOpen}
                  sx={{ display: deviceWrapper("none", "flex") }}
                >
                  <Badge badgeContent={1} color="primary">
                    <NotificationsIcon
                      sx={{
                        fontSize: "1.1rem",
                        opacity:
                          globalContext.api.theme === DarkTheme ? "1" : ".5",
                      }}
                    />
                  </Badge>
                </IconButton>
              </Box>
              {/* <Link
                href={id === undefined ? "/dao/profile" : `/dao/${id}/profile`}
              > */}
              <Box
                sx={{
                  ml: "1rem",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={handleOpenProfile}
              >
                <Avatar sx={{ mr: ".5rem" }}>
                  <img src={Musk.src} />
                </Avatar>
                <Box
                  sx={{
                    display: deviceWrapper("none", "flex"),
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Box sx={{ fontSize: ".9rem" }}>Alone Musk</Box>
                  <Box sx={{ color: "text.secondary", fontSize: ".7rem" }}>
                    Lvl 7 | Philosopher
                  </Box>
                </Box>
              </Box>
              {/* </Link> */}
            </>
          )}
          <ConnectWallet show={!isAddressValid(wallet)} />
        </Box>
        <ProfilePopup open={openProfile} close={handleCloseProfile} />
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              ...modalBackground,
              p: 0,
              width: "30rem",
              right: "-12rem",
              top: "17.5rem",
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
                borderBottomColor: "border.main",
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
                      c={c}
                      i={i}
                      m={"0"}
                      key={"notification-key-modal-" + c}
                    />
                  );
                })}
            </Box>
            <Box
              sx={{
                position: "fixed",
                bottom: "0",
                left: "0",
                width: "100%",
                display: "flex",
                alignItems: "center",
                backgroundColor: "fileInput.main",
                justifyContent: "center",
                borderBottomRightRadius: ".3rem",
                borderBottomLeftRadius: ".3rem",
              }}
              onClick={handleClose}
            >
              <Link
                href={
                  id === undefined
                    ? "/dao/notifications"
                    : `/dao/${id}/notifications`
                }
              >
                <Button
                  sx={{
                    width: "100%",
                    borderRadius: 0,
                    p: ".75rem",
                    borderBottomRightRadius: ".3rem",
                    borderBottomLeftRadius: ".3rem",
                  }}
                  size="small"
                >
                  View All
                </Button>
              </Link>
            </Box>
          </Box>
        </Modal>
      </Box>
      <Slide direction="right" in={props.showMobile} mountOnEnter unmountOnExit>
        <Box
          sx={{
            width: "16rem",
            zIndex: 1000,
            backgroundColor: "backgroundColor.main",
            borderRight: "1px solid",
            borderRightColor: "border.main",
            color: "text.primary",
            borderBottom: "1px solid",
            height: "100vh",
            borderBottomColor: "border.main",
            backgroundImage: `url(${
              themeContext.theme === DarkTheme
                ? DarkFooter.src
                : LightFooter.src
            })`,
            backgroundPosition: "bottom 0px right 0px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "16rem",
            position: "fixed",
            top: 0,
          }}
        >
          <Box sx={{ width: "100%", position: "relative" }}>
            {/* <IconButton onClick={props.hide} sx={{right: '.5rem', top: '.5rem', position: 'absolute'}}>
          <CloseIcon/>
        </IconButton> */}
            <DaoBio />
            <Contents setShowMobile={props.setShowMobile} />
          </Box>

          {/* <Footer /> */}
        </Box>
      </Slide>
    </>
  );
};

export default TopNav;
