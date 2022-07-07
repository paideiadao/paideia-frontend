import React, { useState, createContext } from "react";
import Head from "next/head";
import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
import Grid from "@mui/material/Grid";

interface IContextProps {
  inPageNav: boolean;
  setInPageNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [inPageNav, setInPageNav] = useState(false);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Paideia | DAO Toolkit</title>
      </Head>
      <PageNavContext.Provider value={{ inPageNav, setInPageNav }}>
        <Grid
          sx={{
            display: "flex",
            alignContent: "space-between",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Grid item>
            <Header />
          </Grid>
          <Grid item sx={{ flexGrow: 1 }}>
            {children}
          </Grid>
          <Grid item>
            <Footer />
          </Grid>
        </Grid>
      </PageNavContext.Provider>
    </>
  );
};

export default Layout;

export const PageNavContext = createContext({} as IContextProps);
