import { Box } from "@mui/material";
import * as React from "react";
import Nav from "../components/creation/nav/Nav";
import { ThemeProvider } from "@mui/material/styles";
import { DarkTheme, LightTheme } from "../theme/theme.js";

export default function Creation(props) {
  const [theme, setTheme] = React.useState(LightTheme);
  const [data, setData] = React.useState({
    navStage: 2,
  });

  let lookup = {
      'light': '#FFFFFF',
      'dark': 'rgba(17, 24, 39, 1)'
  }

  React.useEffect(() => {
      let temp = theme === LightTheme ? 'light' : 'dark';
    document.body.style.background = lookup[temp];
  }, [theme])

  return (
    <ThemeProvider theme={theme}>
      <Nav value={data.navStage} />
      <Box sx={{position: 'fixed', ml: '15.5rem', top: '3.5rem'}}>
        <Box onClick={() => theme === DarkTheme ? setTheme(LightTheme) : setTheme(DarkTheme)} sx={{color: 'primary.text'}}>
            Toggle Theme
        </Box>

      </Box>
    </ThemeProvider>
  );
}
