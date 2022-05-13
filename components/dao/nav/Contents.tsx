import { Box } from "@mui/material";
import * as React from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import DiamondIcon from "@mui/icons-material/Diamond";
import GroupsIcon from "@mui/icons-material/Groups";
import MovingIcon from "@mui/icons-material/Moving";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";
import BalanceIcon from "@mui/icons-material/Balance";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GridViewIcon from "@mui/icons-material/GridView";

const BasicLink: React.FC<{
  icon: JSX.Element;
  title: string;
  selected: boolean;
  set: Function;
  m?: string
}> = (props) => {
  return (
    <Box sx={{ width: "100%", mt: props.m === undefined ? ".5rem" : props.m, mb: props.m === undefined ? ".5rem" : props.m }}>
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
    <Box sx={{ width: "100%", mt: ".5rem", mb: ".5rem" }}>
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
  const [subSelected, setSubSelected] = React.useState<string>(undefined);
  const setWrapper = (v: string) => {
    setSubSelected(undefined);
    setSelected(v);
  };
  const setSubWrapper = (v: string) => setSubSelected(v);

  return (
    <Box sx={{ width: "100%", mb: "1rem" }}>
      {categories.map((i: any) =>
        ["Proposals", "Financials", "Settings"].indexOf(i.label) > -1 ? (
          <Accordion
            sx={{
              backgroundColor: "backgroundColor.main",
              color: selected === i.label ? "primary.main" : "primary.text",
              pl: 0,
              ml: '0'
            }}
            disableGutters
            elevation={0}
            expanded={i.label === selected}
          >
            <AccordionSummary
              onClick={() => setSelected(i.label)}
              expandIcon={
                <Box
                  sx={{
                    pl: "1rem",
                    pr: "1rem",
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: 'transparent',
                    width: "3.5rem",
                    height: "2.5rem",
                  }}
                >
                  <ExpandMoreIcon
                    sx={{
                      color:
                        selected === i.label ? "primary.main" : "primary.text",
                    }}
                  />
                </Box>
              }
              id="panel1a-header"
              sx={{
                ml: 0,
                pl: 0,
                pr: 0,
                ":hover ": {
                  backgroundColor: "linkHover.main",
                },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  mt: "-.5rem",
                  mb: "-.5rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: ".8rem",
                    cursor: "pointer",
                    width: "100%",
                    color:
                      selected === i.label ? "primary.main" : "primary.text",
                  }}
                  onClick={() => setSelected(i.label)}
                >
                  <Box
                    sx={{
                      mr: "auto",
                      width: ".2rem",
                      height: "2rem",
                      backgroundColor: 'backgroundColor.main',
                      ":hover ": {
                        backgroundColor: "backgroundColor.main",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor:
                          selected === i.label && subSelected === undefined ? "red" : "transparent",
                        height: "2rem",
                        width: ".15rem",
                        borderTopRightRadius: ".5rem",
                        borderBottomRightRadius: ".5rem",
                        mr: "auto",
                      }}
                    ></Box>
                  </Box>

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
                        mr: ".65rem",
                        color:
                          selected === i.label ? "primary.main" : "inherit",
                      }}
                    >
                      {i.icon}
                    </Box>
                    <Box sx={{ width: "100%" }}>{i.label}</Box>
                  </Box>
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ opacity: 1, color: "primary.text", pl: 0 }}>
              <BasicLink
                icon={<GridViewIcon sx={{ opacity: ".8" }} />}
                title={"All"}
                selected={"All" === subSelected}
                set={setSubWrapper}
                m={0}
              />
            </AccordionDetails>
          </Accordion>
        ) : (
          <BasicLink
            icon={i.icon}
            title={i.label}
            selected={i.label === selected}
            set={setWrapper}
          />
        )
      )}
    </Box>
  );
};

export default Contents;
