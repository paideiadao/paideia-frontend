import { Badge, Box } from "@mui/material";
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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GridViewIcon from "@mui/icons-material/GridView";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import FaceIcon from "@mui/icons-material/Face";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import BoltIcon from "@mui/icons-material/Bolt";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import EditNotificationsIcon from "@mui/icons-material/EditNotifications";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { GlobalContext, IGlobalContext } from "@lib/AppContext";
import Link from "next/link";

const BasicLink: React.FC<{
  icon: JSX.Element;
  title: string;
  selected: boolean;
  set: Function;
  m?: string;
  ml?: string;
  notifications?: number;
}> = (props) => {
  let globalContext = React.useContext<IGlobalContext>(GlobalContext);
  let linkLookup = {
    Dashboard: `/dao/${globalContext.api.daoId}`,
    All: `/dao/${globalContext.api.daoId}/proposals/all`,
    Following: `/dao/${globalContext.api.daoId}/proposals/following`,
    Mine: `/dao/${globalContext.api.daoId}/proposals/mine`,
    Past: `/dao/${globalContext.api.daoId}/proposals/past`,
    Treasury: `/dao/${globalContext.api.daoId}/financials/treasury`,
    Tokenomics: `/dao/${globalContext.api.daoId}/financials/tokenomics`,
    Recurring: `/dao/${globalContext.api.daoId}/financials/recurring`,
    Token: `/dao/${globalContext.api.daoId}/financials/token`,
    Distributions: `/dao/${globalContext.api.daoId}/distributions`,
    Staking: `/dao/${globalContext.api.daoId}/staking`,
    Members: `/dao/${globalContext.api.daoId}/members`,
    Activity: `/dao/${globalContext.api.daoId}/activity`,
    "Edit profile": `/dao/${globalContext.api.daoId}/profile/edit`,
    Notifications: `/dao/${globalContext.api.daoId}/notifications/edit`,
    Wallet: `/dao/${globalContext.api.daoId}/wallet`,

    "DAO Config": `/dao/${globalContext.api.daoId}/dao-config`,
  };
  return (
    <Link href={linkLookup[props.title]}>
      <Box
        sx={{
          width: "100%",
          mt: props.m === undefined ? ".25rem" : props.m,
          mb: props.m === undefined ? ".25rem" : props.m,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: ".7rem",
            cursor: "pointer",
            color: props.selected ? "primary.main" : "primary.text",
            ":hover": {
              backgroundColor: "linkHover.main",
            },
          }}
          onClick={() => props.set(props.title)}
        >
          <Box
            sx={{
              backgroundColor: props.selected
                ? "secondary.main"
                : "transparent",
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
              pt: ".25rem",
              pb: ".25rem",
              ml: ".5rem",
              mr: "auto",
              borderTopLeftRadius: ".3rem",
              borderBottomLeftRadius: ".3rem",
              pl: ".5rem",
              width: "100%",
              alignItems: "center",
              backgroundColor: props.selected
                ? "linkHover.main"
                : "transparent",
            }}
          >
            <Box
              sx={{
                width: "10%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mr: ".5rem",
                ml: props.ml === undefined ? 0 : props.ml,
                color: props.selected ? "primary.main" : "inherit",
              }}
            >
              {props.icon}
            </Box>
            <Box sx={{ width: "73.5%" }}>{props.title}</Box>
            {props.notifications > 0 && (
              <Box sx={{ width: "10%" }}>
                <Badge
                  color="primary"
                  badgeContent={props.notifications}
                  sx={{ pt: ".1rem" }}
                  max={10}
                ></Badge>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

const DropdownLink: React.FC<{
  icon: JSX.Element;
  title: string;
  selected: boolean;
  set: Function;
  subSelected: string;
  links: JSX.Element;
}> = (props) => {
  return (
    <Accordion
      sx={{
        backgroundColor: "backgroundColor.main",
        color: props.selected ? "primary.main" : "primary.text",
        pl: 0,
        ml: 0,
        mt: ".25rem",
        mb: ".25rem",
      }}
      disableGutters
      elevation={0}
      expanded={props.selected}
    >
      <AccordionSummary
        onClick={() => props.set(props.title)}
        expandIcon={
          <Box
            sx={{
              pl: "1rem",
              pr: "1rem",
              display: "flex",
              alignItems: "center",
              backgroundColor: "transparent",
              width: "3.5rem",
              height: "2rem",
              minHeight: 0,
            }}
          >
            <ExpandMoreIcon
              sx={{
                color: props.selected ? "primary.main" : "primary.text",
              }}
            />
          </Box>
        }
        id="panel1a-header"
        sx={{
          height: "2rem",
          ml: 0,
          pl: 0,
          pr: 0,
          pt: 0,
          pb: 0,
          minHeight: 0,
          ":hover ": {
            backgroundColor: "linkHover.main",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            mt: "-1rem",
            mb: "-1rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: ".7rem",
              cursor: "pointer",
              width: "100%",
              color: props.selected ? "primary.main" : "primary.text",
            }}
            onClick={() => props.set(props.title)}
          >
            <Box
              sx={{
                mr: "auto",
                width: ".2rem",
                height: "2rem",
                backgroundColor:
                  props.selected && props.subSelected === undefined
                    ? "backgroundColor.main"
                    : "transparent",
                ":hover ": {
                  backgroundColor: "linkHover.main",
                },
              }}
            >
              <Box
                sx={{
                  backgroundColor:
                    props.selected && props.subSelected === undefined
                      ? "secondary.main"
                      : "transparent",
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
                  ml: ".1rem",
                  color: props.selected ? "primary.main" : "inherit",
                }}
              >
                {props.icon}
              </Box>
              <Box sx={{ width: "100%" }}>{props.title}</Box>
            </Box>
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{ opacity: 1, color: "primary.text", p: 0 }}>
        {props.links}
      </AccordionDetails>
    </Accordion>
  );
};

// change to accordion.... still use list structure, but change components
// accordion should go inside a scollable wrapper.

const Contents: React.FC = () => {
  const [selected, setSelected] = React.useState<string>("Dashboard");
  const [subSelected, setSubSelected] = React.useState<string>(undefined);
  const setWrapper = (v: string) => {
    setSubSelected(undefined);
    setSelected(v);
  };
  const setSubWrapper = (v: string) => setSubSelected(v);
  let categories = [
    { icon: <BarChartIcon sx={{ opacity: ".8" }} />, label: "Dashboard" },
    {
      icon: <BalanceIcon sx={{ opacity: ".8" }} />,
      label: "Proposals",
      links: (
        <>
          <BasicLink
            icon={<GridViewIcon sx={{ opacity: ".8" }} />}
            title={"All"}
            selected={"All" === subSelected}
            set={setSubWrapper}
            ml=".5rem"
          />
          <BasicLink
            icon={<FavoriteIcon sx={{ opacity: ".8" }} />}
            title={"Following"}
            selected={"Following" === subSelected}
            set={setSubWrapper}
            ml=".5rem"
          />
          <BasicLink
            icon={<FaceIcon sx={{ opacity: ".8" }} />}
            title={"Mine"}
            selected={"Mine" === subSelected}
            set={setSubWrapper}
            ml=".5rem"
          />
          <BasicLink
            icon={<AccessTimeFilledIcon sx={{ opacity: ".8" }} />}
            title={"Past"}
            selected={"Past" === subSelected}
            set={setSubWrapper}
            ml=".5rem"
          />
        </>
      ),
    },
    {
      icon: <AttachMoneyIcon sx={{ opacity: ".8" }} />,
      label: "Financials",
      links: (
        <>
          <BasicLink
            icon={<AccountBalanceIcon sx={{ opacity: ".8" }} />}
            title={"Treasury"}
            selected={"Treasury" === subSelected}
            set={setSubWrapper}
            ml=".5rem"
          />
          <BasicLink
            icon={<DonutSmallIcon sx={{ opacity: ".8" }} />}
            title={"Tokenomics"}
            selected={"Tokenomics" === subSelected}
            set={setSubWrapper}
            ml=".5rem"
          />
          <BasicLink
            icon={<AutorenewIcon sx={{ opacity: ".8" }} />}
            title={"Recurring"}
            selected={"Recurring" === subSelected}
            set={setSubWrapper}
            ml=".5rem"
          />
          <BasicLink
            icon={<BoltIcon sx={{ opacity: ".8" }} />}
            title={"Token"}
            selected={"Token" === subSelected}
            set={setSubWrapper}
            ml=".5rem"
          />
        </>
      ),
    },
    {
      icon: <AutoAwesomeIcon sx={{ opacity: ".8" }} />,
      label: "Distributions",
    },
    { icon: <DiamondIcon sx={{ opacity: ".8" }} />, label: "Staking" },
    { icon: <GroupsIcon sx={{ opacity: ".8" }} />, label: "Members" },
    {
      icon: <MovingIcon sx={{ opacity: ".8" }} />,
      label: "Activity",
      notifications: 3,
    },
    {
      icon: <SettingsIcon sx={{ opacity: ".8" }} />,
      label: "Settings",
      links: (
        <>
          <BasicLink
            icon={<PersonIcon sx={{ opacity: ".8" }} />}
            title={"Edit profile"}
            selected={"Edit profile" === subSelected}
            set={setSubWrapper}
            ml=".5rem"
          />
          <BasicLink
            icon={<EditNotificationsIcon sx={{ opacity: ".8" }} />}
            title={"Notifications"}
            selected={"Notifications" === subSelected}
            set={setSubWrapper}
            ml=".5rem"
          />
          <BasicLink
            icon={<AccountBalanceWalletIcon sx={{ opacity: ".8" }} />}
            title={"Wallet"}
            selected={"Wallet" === subSelected}
            set={setSubWrapper}
            ml=".5rem"
          />
        </>
      ),
    },
    {
      icon: <DisplaySettingsIcon sx={{ opacity: ".8" }} />,
      label: "DAO Config",
    },
  ];
  return (
    <Box
      sx={{
        width: "100%",
        mb: "1rem",
        height: "55%",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      {categories.map((i: any, c: number) =>
        ["Proposals", "Financials", "Settings"].indexOf(i.label) > -1 ? (
          <DropdownLink
            title={i.label}
            set={setWrapper}
            subSelected={subSelected}
            icon={i.icon}
            selected={i.label === selected}
            links={i.links}
            key={"nav-contents-key-" + c}
          />
        ) : (
          <BasicLink
            icon={i.icon}
            title={i.label}
            selected={i.label === selected}
            set={setWrapper}
            notifications={i.notifications}
            key={"nav-contents-key-" + c}
          />
        )
      )}
    </Box>
  );
};

export default Contents;
