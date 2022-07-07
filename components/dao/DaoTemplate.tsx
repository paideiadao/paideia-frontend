import { Box } from "@mui/material";
import { useRouter } from "next/router";
import * as React from "react";
import { GlobalContext, IGlobalContext } from "../../lib/AppContext";
import BottomNav from "./nav/BottomNav";
import Nav from "./nav/SideNav";
import TopNav from "./nav/TopNav";

const DaoTemplate: React.FC<{ subdomain: string }> = (props) => {
  let globalContext = React.useContext<IGlobalContext>(GlobalContext);
  let router = useRouter();
  const api = globalContext.api;

  React.useEffect(() => {
    console.log("skeep");
    const getData = async () => await api.getDaos();
    getData().then((data) => console.log(data));
  }, []);

  React.useEffect(() => {
    console.log(router.query.id);
    api.setDaoId(router.query.id);
  }, [router]);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        position: "fixed",
        width: "100vw",
      }}
    >
      <Nav />
      <TopNav />
      <Box
        sx={{
          width: "calc(100% - 13.5rem)",
          position: "fixed",
          top: "3.8rem",
          left: "13.5rem",
          pt: "0rem",
          pb: ".5rem",
          overflowY: "auto",
          height: "calc(100vh - 3.5rem)",
          zIndex: 1000,
        }}
      >
        {props.children}
        <BottomNav />
      </Box>
    </Box>
  );
};

export default DaoTemplate;
