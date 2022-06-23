import { Avatar, Box } from "@mui/material";
import * as React from "react";
import dateFormat from "dateformat";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

export interface IActivity {
  img: string;
  name: string;
  action: string;
  value: string;
  date: Date;
  category: string;
  secondary?: string;
  secondaryValue?: string;
}

const Activity: React.FC<{ i: IActivity; c: number }> = (props) => {
  return (
    <Box
      key={`activities-key-${props.c}`}
      sx={{
        width: "100%",
        pt: "1rem",
        display: "flex",
        alignItems: "center",
        fontSize: ".8rem",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", width: "80%" }}>
        <Avatar
          sx={{ mr: ".5rem", width: "2rem", height: "2rem" }}
          src={props.i.img}
        ></Avatar>
        <Box>
          {props.i.name + " "}
          <Box
            sx={{
              display: "inline",
              color: "text.light",
              ml: ".1rem",
              mr: ".1rem",
            }}
          >
            {props.i.action}
          </Box>
          {" " + props.i.value}
          {props.i.secondary !== undefined && (
            <Box
              sx={{
                display: "inline",
                color: "text.light",
                ml: ".1rem",
                mr: ".1rem",
              }}
            >
              {" " + props.i.secondary}
            </Box>
          )}
          {props.i.secondaryValue !== undefined && " " + props.i.secondaryValue}
        </Box>
      </Box>

      <Box
        sx={{
          ml: "auto",
          color: "text.light",
          display: "flex",
          alignItems: "center",
        }}
      >
        <CalendarTodayIcon sx={{ mr: ".5rem" }} />
        {dateFormat(props.i.date, "mmm dd, yyyy: h:MM")}
      </Box>
    </Box>
  );
};

export default Activity;
