import Head from "next/head";
import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer"
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

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
      </Head>
        <Box sx={{
          display: 'flex',
          alignContent: 'space-between',
          flexDirection: 'column',
          minHeight: '100vh',
        }}>
          <Header />
          <Container sx={{ flexGrow: 1 }}>
            {children}
          </Container>
          <Footer />
        </Box>
    </>
  )
}
