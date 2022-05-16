import {
  Avatar,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import * as React from "react";
import { GlobalContext, IGlobalContext } from "../../../lib/AppContext";
import spreadly from "../../../public/dao/bio-image/spreadly.png";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

export interface IDao {
  name: string;
  url: string;
}

const daos = [
  {
    name: "Paideia",
    url: "dao.paideia.im",
  },
  {
    name: "Ergo Lend",
    url: "ergolend.paideia.im",
  },
  {
    name: "Ergo Pad",
    url: "ergopad.paideia.im",
  },
  {
    name: "Ergo Games",
    url: "ergogames.paideia.im",
  },
];

const DaoBio: React.FC = () => {
  const globalContext = React.useContext<IGlobalContext>(GlobalContext);
  const [dropdown, setDropdown] = React.useState<boolean>(false);

  const [dao, setDao] = React.useState<IDao>({
    name: "Spreadly",
    url: "spreadly.paideia.im",
  });

  const setDaoWrapper = (dao: IDao) => {
    setDao(dao);
    setDropdown(false);
  };

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
        p: ".75rem",
        pt: "0rem",
        position: "relative",
        zIndex: 100,
      }}
    >
      <Avatar sx={{ width: "4rem", height: "4rem", mt: ".5rem", mb: ".5rem" }}>
        <img src={spreadly.src} />
      </Avatar>
      <Box
        sx={{
          width: "100%",
          p: ".4rem",
          pt: ".2rem",
          pb: ".2rem",
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          borderRadius: ".3rem",
          display: "flex",
          alignItems: "center",
          border: "1px solid",
          borderColor: "divider.main",
          cursor: "pointer",
        }}
        onClick={() => setDropdown(true)}
      >
        <Box>
          <Box sx={{ fontSize: ".7rem" }}>{dao.name}</Box>
          <Box sx={{ fontSize: ".6rem", color: "primary.lightText" }}>
            {dao.url}
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
      {dropdown && (
        <Box
          sx={{
            position: "absolute",
            width: "90%",
            backgroundColor: "fileInput.main",
            bottom: "-7rem",
            m: ".4rem",
            mr: "6%",
            ml: "6%",
            display: "flex",
            alignItems: "flex-start",
            height: "10rem",
            zIndex: 100,
            borderRadius: ".25rem",
            overflowY: "scroll",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              cursor: "pointer",
              position: "fixed",
              left: "12rem",
              top: "5rem",
            }}
          >
            <IconButton onClick={() => setDropdown(false)} size="small">
              <CloseIcon color="primary" sx={{ fontSize: "1rem" }} />
            </IconButton>
          </Box>
          {daos.map((d: any) => (
            <DaoSelect {...d} set={setDaoWrapper} />
          ))}
        </Box>
      )}
    </Box>
  );
};

const DaoSelect: React.FC<{ set: Function; name: string; url: string }> = (
  props
) => {
  return (
    <Box
      sx={{
        pl: ".5rem",
        pt: ".25rem",
        pb: ".25rem",
        borderBottom: "1px solid",
        borderBottomColor: "divider.main",
        width: "100%",
        cursor: "pointer",
      }}
      onClick={() =>
        props.set({
          name: props.name,
          url: props.url,
        })
      }
    >
      <Box sx={{ fontSize: ".7rem" }}>{props.name}</Box>
      <Box sx={{ fontSize: ".6rem", color: "primary.lightText" }}>
        {props.url}
      </Box>
    </Box>
  );
};

export default DaoBio;
