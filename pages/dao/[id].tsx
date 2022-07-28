import { GlobalContext, IGlobalContext } from "@lib/AppContext";
import React from "react";
import Dashboard from "@components/dao/dashboard/Dashboard";
import { paths, props } from "@lib/DaoPaths";
import { useRouter } from "next/router";

// move dao to a wildcard subdomain
export default function Dao() {
  return <Dashboard />;
}

// routing for the dao urls should be dynamic... the routing for the dao pages is contained here.
// export const getStaticPaths = paths;
// export const getStaticProps = props;
