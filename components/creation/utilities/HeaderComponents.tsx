import { Box, Button } from "@mui/material";
import * as React from "react";
import InfoIcon from "@mui/icons-material/Info";

export const Header: React.FC<{ title: string; subtitle?: string }> = (
  props
) => {
  return props.subtitle === undefined ? (
    <Box sx={{ fontSize: "1.1rem", color: "primary.text" }}>{props.title}</Box>
  ) : (
    <Box
      sx={{
        width: "100%",
        mt: ".5rem",
        mb: ".5rem",
      }}
    >
      <Box sx={{ fontSize: "1.1rem", color: "primary.text" }}>
        {props.title}
      </Box>
      <Subtitle subtitle={props.subtitle} />
    </Box>
  );
};

export const Subtitle: React.FC<{ subtitle: string }> = (props) => {
  return (
    <Box sx={{ width: "100%", color: "primary.lightText", fontSize: ".8rem" }}>
      {props.subtitle}
    </Box>
  );
};

export const Subheader: React.FC<{
  title: string;
  small?: boolean;
  bold?: boolean;
}> = (props) => {
  return (
    <Box
      sx={{
        color: "primary.text",
        fontSize: props.small ? ".9rem" : "1rem",
        fontWeight: props.bold ? 500 : props.small ? 400 : 450,
        display: "flex",
        alignItems: "center",
      }}
    >
      {props.title}
    </Box>
  );
};

export const LearnMore: React.FC<{ title: string; small?: boolean }> = (
  props
) => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", mt: "1rem", mb: ".5rem" }}
    >
      <Subheader title={props.title} small={props.small} />
      <Box sx={{ ml: "auto", display: "flex", alignItems: "center" }}>
        <Button variant="text">
          Learn More{" "}
          <InfoIcon style={{ fill: "primary.main", marginLeft: ".4rem" }} />
        </Button>
      </Box>
    </Box>
  );
};
