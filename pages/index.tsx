import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/utilities/date";
import { GetStaticProps } from "next";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>Paideia</title>
      </Head>
      Paideia Home Here...
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const allPostsData = [];
  return {
    props: {
      allPostsData,
    },
  };
};
