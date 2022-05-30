import { Box, Button } from "@mui/material";
import * as React from "react";
import InfoIcon from "@mui/icons-material/Info";
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';

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

export const CapsInfo: React.FC<{
  title: string;
  small?: boolean;
  mb?: string;
}> = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        color: "text.main",
        fontSize: props.small === undefined ? ".8rem" : ".7rem",
        fontWeight: 400,
        mb: props.mb === undefined ? "1rem" : props.mb,
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
        sx={{ display: "flex", alignItems: "center", mt: "1rem", mb: ".5rem", position: 'relative' }}
      >
        <Subheader title={props.title} small={props.small} light={props.light} />
        <ClickAwayListener onClickAway={handleTooltipClose}>
            <Box sx={{ml: 'auto'}}>
              <Tooltip
                PopperProps={{
                  disablePortal: true,
                }}
                placement='top-end'
                arrow
                componentsProps={{
                  tooltip: {
                    sx: {
                      bgcolor: 'fileInput.main',
                      width: '40rem',
                      border: '1px solid',
                      borderColor: 'divider.main',
                      '& .MuiTooltip-arrow': {
                        color: 'fileInput.main',
                        width: '7rem'
                      },
                    },
                  },
                }}
                onClose={handleTooltipClose}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title={<Box sx={{p: 0, m: 0, color: 'text.main'}}>
                  Info message Title
                  <Box sx={{width: '100%', mt: '1rem', display: 'flex', mb: '.2rem'}}>
                    <Button size='small'>
                      Learn More
                    </Button>
                    <Button size='small' variant='contained' sx={{ml: 'auto'}}>
                      Got it
                    </Button>
                  </Box>
                </Box>}
              >
                <Button onClick={handleTooltipOpen}>Learn More{" "}
                <InfoIcon style={{ fill: "primary.main", marginLeft: ".4rem" }} /></Button>
              </Tooltip>
            </Box>
          </ClickAwayListener>
      </Box>
      {open && <Box sx={{position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 100, backgroundColor: 'black', opacity: '.8'}}>
        
      </Box>}
    </>
    
  );
};
