import Head from "next/head";
import Layout from "@components/Layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { GetStaticProps } from "next";
import { Box } from "@mui/system";
import DaoTemplate from "../components/dao/DaoTemplate";
import { DarkTheme, LightTheme } from "../theme/theme";
import React from "react";
import { AppApi } from "../lib/AppApi";
import { GlobalContext } from "../lib/AppContext";
import { colorLookup } from "./creation";
import CssBaseline from "@mui/material/CssBaseline";
import Section from '@components/layout/Section'

export default function Home(props) {
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
  // add 404 routing here...

  const api = new AppApi(alert, setAlert, theme, setTheme, props.wildcard);

  switch (props.wildcard) {
    case "home":
      return (
        <GlobalContext.Provider value={{ api }}>
          <CssBaseline />
            <Layout>
              <Section>
                Hello World!
              </Section>
            </Layout>
        </GlobalContext.Provider>
      )
    default:
      return (
        <GlobalContext.Provider value={{ api }}>
          <CssBaseline />
          <DaoTemplate subdomain={props.wildcard} />
        </GlobalContext.Provider>
      );
  }
}

export async function getServerSideProps(context) {
  // possibilities
  // paideia.im
  // {dao_name}.paideia.im
  // need to redirect from
  let wildcard = context.req.headers.host.split(".")[0];
  let all_ids = ["spreadly", "ergopad"];
  console.log("wildcard", wildcard);

  // add in logic for checking for other pages that are paideia specific

  wildcard =
    all_ids.indexOf(wildcard) > -1
      ? wildcard != "localhost:3000"
        ? wildcard
        : "home"
      : "home";
  return { props: { wildcard } };
}
