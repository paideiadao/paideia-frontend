import { Box } from "@mui/material";
import * as React from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import DiamondIcon from "@mui/icons-material/Diamond";
import GroupsIcon from "@mui/icons-material/Groups";
import MovingIcon from "@mui/icons-material/Moving";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import BalanceIcon from '@mui/icons-material/Balance';

const BasicLink: React.FC<{
  icon: JSX.Element;
  title: string;
  selected: boolean;
  set: Function;
}> = (props) => {
  return (
    <Box sx={{ width: "100%", mt: '.5rem', mb: '.5rem' }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          fontSize: ".8rem",
          cursor: "pointer",
          color: props.selected ? "primary.main" : "primary.text",
        }}
        onClick={() => props.set(props.title)}
      >
        <Box
          sx={{
            backgroundColor: props.selected ? "red" : "transparent",
            height: "2rem",
            width: ".15rem",
            borderTopRightRadius: ".5rem",
            borderBottomRightRadius: ".5rem",
            mr: "auto",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            pt: ".5rem",
            pb: ".5rem",
            ml: ".5rem",
            mr: "auto",
            borderTopLeftRadius: ".3rem",
            borderBottomLeftRadius: ".3rem",
            pl: ".5rem",
            backgroundColor: props.selected ? "linkHover.main" : "transparent",
            ":hover ": {
              backgroundColor: "linkHover.main",
            },
            width: "100%",
            alignItems: "center",

          }}
        >
          <Box
            sx={{
              width: "10%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: ".5rem",
              color: props.selected ? "primary.main" : "inherit",
            }}
          >
            {props.icon}
          </Box>
          <Box>{props.title}</Box>
        </Box>
      </Box>
    </Box>
  );
};

const DropdownLink: React.FC<{
  icon: JSX.Element;
  title: string;
  selected: boolean;
  set: Function;
}> = (props) => {
  return (
    <Box sx={{ width: "100%", mt: '.5rem', mb: '.5rem' }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          fontSize: ".8rem",
          cursor: "pointer",
          color: props.selected ? "primary.main" : "primary.text",
        }}
        onClick={() => props.set(props.title)}
      >
        <Box
          sx={{
            backgroundColor: props.selected ? "red" : "transparent",
            height: "2rem",
            width: ".15rem",
            borderTopRightRadius: ".5rem",
            borderBottomRightRadius: ".5rem",
            mr: "auto",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            pt: ".5rem",
            pb: ".5rem",
            ml: ".5rem",
            mr: "auto",
            borderTopLeftRadius: ".3rem",
            borderBottomLeftRadius: ".3rem",
            pl: ".5rem",
            backgroundColor: props.selected ? "linkHover.main" : "transparent",
            ":hover ": {
              backgroundColor: "linkHover.main",
            },
            width: "100%",
            alignItems: "center",

          }}
        >
          <Box
            sx={{
              width: "10%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: ".5rem",
              color: props.selected ? "primary.main" : "inherit",
            }}
          >
            {props.icon}
          </Box>
          <Box>{props.title}</Box>
        </Box>
      </Box>
    </Box>
  );
};

// change to accordion.... still use list structure, but change components
// accordion should go inside a scollable wrapper.

let categories = [
  { icon: <BarChartIcon sx={{ opacity: ".8" }} />, label: "Dashboard" },
  { icon: <BalanceIcon sx={{ opacity: ".8" }} />, label: "Proposals" },
  { icon: <AutoAwesomeIcon sx={{ opacity: ".8" }} />, label: "Distributions" },
  { icon: <DiamondIcon sx={{ opacity: ".8" }} />, label: "Staking" },
  { icon: <GroupsIcon sx={{ opacity: ".8" }} />, label: "Members" },
  { icon: <MovingIcon sx={{ opacity: ".8" }} />, label: "Activity" },
  { icon: <DisplaySettingsIcon sx={{ opacity: ".8" }} />, label: "DAO Config" },
];

const Contents: React.FC = () => {
  const [selected, setSelected] = React.useState<string>("Dashboard");
  const setWrapper = (v: string) => setSelected(v);
  return (
    <Box sx={{ width: "100%", mb: "1rem" }}>
      {categories.map((i: any) => (
        ['Proposals', 'Financials', 'Settings'].indexOf(i.label) > -1 ? <Box> skeep here</Box> : <BasicLink
          icon={i.icon}
          title={i.label}
          selected={i.label === selected}
          set={setWrapper}
        />
      ))}
    </Box>
  );
};

export default Contents;
