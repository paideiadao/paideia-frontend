import { Box } from "@mui/material";
import * as React from "react";
import Nav from "../components/creation/nav/Nav";

export default function Creation(props) {
  const [data, setData] = React.useState({
    navStage: 1,
  });
  return (
    <>
      <Nav value={data.navStage} />
    </>
  );
}
