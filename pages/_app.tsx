import React, { useState } from "react";
import "../styles/global.css";
import { AppProps } from "next/app";
import { DarkTheme, LightTheme } from "../theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeContext } from "../lib/ThemeContext";
import { AppApi } from "../lib/AppApi";
import { GlobalContext } from "../lib/AppContext";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "@components/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import { WalletProvider } from "@components/wallet/WalletContext";
import { AddWalletProvider } from "@components/wallet/AddWalletContext";
import { AnimatePresence, motion } from "framer-motion";
import AbstractAlert, { IAlerts } from "@components/utilities/Alert";
import { IDaoUserData } from "@lib/Interfaces";
import { Box, useScrollTrigger, Slide, AppBar, Typography, Toolbar, Link } from "@mui/material";


const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const daoVariants = {
  hidden: { opacity: 0, x: 0, y: -200 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = React.useState(LightTheme);

  React.useEffect(() => {
    setTheme(localStorage.getItem("theme") === "dark" ? DarkTheme : LightTheme);
  }, []);

  React.useEffect(() => {
    let temp = theme === LightTheme ? "light" : "dark";
    localStorage.setItem("theme", temp);
  }, [theme]);

  interface Props {
    children: React.ReactElement;
  }

  function HideOnScroll(props: Props) {
    const { children } = props;
    const trigger = useScrollTrigger()

    return (
      <Slide appear={false} direction="up" in={!trigger}>
        {children}
      </Slide>
    );
  }

  const [alert, setAlert] = useState<IAlerts[]>([]);
  const [daoData, setDaoData] = useState(undefined);
  const [daoUserData, setDaoUserData] = useState<IDaoUserData>(undefined);

  const api = new AppApi(
    alert,
    setAlert,
    theme,
    setTheme,
    daoData,
    setDaoData,
    daoUserData,
    setDaoUserData
  );

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=yes"
        />
      </Head>
      <AddWalletProvider>
        <WalletProvider>
        <GlobalContext.Provider value={{ api }}>
          <ThemeProvider theme={DarkTheme}>
            <CssBaseline />
            <AnimatePresence exitBeforeEnter>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </AnimatePresence>
          </ThemeProvider>
          </GlobalContext.Provider>
          <AbstractAlert
            alerts={alert}
            // set={(val: IAlerts[]) => setAlert(val)}
            close={(i: number) => {
              setAlert(prevState => (
                prevState.filter((_item, idx) => idx !== i)
              ))
            }}
          />
        </WalletProvider>
      </AddWalletProvider>
    </>
  );
}
