import { Box } from "@mui/material";
import * as React from "react";
import BarChartIcon from "@mui/icons-material/BarChart";

const BasicLink: React.FC<{
  icon: JSX.Element;
  title: string;
  selected: boolean;
  set: Function;
}> = (props) => {
  return (
    <Box sx={{ width: "100%", mt: "1rem" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          fontSize: ".9rem",
          cursor: "pointer",
          color: props.selected ? "primary.main" : "primary.text",
          
        }}
        onClick={() => props.set(props.title)}
      >
        <Box
          sx={{
            backgroundColor: props.selected ? "red" : "transparent",
            height: "2rem",
            width: ".15rem",
            borderTopRightRadius: ".5rem",
            borderBottomRightRadius: ".5rem",
            mr: "auto",
          }}
        ></Box>
        <Box sx={{ display: 'flex', pt: '.25rem', pb: '.25rem', ml: ".5rem", mr: "auto", borderRadius: ".3rem",
          ":hover ": {
            backgroundColor: "primary.main",
            color: "grey",
          }, width: '100%'}}>
          <Box
            sx={{
              width: "10%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: '.5rem',
              color: props.selected ? 'primary.main' : 'inherit'
            }}
          >
            {props.icon}
          </Box>
            <Box>
            {props.title}

            </Box>
        </Box>
      </Box>
    </Box>
  );
};

const Contents: React.FC = () => {
  const [selected, setSelected] = React.useState<string>("Dashboard");
  const setWrapper = (v: string) => setSelected(v);
  return (
    <Box sx={{ width: "100%", mb: "1rem" }}>
      <BasicLink
        icon={<BarChartIcon sx={{ opacity: ".8" }} />}
        title="Dashboard"
        selected={"Dashboard" === selected}
        set={setWrapper}
      />
      <BasicLink
        icon={<BarChartIcon sx={{ opacity: ".8" }} />}
        title="Contributions"
        selected={"Contributions" === selected}
        set={setWrapper}
      />
    </Box>
  );
};

export default Contents;
