import {
  Avatar,
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import * as React from "react";
import ergo from "@public/icons/ergo.png";
import ClearIcon from "@mui/icons-material/Clear";

const MobileWallet: React.FC<{
  set: Function;
  wallet: string;
  setWallet: Function;
}> = (props) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: "1rem",
          width: "100%",
          backgroundColor: "primary.lightOpacity",
          p: "1rem",
          borderRadius: ".5rem",
          border: "1px solid",
          borderColor: "primary.main",
        }}
      >
        <Avatar
          src={ergo.src}
          sx={{ height: "2.5rem", width: "2.5rem", mr: "1rem" }}
        />
        <Box sx={{ fontSize: "1.2rem", color: "text.main" }}>
          Mobile Wallet
          <Box sx={{ fontSize: ".9rem", color: "text.light", mt: "-.25rem" }}>
            Connect by manually adding your wallet address
          </Box>
        </Box>
        <Button sx={{ ml: "auto" }} size="small" onClick={() => props.set()}>
          Change
        </Button>
      </Box>
      <Box sx={{ mt: ".75rem", fontSize: ".9rem" }}>
        Please type your wallet address in the input field in order to connect
        it to Paideia and access all of Paideia's features.
      </Box>
      <TextField
        key="mobile-wallet-input"
        label="Wallet address    "
        sx={{ width: "100%", mt: ".75rem", fontSize: ".9rem" }}
        value={props.wallet}
        onChange={(e: any) => props.setWallet(e.target.value)}
        autoComplete={"false"}
        size="medium"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {props.wallet !== "" && (
                <IconButton color="primary" onClick={() => props.setWallet("")}>
                  <ClearIcon />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default MobileWallet;
