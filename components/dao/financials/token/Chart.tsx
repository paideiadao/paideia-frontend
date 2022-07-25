import { IObj } from "@lib/utilities";
import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import * as React from "react";
import CandleChart from "./CandleChart/CandleChart";
import LineChart from "./LineChart/LineChart";
import CandlestickChartIcon from "@mui/icons-material/CandlestickChart";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import { Header } from "@components/creation/utilities/HeaderComponents";

const Chart: React.FC = () => {
  const [view, setView] = React.useState<string>("Line");
  const [timeView, setTimeView] = React.useState<string>("24h");
  const [loaded, setLoaded] = React.useState<boolean>(false);
  const handleView = (
    event: React.MouseEvent<HTMLElement>,
    newView: string | null
  ) => {
    if (newView !== null) {
      setView(newView);
    }
  };
  const handleTimeView = (
    event: React.MouseEvent<HTMLElement>,
    newView: string | null
  ) => {
    if (newView !== null) {
      setTimeView(newView);
    }
  };

  const content: IObj<JSX.Element> = {
    Line: <LineChart />,
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
        <Header title="Price chart" />
        <Box sx={{ ml: "auto", display: "flex", alignItems: "center" }}>
          <ToggleButtonGroup
            size="small"
            value={timeView}
            exclusive
            sx={{ mr: "1rem" }}
            color="primary"
            onChange={handleTimeView}
          >
            <ToggleButton value="1h" size="small">
              1h
            </ToggleButton>
            <ToggleButton value="24h" size="small">
              24h
            </ToggleButton>
            <ToggleButton value="7d" size="small">
              7d
            </ToggleButton>
            <ToggleButton value="30d" size="small">
              30d
            </ToggleButton>
            <ToggleButton value="90d" size="small">
              90d
            </ToggleButton>
            <ToggleButton value="1y" size="small">
              1y
            </ToggleButton>
            <ToggleButton value="All" size="small">
              All
            </ToggleButton>
          </ToggleButtonGroup>
          <ToggleButtonGroup
            size="small"
            value={view}
            exclusive
            color="primary"
            onChange={handleView}
          >
            <ToggleButton value="Line" size="small">
              <ShowChartIcon />
            </ToggleButton>
            <ToggleButton value="Candle" size="small">
              <CandlestickChartIcon />
            </ToggleButton>
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
