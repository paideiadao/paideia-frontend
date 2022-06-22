import React from "react";
import { paths, props } from "@lib/DistributionPaths";
import Layout from "@components/dao/Layout";

// move dao to a wildcard subdomain
const Distribution: React.FC = () => {
  return (
    <Layout>
        Distribution View Here....
    </Layout>
  );
}

export default Distribution;

// routing for the dao urls should be dynamic... the routing for the dao pages is contained here.
export const getStaticPaths = paths;
export const getStaticProps = props;
