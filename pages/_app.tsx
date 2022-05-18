import "../styles/global.css";
import { AppProps } from "next/app";
import { GetServerSideProps } from "next";
import * as React from 'react';
import { DarkTheme, LightTheme } from "../theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeContext } from "../lib/ThemeContext";


export let colorLookup = {
  light: "#FFFFFF",
  dark: "#0E1420",
};


export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = React.useState(LightTheme);

  React.useEffect(() => {
    setTheme(localStorage.getItem("theme") === "dark" ? DarkTheme : LightTheme);
  }, []);

  React.useEffect(() => {
    let temp = theme === LightTheme ? "light" : "dark";
    document.body.style.background = colorLookup[temp];
    localStorage.setItem("theme", temp);
  }, [theme]);

  return <ThemeProvider theme={theme}>
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Component {...pageProps} />
      
    </ThemeContext.Provider>
  </ThemeProvider>
   
  
}

export async function getServerSideProps(context) {
  // possibilities
  // paideia.im
  // {dao_name}.paideia.im
  let wildcard = context.req.headers.host.split(".")[0];
  let all_ids = ["spreadly", "ergopad"];
  console.log("wildcard", wildcard);

  wildcard =
    all_ids.indexOf(wildcard) > -1
      ? wildcard != "localhost:3000"
        ? wildcard
        : "home"
      : "home";
  return { props: { wildcard } };
}
