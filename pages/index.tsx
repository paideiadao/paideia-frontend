import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { GetStaticProps } from "next";
import { Box } from "@mui/system";

export default function Home(props) {
  console.log(props);
  switch (props.wildcard) {
    case "home":
      return <Box>Paideia Home Here....</Box>;
    default:
      return <Box>{props.wildcard} DAO here</Box>;
  }
}

export async function getServerSideProps(context) {
  // possibilities
  // paideia.im
  // {dao_name}.paideia.im
  // need to redirect from
  let wildcard = context.req.headers.host.split(".")[0];
  let all_ids = ["spreadly", "ergopad"];
  console.log("wildcard", wildcard);

  wildcard =
    all_ids.indexOf(wildcard) > -1
      ? wildcard != "localhost:3000"
        ? wildcard
        : "home"
      : "home";
  return { props: { wildcard } };
}
