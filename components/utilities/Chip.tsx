import { Box, Button } from "@mui/material";
import * as React from "react";
import { deviceWrapper } from "./Style";

const Chip: React.FC<{
  set?: Function;
  c: number;
  variant: string;
  icon: JSX.Element;
  label: string;
}> = (props) => {
  return (
    <Button
      size="small"
      startIcon={props.icon}
      sx={{
        alignItems: "center",
        display: "flex",
        borderRadius: "5rem",
        fontWeight: 500,
        mr: ".5rem",
      }}
      onClick={props.set}
      key={`filter-chip-${props.label}-key-${props.c}`}
      // @ts-ignore
      variant={props.variant}
    >
      {props.label}
    </Button>
  );
};

export default Chip;
