import {
  Avatar,
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import * as React from "react";
import nautilus from "@public/icons/nautilus.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ClearIcon from "@mui/icons-material/Clear";

const Nautilus: React.FC<{
  set: Function;
  connect: Function;
  wallet: string;
  connected: boolean;
  addresses: any[];
  setWallet: Function;
  load: Function;
}> = (props) => {
  const [wallet, setWallet] = React.useState<string>(props.wallet);
  React.useEffect(() => {
    if (wallet === '') {
      const connect = async () => await props.connect()
      connect().then(() => props.load())
    } else {
      console.log('fuck')
      props.load()
    }
    
  }, []);


  React.useEffect(() => {
    setWallet(props.wallet)
  }, [props.wallet])
  return (
    <Box sx={{ width: "100%" }}>
      {props.wallet !== '' ? (
        <>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              fontSize: "1.5rem",
              mt: "1rem",
            }}
          >
            <CheckCircleIcon
              color="primary"
              sx={{ fontSize: "3rem", mr: "1rem" }}
            />
            Wallet successfully connected!
          </Box>
          <Box sx={{ mt: ".5rem", fontSize: ".9rem", mb: ".5rem" }}>
            Select which address you want to use as as the default.
          </Box>
          <TextField
            label="Default Wallet Address"
            sx={{ width: "100%", mt: ".75rem" }}
            value={wallet}
            disabled
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {wallet !== "" && <CheckCircleIcon color="success" />}
                </InputAdornment>
              ),
            }}
          />
          <Box
            sx={{
              width: "100%",
              border: "1px solid",
              borderColor: "divider.main",
              borderRadius: ".3rem",
              mt: "1rem",
              maxHeight: "15rem",
              overflowY: "auto",
            }}
          >
            {props.addresses !== undefined &&
              props.addresses.map((i: any, c: number) => {
                console.log(i);
                return (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      fontSize: ".7rem",
                      pl: ".5rem",
                      mt: ".5rem",
                      pb: ".5rem",
                      borderBottom:
                        c === props.addresses.length - 1 ? 0 : "1px solid",
                      borderBottomColor: "divider.main",
                    }}
                    key={`${i.name}-address-selector`}
                  >
                    {i.name}
                    <Button
                      sx={{ ml: "auto", mr: ".5rem" }}
                      disabled={wallet === i.name}
                      variant="contained"
                      size="small"
                      onClick={() => {
                        setWallet(i.name);
                        props.setWallet(i.name);
                      }}
                    >
                      {wallet === i.name ? "Active" : "Choose"}
                    </Button>
                  </Box>
                );
              })}
          </Box>
        </>
      ) : (
        <>
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
              src={nautilus.src}
              sx={{ height: "3rem", width: "3rem", mr: "1rem" }}
            />
            <Box sx={{ fontSize: "1.2rem", color: "text.main" }}>
              Nautilus
              <Box
                sx={{ fontSize: ".9rem", color: "text.light", mt: "-.25rem" }}
              >
                Connect automatically signing with your wallet
              </Box>
            </Box>
            <Button
              sx={{ ml: "auto" }}
              size="small"
              onClick={() => props.set()}
            >
              Change
            </Button>
          </Box>
          <Box sx={{ mt: ".5rem", fontSize: '.9rem' }}>
            Follow the instructions in your Nautilus Wallet to confirm and you
            will connect your wallet instantly. If a popup box is not appearing
            or if you accidentally closed it, please{" "}
            <Box
              sx={{
                cursor: "pointer",
                display: "inline",
                textDecoration: "underline",
                color: "primary.main",
              }}
              onClick={() => props.connect()}
            >
              click here
            </Box>{" "}
            to open it again
          </Box>
        </>
      )}
    </Box>
  );
};

export default Nautilus;
