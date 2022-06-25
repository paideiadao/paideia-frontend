import { Avatar, Box, Button } from "@mui/material";
import * as React from "react";
import nautilus from "@public/icons/nautilus.png";

const Nautilus: React.FC<{set: Function, connect: Function}> = (props) => {

    React.useEffect(() => {
        props.connect()
    }, [])
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
          src={nautilus.src}
          sx={{ height: "3rem", width: "3rem", mr: "1rem" }}
        />
        <Box sx={{ fontSize: "1.2rem", color: "text.main" }}>
          Nautilus
          <Box sx={{ fontSize: ".9rem", color: "text.light", mt: "-.25rem" }}>
            Connect automatically signing with your wallet
          </Box>
        </Box>
        <Button sx={{ ml: "auto" }} size="small" onClick={() => props.set()}>
          Change
        </Button>
      </Box>
      <Box sx={{ mt: ".5rem" }}>
        Follow the instructions in your Nautilus Wallet to confirm and you will
        connect your wallet instantly. If a popup box is not appearing or if you
        accidentally closed it, please{" "}
        <Box
          sx={{
            cursor: 'pointer',
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
    </Box>
  );
};

export default Nautilus;
