import { Box } from "@mui/material";
import * as React from "react";
import Nav from "../components/creation/nav/Nav";
import { ThemeProvider } from "@mui/material/styles";
import { LightTheme } from "../theme/theme";

export default function Creation(props) {
  const [data, setData] = React.useState({
    navStage: 2,
  });
  return (
    <ThemeProvider theme={LightTheme}>
      <Nav value={data.navStage} />
    </ThemeProvider>
  );
}
