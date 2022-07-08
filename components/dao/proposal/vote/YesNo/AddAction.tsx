import { Box, InputBase, Paper } from "@mui/material";
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

export interface IActionType {
  title: string;
  subtitle: string;
  icon: JSX.Element;
}

const renderDisplay = (display: string, props: IProposalAction) => {
  switch (display) {
    case "Quadratic Voting":
      return <QuadraticVoting {...props} />;
  }
};

const AddAction: React.FC<IProposalAction> = (props) => {
  const actionTypes: IActionType[] = [
    {
      title: "Quadratic Voting",
      subtitle: "Turn on or off the quadratic voting option",
      icon: <BalanceIcon />,
    },
  ];
  const [search, setSearch] = React.useState<string>("");

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
            <CapsInfo title="Most Common Actions" />
            {actionTypes
              .filter((i: IActionType) => {
                let temp = search.toLowerCase();
                return temp === ""
                  ? true
                  : i.title.toLowerCase().includes(temp);
              })
              .map((i: IActionType) => {
                return <ActionSelect {...i} />;
              })}
          </Box>
        </Box>
      ) : (
        renderDisplay(props.name, props)
      )}
    </Box>
  );
};

export default AddAction;
