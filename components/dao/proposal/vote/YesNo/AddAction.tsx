import { Box, Button, InputBase, Paper } from "@mui/material";
import * as React from "react";
import BalanceIcon from "@mui/icons-material/Balance";
import CancelIcon from "@mui/icons-material/Cancel";
import QuadraticVoting from "./QuadraticVoting";
import {
  CapsInfo,
  Header,
} from "@components/creation/utilities/HeaderComponents";
import { IProposalAction } from "@pages/dao/[id]/proposal/create";
import SearchIcon from "@mui/icons-material/Search";
import ActionSelect from "./ActionSelect";
import ProposalContext, { IProposalContext } from "@lib/dao/proposal/ProposalContext";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AddIcon from '@mui/icons-material/Add';

export interface IActionType {
  title: 'Send funds' | 'Create liquidity pool' | "Change DAO's description" | "Quadratic voting" | 'Vote duration' | 'Support' | 'Quorum' | 'Optimistic governance' | undefined;
  subtitle: string;
  icon: JSX.Element;
  mostCommon?: boolean;
  select?: () => void
}

const renderDisplay = (display: string, props: IProposalAction) => {
  switch (display) {
    case "Quadratic voting":
      return <QuadraticVoting {...props} />;
  }
};

const AddAction: React.FC<IProposalAction> = (props) => {
  const actionTypes: IActionType[] = [
    {
      title: "Send funds",
      subtitle: "Propose to send an amount of fund to one or multiple wallets",
      icon: <AttachMoneyIcon />,
      mostCommon: true
    },
    {
      title: "Create liquidity pool",
      subtitle: "Create a liquidity pool with a set amount of tokens",
      icon: <AttachMoneyIcon />,
      mostCommon: true
    },
    {
      title: "Change DAO's description",
      subtitle: "Propose a different text for the DAO's description",
      icon: <SettingsIcon />,
      mostCommon: true
    },
    {
      title: "Quadratic voting",
      subtitle: "Turn on or off the quadratic voting option",
      icon: <BalanceIcon />,
    },
    {
      title: "Vote duration",
      subtitle: "Create, edit, or delete the vote durations set for the DAO's governance",
      icon: <BalanceIcon />,
    },
    {
      title: "Support",
      subtitle: "Edit the minimum level of support needed for single choice voting",
      icon: <BalanceIcon />,
    },
    {
      title: "Quorum",
      subtitle: "Edit the minimum level of quorum needed fro any proposal to be approved",
      icon: <BalanceIcon />,
    },
    {
      title: "Optimistic governance",
      subtitle: "Turn on or off optimistic governance and or edit the whitelisted members",
      icon: <BalanceIcon />,
    },
  ];
  const [search, setSearch] = React.useState<string>("");
  const [showAll, setShowAll] = React.useState<boolean>(false);


  const context = React.useContext<IProposalContext>(ProposalContext)

  return (
    <Box
      sx={{
        borderRadius: ".3rem",
        backgroundColor: "fileInput.outer",
        border: "1px solid",
        borderColor: "border.main",
        display: "flex",
        flexWrap: "wrap",
        mt: ".5rem",
        mb: ".5rem",
        width: "100%",
        position: "relative",
        justifyContent: "center",
      }}
    >
      {props.name === undefined ? (
        <Box sx={{ width: "100%", pl: "1rem", pr: "1rem" }}>
          {/* <CancelIcon
                sx={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  cursor: "pointer",
                }}
                color="error"
                onClick={() => props.close()}
              /> */}
          <Box
            sx={{
              width: "100%",
              mb: "1rem",
            }}
          >
            <Header
              title="Choose an action"
              large
              mb="0"
              subtitle="Pick from the most common actions or simply use the search bar."
            />
          </Box>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: "backgroundColor.main",
              border: "1px solid",
              borderColor: "border.main",
              p: ".35rem",
              borderRadius: "5rem",
              display: "flex",
              alignItems: "center",
              ":hover": {
                borderColor: "primary.main",
              },
              width: "100%",
            }}
          >
            <Box
              sx={{
                width: "5%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SearchIcon sx={{ opacity: ".6", fontSize: "1.2rem" }} />
            </Box>
            <InputBase
              sx={{
                ml: ".5rem",
                fontSize: ".9rem",
                color: "text.main",
                width: "100%",
              }}
              placeholder="Search action"
              value={search}
              // @ts-ignore
              onChange={(
                event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
              ) => setSearch(event.target.value)}
            />
          </Paper>
          <Box sx={{ mt: "1rem" }}>
            <CapsInfo title={showAll ? 'All actions' : search === '' ? "Most Common Actions" : 'Search Results'} mb='.25rem' />
            {actionTypes
              .filter((i: IActionType) => {
                let temp = search.toLowerCase();
                return showAll ? true : temp === ""
                  ? i.mostCommon
                  : i.title.toLowerCase().includes(temp);
              })
              .map((i: IActionType, c: number) => {
                return <ActionSelect {...i} select={() => {
                  let temp = [...context.api.value.actions]
                  temp[c].name = i.title
                  context.api.setValue({
                    ...context.api.value,
                    actions: temp
                  })
                }}/>;
              })}
          </Box>
          <Box sx={{width: '100%', borderTop: 1, borderColor: 'border.main'}}>
            <ActionSelect
              icon={<AddIcon/>}
              title='Custom action'
              subtitle="Create your own action from scratch, you can even include a call to a custom smart contract."
            />
          </Box>
          <Box sx={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', pb: '.5rem'}}>
              <Button onClick={() => setShowAll(!showAll)} endIcon={showAll ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}>
                {showAll ? 'Show most common actions' : 'Show all actions' }
              </Button>
          </Box>
        </Box>
      ) : (
        renderDisplay(props.name, props)
      )}
    </Box>
  );
};

export default AddAction;
