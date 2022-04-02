import * as React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box
      sx={{
        width: "15rem",
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        pt: '1rem'
      }}
    >
      <Box>
        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <CircularProgress
            variant="determinate"
            {...props}
            size="4rem"
            value={props.value * 20}
            color="secondary"
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.1rem",
              fontWeight: 300,
            }}
          >
            {props.value * 20}%
          </Box>
        </Box>
      </Box>

      <Box sx={{fontWeight: 500, fontSize: '.6rem'}}>DAO CREATION PROGRESS</Box>
    </Box>
  );
}

export default function CircularStatic(props) {
  return <CircularProgressWithLabel value={props.value} />;
}