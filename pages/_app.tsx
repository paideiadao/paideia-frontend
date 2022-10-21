import React from "react";
import "../styles/global.css";
import { AppProps } from "next/app";
import { DarkTheme, LightTheme } from "../theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeContext } from "../lib/ThemeContext";
import { AppApi } from "../lib/AppApi";
import { GlobalContext } from "../lib/AppContext";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "@components/Layout";
import Creation from "./creation";
import DaoTemplate from "@components/dao/DaoTemplate";
import Head from "next/head";
import { useRouter } from "next/router";
import { isDao } from "@lib/Router";
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
  const [daoData, setDaoData] = React.useState(undefined);
  const [daoUserData, setDaoUserData] = React.useState<IDaoUserData>(undefined);

  const [alert, setAlert] = React.useState<IAlerts[]>([]);
  const router = useRouter();

  React.useEffect(() => {
    setTheme(localStorage.getItem("theme") === "dark" ? DarkTheme : LightTheme);
  }, []);

  React.useEffect(() => {
    let temp = theme === LightTheme ? "light" : "dark";
    localStorage.setItem("theme", temp);
  }, [theme]);

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

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=yes"
        />
      </Head>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <AddWalletProvider>
          <WalletProvider>
            <GlobalContext.Provider value={{ api }}>
              {isDao(Component) ? (
                <ThemeProvider theme={theme}>
                  <CssBaseline />
                  {Component !== Creation ? (
                    <>
                      <HideOnScroll>
                        <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, height: '50px', background: theme.palette.warning.main }}>
                          <Toolbar variant="dense">
                            <Typography sx={{ color: '#000', fontSize: '0.9rem', fontWeight: 'bold' }}>
                              NOTE: This release of Paideia is a web2 alpha test. If you encounter any bugs, please submit them to the team via {' '}
                              <Link
                                href="https://discord.gg/J3KDrtCFEn"
                                target="_blank"
                                sx={{
                                  color: '#000',
                                  textDecoration: 'underline',
                                  '&:hover': {
                                    textDecoration: 'none',
                                  }
                                }}
                              >
                                Discord
                              </Link>{' '} or{' '}
                              <Link
                                href="https://t.me/paideiaDAO"
                                target="_blank"
                                sx={{
                                  color: '#000',
                                  textDecoration: 'underline',
                                  '&:hover': {
                                    textDecoration: 'none',
                                  }
                                }}
                              >
                                Telegram
                              </Link>.
                            </Typography>
                          </Toolbar>
                        </AppBar>
                      </HideOnScroll>
                      <DaoTemplate subdomain="">
                        <AnimatePresence exitBeforeEnter>
                          <motion.main
                            variants={daoVariants}
                            initial="hidden"
                            animate="enter"
                            exit="exit"
                            transition={{ type: "linear" }}
                            className=""
                            key={router.route}
                          >
                            <Component {...pageProps} />
                          </motion.main>
                        </AnimatePresence>
                      </DaoTemplate>
                    </>
                  ) : (
                    <Component {...pageProps} />
                  )}
                </ThemeProvider>
              ) : (
                <ThemeProvider theme={DarkTheme}>
                  <CssBaseline />
                  <AnimatePresence exitBeforeEnter>
                    <Layout>
                      <Component {...pageProps} />
                    </Layout>
                  </AnimatePresence>
                </ThemeProvider>
              )}
              <AbstractAlert
                alerts={alert}
                set={(val: IAlerts[]) => setAlert(val)}
                close={(c: number) => {
                  let temp = [...alert];
                  temp.splice(c, 1);
                  setAlert(temp);
                }}
              />
            </GlobalContext.Provider>
          </WalletProvider>
        </AddWalletProvider>
      </ThemeContext.Provider>
    </>
  );
}
