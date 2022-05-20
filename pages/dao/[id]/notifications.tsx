import { Box } from "@mui/material";
import * as React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { GlobalContext, IGlobalContext } from "@lib/AppContext";

const Notifications: React.FC<{params: any}> = (props) => {
  const globalContext = React.useContext<IGlobalContext>(GlobalContext);
  return <Box>Notifications here.... {props.params.id}</Box>;
};

// routing for the dao urls should be dynamic... the routing for the dao pages is contained here.

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [{ params: { id: "spreadly" } }, { params: { id: "ergopad" } }];
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const daoData = {params};
  return {
    props: {
      params,
    },
  };
};

export default Notifications;
