import {
  CapsInfo,
  Header,
} from "@components/creation/utilities/HeaderComponents";
import Layout from "@components/dao/Layout";
import { useAddWallet } from "@components/wallet/AddWalletContext";
import { useWallet } from "@components/wallet/WalletContext";
import { Box, Button, Tab, IconButton, Avatar, Chip } from "@mui/material";
import * as React from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import EditIcon from "@mui/icons-material/Edit";
import ImagePlaceholder from "../../../public/images/image-placeholder.png";
import dateFormat from "dateformat";
import { CheckCircle } from "@mui/icons-material";
import PaideiaLogo from "@public/dao/bio-image/paideia-logo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ActiveWallet: React.FC<{ previous?: boolean }> = (props) => {
  const { wallet, dAppWallet } = useWallet();
  const { setAddWalletOpen } = useAddWallet();
  const handleClickOpen = () => {
    setAddWalletOpen(true);
  };
  const [show, setShow] = React.useState<boolean>(false);

  return (
    <Box
      sx={{
        p: "1rem",
        pt: ".25rem",
        pb: ".25rem",
        backgroundColor: "fileInput.outer",
        border: "1px solid",
        borderColor: "divider.main",
        borderRadius: ".3rem",
      }}
    >
      <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
        <CapsInfo
          title={`${props.previous ? "Previously " : ""}Connected Wallet`}
          mb="0"
        />
        <IconButton onClick={handleClickOpen} sx={{ mr: "-.5rem" }}>
          <EditIcon sx={{ ml: "auto" }} color="primary" />
        </IconButton>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          src={ImagePlaceholder.src}
          sx={{ width: "2.5rem", height: "2.5rem" }}
        />
        <Box sx={{ ml: "1rem" }}>
          Nautilus
          <Box sx={{ fontSize: ".9rem", color: "text.light" }}>
            Connected at: {dateFormat(new Date(), "mmm d, yyyy: h:mmTT")}
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", mt: "1rem" }}>
        <Box>
          <CapsInfo title="Default wallet address" mb=".2rem" />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CheckCircle color="success" sx={{ mr: ".5rem" }} />
            {wallet}
          </Box>
        </Box>
        <Box sx={{ ml: "auto" }}>
          <Chip
            icon={
              <Avatar
                src={PaideiaLogo.src}
                sx={{ height: "1.5rem", width: "1.5rem" }}
              />
            }
            label="56,759 PTK"
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          mt: "1rem",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Button onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"} other wallet addresses{" "}
          {show ? (
            <KeyboardArrowUpIcon sx={{ ml: ".3rem" }} color="primary" />
          ) : (
            <KeyboardArrowDownIcon sx={{ ml: ".3rem" }} color="primary" />
          )}
        </Button>
        {show && (
          <Box>
            {dAppWallet.addresses
              .filter((i: string) => i !== wallet)
              .map((i: string, c: number) => (
                <Box
                  key={`other-wallet-addresses-key-${c}`}
                  sx={{ mt: ".5rem", mb: ".5rem" }}
                >
                  {i}
                </Box>
              ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

const previousWallets = [1, 2];

const Wallet: React.FC = () => {
  const { setAddWalletOpen } = useAddWallet();
  const handleClickOpen = () => {
    setAddWalletOpen(true);
  };

  const [value, setValue] = React.useState("Active");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
        <Header title="Wallet connection" large />
        <Button
          sx={{ ml: "auto" }}
          variant="contained"
          onClick={handleClickOpen}
        >
          Change Wallet
          <AccountBalanceWalletIcon sx={{ ml: ".5rem" }} />
        </Button>
      </Box>
      <TabContext value={value}>
        <Box
          sx={{
            width: "100%",
            borderBottom: "1px solid",
            borderBottomColor: "divider.main",
            mt: "1rem",
          }}
        >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Active" value="Active" />
            <Tab label="Previously Connected" value="Previously Connected" />
          </TabList>
        </Box>
        <TabPanel value="Active" sx={{ pl: 0, pr: 0 }}>
          <ActiveWallet />
        </TabPanel>
        <TabPanel value="Previously Connected" sx={{ pl: 0, pr: 0 }}>
          {previousWallets.map((i: any, c: number) => {
            return (
              <Box sx={{ mb: "1rem" }}>
                <ActiveWallet key={`previous-wallet-key-${c}`} previous />
              </Box>
            );
          })}
        </TabPanel>
      </TabContext>
    </Layout>
  );
};

export default Wallet;
