import "../styles/global.css";
import { AppProps } from "next/app";
import { GetServerSideProps } from "next";
import * as React from 'react';
import { DarkTheme, LightTheme } from "../theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeContext } from "../lib/ThemeContext";
import { AppApi } from "../lib/AppApi";
import { GlobalContext } from "../lib/AppContext";
import CssBaseline from "@mui/material/CssBaseline";
import Dao from './dao/[id]'
import Layout from "../components/Layout";
import Creation from "./creation";

export let colorLookup = {
  light: "#FFFFFF",
  dark: "#0E1420",
};


export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = React.useState(LightTheme);
  const [alert, setAlert] = React.useState({ show: false });

  React.useEffect(() => {
    setTheme(localStorage.getItem("theme") === "dark" ? DarkTheme : LightTheme);
  }, []);

  React.useEffect(() => {
    let temp = theme === LightTheme ? "light" : "dark";
    document.body.style.background = colorLookup[temp];
    localStorage.setItem("theme", temp);
  }, [theme]);

  const api = new AppApi(alert, setAlert, theme, setTheme);


  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <CssBaseline />
        <GlobalContext.Provider value={{ api }}>
          {Component === Dao || Component === Creation ? <Component {...pageProps} /> : <Layout>
            <Component {...pageProps}/>  
          </Layout>}
        </GlobalContext.Provider>
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export async function getServerSideProps(context) {
  // possibilities
  // paideia.im
  // {dao_name}.paideia.im
  let wildcard = context.req.headers.host.split(".")[0];
  let all_ids = ["spreadly", "ergopad"];

  wildcard =
    all_ids.indexOf(wildcard) > -1
      ? wildcard != "localhost:3000"
        ? wildcard
        : "home"
      : "home";
  return { props: { wildcard } };
}
