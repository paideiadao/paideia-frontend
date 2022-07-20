import { deviceWrapper } from "@components/utilities/Style";
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

  const [showMobile, setShowMobile] = React.useState<boolean>(false);
  React.useEffect(() => {
    console.log('dao template loaded...')
  }, [])

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      <Nav showMobile={showMobile} setShowMobile={setShowMobile} />
      <Box
        sx={{
          width: deviceWrapper("100%", "calc(100% - 14.5rem)"),
          top: "0",
          left: deviceWrapper("0", "14.5rem"),
          pt: "0rem",
          pb: "1rem",

          zIndex: deviceWrapper("100", "1000"),
        }}
      >
        <TopNav showMobile={showMobile} setShowMobile={setShowMobile} />
        <Box sx={{ width: "100%" }} onClick={() => setShowMobile(false)}>
          {props.children}
        </Box>
        <BottomNav />
      </Box>
    </Box>
  );
};

export default DaoTemplate;
