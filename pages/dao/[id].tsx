import { GlobalContext, IGlobalContext } from "@lib/AppContext";
import React from "react";
import Dashboard from "@components/dao/dashboard/Dashboard";
import { paths, props } from "@lib/DaoPaths";

// move dao to a wildcard subdomain
export default function Dao({ daoData }) {
  let globalContext = React.useContext<IGlobalContext>(GlobalContext);
  return (
    <>
      <Dashboard />
    </>
  );
}

// routing for the dao urls should be dynamic... the routing for the dao pages is contained here.
export const getStaticPaths = paths;
export const getStaticProps = props;
