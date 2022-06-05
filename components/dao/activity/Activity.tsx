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
      <Box sx={{ display: "flex", alignItems: "center", width: "40%" }}>
        <Avatar sx={{ mr: ".5rem", width: "2rem", height: "2rem" }}></Avatar>
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
