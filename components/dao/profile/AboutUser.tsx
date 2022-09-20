import { CapsInfo } from "@components/creation/utilities/HeaderComponents";
import { Avatar, Box, Chip } from "@mui/material";
import * as React from "react";
import PaideiaTokenSymbol from "../../../public/images/paideia-token-symbol.png";
import RedditIcon from "@mui/icons-material/Reddit";
import TelegramIcon from "@mui/icons-material/Telegram";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const UserSocial: React.FC<{ icon: JSX.Element; label: string }> = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        color: "primary.main",
        mt: ".25rem",
        mb: ".25rem",
        fontSize: "1rem",
      }}
    >
      {props.icon}
      {props.label}
    </Box>
  );
};

const UserAttr: React.FC<{ label: string }> = (props) => {
  return (
    <Chip
      label={props.label}
      color="primary"
      variant="outlined"
      sx={{ m: ".2rem" }}
    />
  );
};

interface IAboutUser {
  followers: number[];
  created: number;
  approved: number;
}

const AboutUser: React.FC<IAboutUser> = (props) => {
  return (
    <Box
      sx={{
        backgroundColor: "fileInput.outer",
        m: ".5rem",
        borderRadius: ".3rem",
        border: "1px solid",
        borderColor: "border.main",
        ml: 0,
        mr: 0,
      }}
    >
      <Box sx={{ p: ".5rem", width: "100%" }}>
        <CapsInfo title="About User" small />
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              fontSize: ".7rem",
              color: "text.secondary",
              textAlign: "center",
              borderRight: "1px solid",
              borderRightColor: "border.main",
              pr: ".75rem",
            }}
          >
            Followers
            <Box sx={{ color: "text.primary", fontSize: "1.1rem" }}>
              {props.followers.length}
            </Box>
          </Box>
          <Box
            sx={{
              fontSize: ".7rem",
              pl: ".75rem",
              color: "text.secondary",
              textAlign: "center",
              borderRight: "1px solid",
              borderRightColor: "border.main",
              pr: "1rem",
            }}
          >
            Created
            <Box sx={{ color: "text.primary", fontSize: "1.1rem" }}>
              {props.created}
            </Box>
          </Box>
          <Box
            sx={{
              fontSize: ".7rem",
              pl: ".75rem",
              color: "text.secondary",
              textAlign: "center",
            }}
          >
            Approved
            <Box sx={{ color: "text.primary", fontSize: "1.1rem" }}>
              {props.approved}
            </Box>
          </Box>
        </Box>
        <Box sx={{ fontSize: ".9rem" }}>Short description here...</Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexWrap: "wrap",
            width: "100%",
            mt: ".5rem",
          }}
        >
          <UserAttr label="Proposal maker" />
          <UserAttr label="Voter" />
          <UserAttr label="V.I.P." />
          <UserAttr label="Yes person" />
        </Box>
        <Box sx={{ width: "100%" }}>
          <UserSocial
            label="@alonemusk#4953"
            icon={<TelegramIcon color="primary" sx={{ mr: ".5rem" }} />}
          />
          <UserSocial
            label="@alonemuskreddit"
            icon={<RedditIcon color="primary" sx={{ mr: ".5rem" }} />}
          />
        </Box>
      </Box>
      <Box
        sx={{
          borderTop: "1px solid",
          borderTopColor: "border.main",
          pt: ".5rem",
          pl: ".5rem",
          pb: ".5rem",
          pr: ".5rem",
        }}
      >
        <CapsInfo title="Wallet Information" small />
        <Chip
          icon={<AccountBalanceWalletIcon />}
          label="9ff37p9rmnKHSj99nRcEvvEoHcY15vNyHUELoNedU4yEPyujVSn"
          color="primary"
        />
        <Chip
          avatar={<Avatar alt="PTK" src={PaideiaTokenSymbol.src} />}
          label="56,759 DTK"
          sx={{ mt: ".5rem" }}
        />
      </Box>
    </Box>
  );
};

export default AboutUser;
