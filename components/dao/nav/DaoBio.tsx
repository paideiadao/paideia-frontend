import {
  Avatar,
  Box,
  Button,
  ClickAwayListener,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import * as React from "react";
import { GlobalContext, IGlobalContext } from "../../../lib/AppContext";
import PaideiaLogo from "@public/dao/bio-image/paideia-logo.png";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import Spreadly from "@public/icons/spreadly.png";
import ErgoPad from "@public/icons/ergopad.png";
import Azorus from "@public/icons/azorus.png";
import ErgoLend from "@public/icons/ergolend.png";
import Swamp from "@public/icons/swamp.png";

export interface IDao {
  name: string;
  url: string;
  id: number;
  href: string;
  img: string;
}

const daos: IDao[] = [
  {
    id: 1,
    name: "Paideia",
    url: "paideia.im/dao",
    href: "",
    img: PaideiaLogo.src,
  },
  {
    id: 5,
    name: "Spreadly",
    url: "paideia.im/dao/spreadly",
    href: "spreadly",
    img: Spreadly.src,
  },
  {
    id: 2,
    name: "Ergo Lend",
    url: "paideia.im/dao/ergolend",
    href: "ergolend",
    img: ErgoLend.src,
  },
  {
    id: 3,
    name: "Ergo Pad",
    url: "paideia.im/dao/ergopad",
    href: "ergopad",
    img: ErgoPad.src,
  },
  {
    id: 4,
    name: "Swamp Audio",
    url: "paideia.im/dao/swamp",
    href: "swamp",
    img: Swamp.src,
  },
  // {
  //   id: 6,
  //   name: "Ergodex",
  //   url: "paideia.im/dao/swamp",
  //   href: 'swamp',
  //   img: Swamp.src
  // },
];

const DaoBio: React.FC = () => {
  const globalContext = React.useContext<IGlobalContext>(GlobalContext);
  const [dropdown, setDropdown] = React.useState<boolean>(false);
  const [search, setSearch] = React.useState<string>("");

  const [id, setId] = React.useState<number>(1);
  const [dao, setDao] = React.useState<IDao>({
    id: 1,
    name: "Paideia",
    url: "paideia.im/dao",
    href: "",
    img: PaideiaLogo.src,
  });

  const setDaoWrapper = (dao: IDao) => {
    console.log(dao);
    setId(dao.id);
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
        borderBottomColor: "border.main",
        flexDirection: "column",
        p: ".75rem",
        pt: "0rem",
        position: "relative",
        zIndex: 100,
      }}
    >
      <Avatar sx={{ width: "4rem", height: "4rem", mt: ".5rem", mb: ".5rem" }}>
        <img src={PaideiaLogo.src} />
      </Avatar>
      <Box
        sx={{
          width: "100%",
          p: ".4rem",
          pt: ".2rem",
          pb: ".2rem",
          backgroundColor: "fileInput.main",
          borderRadius: ".3rem",
          display: "flex",
          alignItems: "center",
          border: "1px solid",
          borderColor: "border.main",
          cursor: "pointer",
        }}
        onClick={() => setDropdown(true)}
      >
        <Box>
          <Box sx={{ fontSize: ".7rem" }}>{dao.name}</Box>
          <Box sx={{ fontSize: ".6rem", color: "text.light" }}>{dao.url}</Box>
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
        <ClickAwayListener onClickAway={() => setDropdown(false)}>
          <Box
            sx={{
              position: "absolute",
              width: "89%",
              backgroundColor: "fileInput.main",
              // bottom: "-7rem",
              top: "5rem",
              display: "flex",
              alignItems: "flex-start",
              zIndex: 100,
              borderRadius: ".25rem",
              flexDirection: "column",
              p: ".5rem",
              pl: "0",
              pr: "0",
              border: "1px solid",
              borderColor: "border.main",
            }}
          >
            <Box
              sx={{
                width: "100%",
                pb: ".5rem",
                borderBottom: "1px solid",
                borderColor: "border.main",
                mb: ".5rem",
                pl: ".5rem",
                pr: ".5rem",
              }}
            >
              <TextField
                value={search}
                onChange={(e: any) => setSearch(e.target.value)}
                size="small"
                placeholder="Search by name or url"
                InputProps={{
                  sx: { fontSize: ".7rem" },
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon color="primary" sx={{ fontSize: "1rem" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{ width: "100%" }}
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                pl: ".5rem",
                pr: ".5rem",
                overflowY: "auto",

                maxHeight: "15rem",
              }}
            >
              {daos
                .filter((i: any) =>
                  search === ""
                    ? true
                    : i.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((d: any, c: number) => (
                  <DaoSelect
                    data={d}
                    set={setDaoWrapper}
                    key={`dao-select-key-${c}`}
                    selected={id === d.id}
                  />
                ))}{" "}
            </Box>
          </Box>
        </ClickAwayListener>
      )}
    </Box>
  );
};

const DaoSelect: React.FC<{ set: Function; selected: boolean; data: IDao }> = (
  props
) => {
  return (
    <Link href={`/dao/${props.data.href}`}>
      <Box
        sx={{
          pl: ".5rem",
          pt: ".25rem",
          pb: ".25rem",
          mb: ".5rem",
          width: "100%",
          cursor: "pointer",
          borderRadius: ".3rem",
          display: "flex",
          alignItems: "center",
          backgroundColor: props.selected
            ? "primary.lightOpacity"
            : "fileInput.main",
          pr: ".25rem",
        }}
        onClick={() => props.set(props.data)}
      >
        <Avatar
          src={props.data.img}
          sx={{ width: "1.5rem", height: "1.5rem" }}
        />
        <Box sx={{ fontSize: ".7rem", ml: ".5rem" }}>
          {props.data.name}
          <Box sx={{ fontSize: ".6rem", color: "text.light" }}>
            {props.data.url}
          </Box>
        </Box>
        {props.selected && (
          <Box sx={{ ml: "auto" }}>
            <CheckIcon sx={{ fontSize: "1rem" }} color="primary" />
          </Box>
        )}
      </Box>
    </Link>
  );
};

export default DaoBio;
