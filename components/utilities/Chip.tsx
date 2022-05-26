import { Button } from "@mui/material";
import * as React from "react";

const Chip: React.FC<{
  set: Function;
  c: number;
  variant: string;
  icon: JSX.Element;
  label: string;
}> = (props) => {
  return (
    <Button
      size="small"
      sx={{
        display: "flex",
        alignItems: "center",
        fontSize: ".5rem",
        borderRadius: "5rem",
        ml: ".5rem",
        fontWeight: 500,
        pl: ".4rem",
        pr: ".4rem",
        minWidth: "1rem",
      }}
      onClick={props.set}
      key={`filter-chip-key-${props.c}`}
      // @ts-ignore
      variant={props.variant}
    >
      {props.icon}
      {props.label}
    </Button>
  );
};

export default Chip;
