import { Avatar, Box, FormControl, InputLabel, MenuItem } from "@mui/material";
import * as React from "react";
import { GlobalContext, IGlobalContext } from "../../../lib/AppContext";
import spreadly from "../../../public/dao/bio-image/spreadly.png";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const DaoBio: React.FC = () => {
  const globalContext = React.useContext<IGlobalContext>(GlobalContext);
  return (
    <Box
      sx={{
        width: "100%",
        color: "primary.text",
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid",
        borderBottomColor: "divider.main",
        flexDirection: "column",
        p: "1rem",
        pt: "0rem",
      }}
    >
      <Avatar
        sx={{ width: "5.5rem", height: "5.5rem", mt: "1rem", mb: "1rem" }}
      >
        <img src={spreadly.src} />
      </Avatar>
      <Box
        sx={{
          width: "100%",
          p: ".6rem",
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          borderRadius: ".3rem",
          display: "flex",
          alignItems: "center",
          border: "1px solid",
          borderColor: "divider.main",
          cursor: 'pointer'
        }}
      >
        <Box>
          <Box sx={{ fontSize: ".8rem" }}>Spreadly</Box>
          <Box sx={{ fontSize: ".7rem", color: "primary.lightText" }}>
            spreadly.paideia.im
          </Box>
        </Box>
        <Box
          sx={{
            ml: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <KeyboardArrowUpIcon
            sx={{ mb: "-.3rem", opacity: ".8", fontSize: "1.2rem" }}
          />
          <KeyboardArrowDownIcon
            sx={{ mt: "-.3rem", opacity: ".8", fontSize: "1.2rem" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DaoBio;
