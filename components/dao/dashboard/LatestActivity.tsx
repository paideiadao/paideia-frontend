import { Box, Button, Avatar } from "@mui/material";
import * as React from "react";
import { Subheader } from "../../creation/utilities/HeaderComponents";
import Activity from "../activity/Activity";

export const activities = [
  {
    date: new Date(),
    img: "T",
    name: "Username",
    action: "created the proposal",
    value: "proposal name",
  },
  {
    date: new Date(),
    img: "T",
    name: "Username",
    action: "made a comment on the proposal",
    value: "proposal name",
  },
  {
    date: new Date(),
    img: "T",
    name: "Username",
    action: "voted on the proposal",
    value: "proposal name",
  },
  {
    date: new Date(),
    img: "T",
    name: "Username",
    action: "created the proposal",
    value: "proposal name",
  },
  {
    date: new Date(),
    img: "T",
    name: "Username",
    action: "created the proposal",
    value: "proposal name",
  },
];

const LatestActivity: React.FC = () => {
  return (
    <Box sx={{ width: "100%", pb: ".5rem" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          mt: ".5rem",
        }}
      >
        <Subheader title="Latest activity" small bold />
        <Button sx={{ ml: "auto", fontSize: ".8rem" }}>
          View Activity Log
        </Button>
      </Box>
      {activities.map((i: any, c: number) => {
        return <Activity i={i} c={c} key={"latest-activity" + c} />;
      })}
    </Box>
  );
};

export default LatestActivity;
