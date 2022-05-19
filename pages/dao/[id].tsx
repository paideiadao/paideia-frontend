import Layout from "../../components/Layout";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import { GetStaticProps, GetStaticPaths } from "next";

// move dao to a wildcard subdomain
export default function Dao({ daoData }) {
  return (
    <Layout>
      <Head>
        <title>{"{name}"} DAO</title>
      </Head>
      {"{name}"} DAO here
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [{ params: { id: "1" } }];
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const daoData = {};
  return {
    props: {
      daoData,
    },
  };
};
