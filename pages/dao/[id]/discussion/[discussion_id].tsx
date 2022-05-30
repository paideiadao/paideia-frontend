import { Box } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next/types";
import * as React from "react";

const Discussion: React.FC = () => {
  return <Box sx={{ p: "1.5rem" }}>Individual Discussion Here...</Box>;
};

export default Discussion;

export const getStaticPaths: GetStaticPaths = async () => {
  // query db for proposals here...
  const discussions = [
    {
      id: "spreadly",
      discussion_id: "1",
    },
    {
      id: "spreadly",
      discussion_id: "2",
    },
  ];

  return {
    paths: discussions.map((discussion) => {
      return {
        params: {
          id: discussion.id,
          discussion_id: discussion.discussion_id,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const daoData = {
    daoId: params.id,
  };
  return {
    props: {
      daoData,
    },
  };
};
