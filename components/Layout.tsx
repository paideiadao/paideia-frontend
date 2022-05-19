import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer"

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
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  )
}
