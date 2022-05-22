import { Box, Button } from "@mui/material";
import * as React from "react";
import InfoIcon from "@mui/icons-material/Info";

export const Header: React.FC<{
  title: string;
  subtitle?: string;
  small?: boolean;
  large?: boolean;
}> = (props) => {
  return props.subtitle === undefined ? (
    <Box
      sx={{
        fontSize:
          props.large === true
            ? "1.3rem"
            : props.small === undefined
            ? "1.1rem"
            : "1rem",
        color: "primary.text",
      }}
    >
      {props.title}
    </Box>
  ) : (
    <Box
      sx={{
        width: "100%",
        mt: ".5rem",
        mb: ".5rem",
      }}
    >
      <Box
        sx={{
          fontSize:
            props.large === true
              ? "1.3rem"
              : props.small === undefined
              ? "1.1rem"
              : "1rem",
          color: "primary.text",
        }}
      >
        {props.title}
      </Box>
      <Subtitle subtitle={props.subtitle} />
    </Box>
  );
};

export const CapsInfo: React.FC<{ title: string; small?: boolean }> = (
  props
) => {
  return (
    <Box
      sx={{
        width: "100%",
        color: "text.main",
        fontSize: props.small === undefined ? ".8rem" : ".7rem",
        fontWeight: 400,
        mb: "1rem",
      }}
    >
      {props.title.toUpperCase()}
    </Box>
  );
};

export const Subtitle: React.FC<{ subtitle: string }> = (props) => {
  return (
    <Box sx={{ width: "100%", color: "text.light", fontSize: ".9rem" }}>
      {props.subtitle}
    </Box>
  );
};

export const Subheader: React.FC<{
  title: string;
  small?: boolean;
  bold?: boolean;
  light?: boolean;
}> = (props) => {
  return (
    <Box
      sx={{
        color: "primary.text",
        fontSize: props.small ? ".9rem" : "1.1rem",
        fontWeight: props.bold ? 500 : props.small || props.light ? 350 : 400,
        display: "flex",
        alignItems: "center",
      }}
    >
      {props.title}
    </Box>
  );
};

export const LearnMore: React.FC<{
  title: string;
  small?: boolean;
  light?: boolean;
}> = (props) => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", mt: "1rem", mb: ".5rem" }}
    >
      <Subheader title={props.title} small={props.small} light={props.light} />
      <Box sx={{ ml: "auto", display: "flex", alignItems: "center" }}>
        <Button variant="text">
          Learn More{" "}
          <InfoIcon style={{ fill: "primary.main", marginLeft: ".4rem" }} />
        </Button>
      </Box>
    </Box>
  );
};
