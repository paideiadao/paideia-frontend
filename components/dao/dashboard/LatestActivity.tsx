import { Box, Button, Avatar } from "@mui/material";
import * as React from "react";
import { Subheader } from "../../creation/utilities/HeaderComponents";
import dateFormat from "dateformat";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const activities = [
  {
    date: new Date(),
    img: "T",
    name: "Username",
    action: "created the proposal",
    proposalname: "proposal name",
  },
  {
    date: new Date(),
    img: "T",
    name: "Username",
    action: "made a comment on the proposal",
    proposalname: "proposal name",
  },
  {
    date: new Date(),
    img: "T",
    name: "Username",
    action: "voted on the proposal",
    proposalname: "proposal name",
  },
  {
    date: new Date(),
    img: "T",
    name: "Username",
    action: "created the proposal",
    proposalname: "proposal name",
  },
  {
    date: new Date(),
    img: "T",
    name: "Username",
    action: "created the proposal",
    proposalname: "proposal name",
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
      {activities.map((i: any) => {
        return (
          <Box
            sx={{
              width: "100%",
              pt: "1rem",
              display: "flex",
              alignItems: "center",
              fontSize: ".8rem",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", width: "40%" }}>
              <Avatar
                sx={{ mr: ".5rem", width: "2rem", height: "2rem" }}
              ></Avatar>
              <Box>
                {i.name + " "}
                <Box
                  sx={{
                    display: "inline",
                    color: "primary.lightText",
                    ml: ".1rem",
                    mr: ".1rem",
                  }}
                >
                  {i.action}
                </Box>
                {" " + i.proposalname}
              </Box>
            </Box>

            <Box
              sx={{
                ml: "auto",
                color: "primary.lightText",
                display: "flex",
                alignItems: "center",
              }}
            >
              <CalendarTodayIcon sx={{ mr: ".5rem" }} />
              {dateFormat(i.date, "mmm dd, yyyy: h:MM")}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default LatestActivity;
