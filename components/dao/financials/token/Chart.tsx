import { IObj } from "@lib/utilities";
import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import * as React from "react";
import CandleChart from "./CandleChart/CandleChart";

const Chart: React.FC = () => {
  const [view, setView] = React.useState("Line");
  const [loaded, setLoaded] = React.useState<boolean>(false);
  const handleView = (
    event: React.MouseEvent<HTMLElement>,
    newView: string | null
  ) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  const content: IObj<JSX.Element> = {
    Line: <>line here</>,
    Candle: <CandleChart />,
  };

  React.useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
        fontSize: "1.1rem",
        textAlign: "center",
        mt: "1rem",
        mb: "1rem",
      }}
    >
      <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
        <Box sx={{ ml: "auto" }}>
          <ToggleButtonGroup
            size="small"
            value={view}
            exclusive
            color="primary"
            onChange={handleView}
          >
            <ToggleButton value="Line">Line</ToggleButton>
            <ToggleButton value="Candle">Candle</ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>
      <Box sx={{ width: "100%" }}>
        {loaded ? content[view] : <>loading here...</>}
      </Box>
    </Box>
  );
};

export default Chart;
