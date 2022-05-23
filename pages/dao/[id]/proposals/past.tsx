import { Box } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next/types";
import * as React from "react";

const Past: React.FC = () => {
  // call function to set global context here...
  return <Box>Past proposals here...</Box>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [{ params: { id: "spreadly" } }, { params: { id: "ergopad" } }];
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const daoData = { params };
  return {
    props: {
      params,
    },
  };
};

export default Past;
