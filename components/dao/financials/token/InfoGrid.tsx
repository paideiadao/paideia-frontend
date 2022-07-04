import {
  PerformanceWidget,
  TimeWidget,
} from "@components/dao/dashboard/FinancialSummary";
import { Box } from "@mui/material";
import * as React from "react";
import dateFormat from "dateformat";

interface IInfoCard {
  value: string;
  widget: JSX.Element;
  title: string;
}

const InfoCard: React.FC<IInfoCard> = (props) => {
  return (
    <Box
      sx={{
        width: "25%",
        p: ".5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "fileInput.outer",
        borderRadius: ".4rem",
        border: 1,
        borderColor: "border.main",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ fontSize: "1.5rem", fontWeight: 500, mr: ".5rem" }}>
          {props.value}
        </Box>
        {props.widget}
      </Box>
      <Box sx={{ fontSize: ".9rem", color: "text.light" }}>{props.title}</Box>
    </Box>
  );
};

const InfoGrid: React.FC = () => {
  const ticker = "DTK";
  const tempDate = new Date();
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          width: "100%",
          mt: "1rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <InfoCard
          value="$0.1342"
          widget={<PerformanceWidget value={0.17} />}
          title={`${ticker} Price`}
        />
        <Box sx={{ mr: "1rem" }} />
        <InfoCard
          value="$0.2199"
          widget={<TimeWidget amount={24} unit="hrs" />}
          title={`High`}
        />
        <Box sx={{ mr: "1rem" }} />
        <InfoCard
          value="$0.0119"
          widget={<TimeWidget amount={24} unit="hrs" />}
          title={`Low`}
        />
        <Box sx={{ mr: "1rem" }} />
        <InfoCard
          value="$0.3117"
          widget={
            <Box
              sx={{ color: "text.light", fontSize: "1rem", fontWeight: 500 }}
            >
              {dateFormat(tempDate, "mm/dd/yyyy")}
            </Box>
          }
          title={`All Time High`}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          mt: "1rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <InfoCard
          value="$18,578,159"
          widget={<PerformanceWidget value={-0.01} />}
          title={`Market Cap`}
        />
        <Box sx={{ mr: "1rem" }} />
        <InfoCard
          value="$31,009,812"
          widget={<PerformanceWidget value={0.03} />}
          title={`Fully Diluted Market Cap`}
        />
        <Box sx={{ mr: "1rem" }} />
        <InfoCard
          value="$11,849"
          widget={<PerformanceWidget value={0.21} />}
          title={`Volume (24hrs)`}
        />
        <Box sx={{ mr: "1rem" }} />
        <InfoCard
          value="11,759,754"
          widget={
            <Box
              sx={{ color: "text.light", fontSize: "1rem", fontWeight: 500 }}
            >
              {ticker}
            </Box>
          }
          title={`Circulating Supply`}
        />
      </Box>
    </Box>
  );
};

export default InfoGrid;
