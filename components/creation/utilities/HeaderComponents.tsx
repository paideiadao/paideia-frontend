import { Box, Button } from "@mui/material";
import * as React from "react";
import InfoIcon from "@mui/icons-material/Info";
import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Link from "next/link";
import { deviceStruct } from "@components/utilities/Style";

export const Header: React.FC<{
  title: string;
  subtitle?: string;
  small?: boolean;
  large?: boolean;
  mb?: string | any;
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
        fontWeight: 500,
        color: "text.primary",
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
          color: "text.primary",
          mb: props.mb === undefined ? ".5rem" : props.mb,
        }}
      >
        {props.title}
      </Box>
      <Subtitle subtitle={props.subtitle} />
    </Box>
  );
};

export const CapsInfo: React.FC<{
  title: string;
  small?: boolean;
  mb?: string;
  fontSize?: string;
}> = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        color: "text.primary",
        opacity: ".8",
        fontSize:
          props.fontSize === undefined
            ? props.small === undefined
              ? ".8rem"
              : ".7rem"
            : props.fontSize,
        fontWeight: 400,
        mb: props.mb === undefined ? "1rem" : props.mb,
      }}
    >
      {props.title.toUpperCase()}
    </Box>
  );
};

export const Subtitle: React.FC<{ subtitle: string; small?: boolean }> = (
  props
) => {
  return (
    <Box
      sx={{
        width: "100%",
        color: "text.secondary",
        fontSize: props.small
          ? deviceStruct(".7rem", ".7rem", ".8rem", ".8rem", ".8rem")
          : deviceStruct(".7rem", ".7rem", ".9rem", ".9rem", ".9rem"),
      }}
    >
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
        color: "text.primary",
        fontSize: props.small
          ? deviceStruct(".8rem", ".8rem", ".9rem", ".9rem", ".9rem")
          : deviceStruct("1.05rem", "1.05rem", "1.1rem", "1.1rem", "1.1rem"),
        fontWeight: props.bold ? 500 : 400,
        display: "flex",
        alignItems: "center",
      }}
    >
      {props.title}
    </Box>
  );
};

export interface ITooltipSteps {
  id: number;
  text: string;
}

export const LearnMore: React.FC<{
  title: string;
  small?: boolean;
  light?: boolean;
  tooltipTitle: string;
  tooltipText: string;
  toolTipSteps?: ITooltipSteps[];
  tooltipLink?: string;
}> = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: "1rem",
          mb: ".5rem",
          position: "relative",
        }}
      >
        <Subheader
          title={props.title}
          small={props.small}
          light={props.light}
        />
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <Box
            sx={{
              ml: "auto",
              minWidth: deviceStruct("40%", "40%", "", "", ""),
            }}
          >
            <Tooltip
              PopperProps={{
                disablePortal: true,
              }}
              placement="top-end"
              arrow
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: "fileInput.main",
                    maxWidth: deviceStruct(
                      "15rem",
                      "15rem",
                      "35rem",
                      "40rem",
                      "45rem"
                    ),
                    "& .MuiTooltip-arrow": {
                      color: "fileInput.main",
                      width: "7rem",
                      fontSize: "1.5rem",
                    },
                  },
                },
              }}
              onClose={handleTooltipClose}
              open={open}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title={
                <Box
                  sx={{
                    p: ".5rem",
                    m: 0,
                    color: "text.primary",
                    width: "25rem",
                    fontSize: "1rem",
                    fontWeight: 400,
                  }}
                >
                  {props.tooltipTitle}
                  <Box
                    sx={{
                      fontSize: ".9rem",
                      color: "text.secondary",
                      width: "100%",
                    }}
                  >
                    {props.tooltipText}
                  </Box>
                  <Box sx={{ width: "100%", display: "flex" }}>
                    <Link href={props.tooltipLink} passHref>
                      <a target="_blank" style={{ textDecoration: "none" }}>
                        <Button size="small">Learn More</Button>
                      </a>
                    </Link>

                    <Button
                      size="small"
                      variant="contained"
                      sx={{ ml: "auto" }}
                      onClick={handleTooltipClose}
                    >
                      Got it
                    </Button>
                  </Box>
                </Box>
              }
            >
              <Button
                onClick={handleTooltipOpen}
                size="small"
                endIcon={<InfoIcon />}
              >
                Learn More{" "}
              </Button>
            </Tooltip>
          </Box>
        </ClickAwayListener>
      </Box>
      {open && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 1000,
            backgroundColor: "black",
            opacity: ".8",
          }}
        ></Box>
      )}
    </>
  );
};
