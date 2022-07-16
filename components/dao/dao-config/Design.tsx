import Banner from "@components/creation/design/Banner";
import { ThemeCard, themes } from "@components/creation/design/Design";
import Footer from "@components/creation/design/Footer";
import Logo from "@components/creation/design/Logo";
import {
  Header,
  LearnMore,
  Subtitle,
} from "@components/creation/utilities/HeaderComponents";
import { IDesign } from "@lib/creation/CreationApi";
import {
  ConfigContext,
  IConfigContext,
} from "@lib/dao/dao-config/ConfigContext";
import { Box } from "@mui/material";
import * as React from "react";

const Design: React.FC = () => {
  let context = React.useContext<IConfigContext>(ConfigContext);

  const [theme, setTheme] = React.useState<number>(1);

  let data = context.api.data.design;
  let setData = (data: IDesign) => {
    context.api.setData({
      ...context.api.data,
      design: data,
    });
  };

  React.useEffect(() => {
    setData({
      ...data,
      theme: theme,
    });
  }, [theme]);
  return (
    <>
      <Header
        title="DAO design"
        subtitle="Choose the perfect theme for your DAO, add a logo, upload a banner, and create you're own personalilzed footer"
      />
      <LearnMore
        title="Theme"
        tooltipTitle={"Title Here"}
        tooltipText={"Content Here"}
        tooltipLink="/"
      />
      <Subtitle subtitle="In order to best match your DAO design, you can select between four different theme colors and choose if you want a light or dark theme." />
      <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
        {themes.map((i: any) => {
          return <ThemeCard set={setTheme} theme={theme} i={i} />;
        })}
        <Logo context={context} />
        <Banner context={context} />
        <Footer context={context} />
      </Box>
    </>
  );
};

export default Design;
