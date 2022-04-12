import { Box, Button } from "@mui/material";
import * as React from "react";
import InfoIcon from "@mui/icons-material/Info";

export const Header: React.FC<{ title: string; subtitle: string }> = (
  props
) => {
  return (
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
      <Box
        sx={{ width: "100%", color: "primary.lightText", fontSize: ".8rem" }}
      >
        {props.subtitle}
      </Box>
    </Box>
  );
};

export const Subheader: React.FC<{ title: string }> = (props) => {
  return (
    <Box
      sx={{
        color: "primary.text",
        fontSize: "1rem",
        mt: "1.5rem",
        mb: ".5rem",
      }}
    >
      {props.title}
    </Box>
  );
};

export const LearnMore: React.FC<{ title: string }> = (props) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Subheader title={props.title} />
      <Box sx={{ ml: "auto" }}>
        <Button variant="text">
          Learn More{" "}
          <InfoIcon style={{ fill: "primary.main", marginLeft: ".4rem" }} />
        </Button>
      </Box>
    </Box>
  );
};
