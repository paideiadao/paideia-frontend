import "../styles/global.css";
import { AppProps } from "next/app";
import { GetServerSideProps } from "next";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export async function getServerSideProps(context) {
  // possibilities
  // paideia.im
  // {dao_name}.paideia.im
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
