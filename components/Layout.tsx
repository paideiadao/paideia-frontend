import React, { useState, createContext } from "react";
import Head from "next/head";
import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

interface IContextProps {
  inPageNav: boolean;
  setInPageNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [inPageNav, setInPageNav] = useState(false);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Paideia | DAO Toolkit</title>
      </Head>
      <PageNavContext.Provider value={{ inPageNav, setInPageNav }}>
        <Header />
        <motion.main
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: "linear" }}
          className=""
          key={router.route}
        >
          {children}
          <Footer />
        </motion.main>
      </PageNavContext.Provider>
    </>
  );
};

export default Layout;

export const PageNavContext = createContext({} as IContextProps);
