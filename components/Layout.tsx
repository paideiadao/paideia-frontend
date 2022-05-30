import Head from "next/head";
import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
import Grid from "@mui/material/Grid";

export const siteTitle = "Paideia";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Paideia | DAO Toolkit</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=yes"
        />
      </Head>
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
    </>
  );
}
