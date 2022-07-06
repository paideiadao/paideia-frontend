import { Header } from "@components/creation/utilities/HeaderComponents";
import {
  PerformanceWidget,
  TimeWidget,
} from "@components/dao/dashboard/FinancialSummary";
import { Box } from "@mui/material";
import * as React from "react";
import dateFormat from "dateformat";

let temp = new Date();
temp.setDate(temp.getDate() - 700);

const data = {
  price: "$0.1342",
  priceChangePercent: 0.17,
  priceChange: "$0.0106",
  low: "$0.1342",
  high: "$0.1784",
  volume: "$11,849",
  marketCap: "$1,578,159",
  marketCapPercentage: -0.01,
  volumeMarketCapRatio: "0.01566",
  fullyDilutedMarketCap: "$31,009,812",
  fullyDilutedMarketCapPercentage: 0.03,
  yesterdayLow: "$0.1211",
  yesterdayHigh: "$0.1655",
  yesterdayOpen: "$0.1422",
  yesterdayClose: "$0.1556",
  yesterdayChange: 0.0576,
  yesterdayVolume: "$10,592",
  weekLow: "$0.1211",
  weekHigh: "$0.1784",
  monthLow: "$0.0948",
  monthHigh: "$0.2908",
  threeMonthLow: "$0.0511",
  threeMonthHigh: "$0.2908",
  yearLow: "$0.0084",
  yearHigh: "$0.2908",
  allTimeHigh: "$0.2908",
  allTimeHighDate: new Date(),
  allTimeLow: "$0.0005",
  allTimeLowDate: temp,
  roi: 15.1576,
  totalSupply: "13,991,892",
  maxSupply: "15,000,000",
};

const StatisticsRow: React.FC<{ title: string; secondRow?: JSX.Element }> = (
  props
) => {
  return (
    <Box sx={{ mt: "1rem" }}>
      {props.title}
      <Box sx={{ display: "flex", alignItems: "center", mt: ".5rem" }}>
        {props.children}
      </Box>
      {props.secondRow}
    </Box>
  );
};

const StatisticsCard: React.FC<{ title: string | JSX.Element }> = (props) => {
  return (
    <Box
      sx={{
        width: "23.2%",
        pl: "1rem",
        pt: ".5rem",
        pb: ".5rem",
        pr: "1rem",
        backgroundColor: "fileInput.outer",
        border: 1,
        borderColor: "border.main",
        borderRadius: ".4rem",
        mr: "1rem",
        height: "4.5rem",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {props.children}
      <Box sx={{ fontSize: ".8rem", color: "text.light" }}>{props.title}</Box>
    </Box>
  );
};

const Statistics: React.FC = () => {
  const ticker = "PTK";
  return (
    <Box>
      <Header title={`${ticker} statistics`} />
      <StatisticsRow title={`${ticker} price`}>
        <StatisticsCard title={`Price`}>
          <Box sx={{ fontSize: "1rem", display: "flex", alignItems: "center" }}>
            <Box sx={{ mr: ".5rem" }}>{data.price}</Box>
            <PerformanceWidget value={0.17} invert />
          </Box>
        </StatisticsCard>
        <StatisticsCard title="Price change">
          <Box sx={{ fontSize: "1rem", display: "flex", alignItems: "center" }}>
            <Box sx={{ mr: ".5rem" }}>{data.priceChange}</Box>
            <PerformanceWidget value={0.17} invert />
          </Box>
        </StatisticsCard>
        <StatisticsCard title="24hr Low / 24hr High">
          <Box sx={{ fontSize: "1rem", display: "flex", alignItems: "center" }}>
            <Box sx={{ mr: ".5rem" }}>
              {data.low} / {data.high}
            </Box>
          </Box>
        </StatisticsCard>
        <StatisticsCard
          title={
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ mr: "0" }}> Trading Volume</Box>
              <TimeWidget amount={24} unit="hrs" small />
            </Box>
          }
        >
          <Box sx={{ fontSize: "1rem", display: "flex", alignItems: "center" }}>
            <Box sx={{ mr: ".5rem" }}>{data.volume}</Box>
            <PerformanceWidget value={0.21} invert />
          </Box>
        </StatisticsCard>
      </StatisticsRow>
      <StatisticsRow title={`${ticker} market cap`}>
        <StatisticsCard title={`Market cap`}>
          <Box sx={{ fontSize: "1rem", display: "flex", alignItems: "center" }}>
            <Box sx={{ mr: ".5rem" }}>{data.marketCap}</Box>
            <PerformanceWidget value={data.marketCapPercentage} invert />
          </Box>
        </StatisticsCard>
        <StatisticsCard title="Volume / Market cap">
          <Box sx={{ fontSize: "1rem", display: "flex", alignItems: "center" }}>
            <Box sx={{ mr: ".5rem" }}>{data.volumeMarketCapRatio}</Box>
          </Box>
        </StatisticsCard>
        <StatisticsCard title="Fully diluted market cap">
          <Box sx={{ fontSize: "1rem", display: "flex", alignItems: "center" }}>
            <Box sx={{ mr: ".5rem" }}>{data.fullyDilutedMarketCap}</Box>
            <PerformanceWidget
              value={data.fullyDilutedMarketCapPercentage}
              invert
            />
          </Box>
        </StatisticsCard>
      </StatisticsRow>
      <StatisticsRow title={`${ticker} price yesterday`}>
        <StatisticsCard title="Y Low / Y High">
          <Box sx={{ fontSize: "1rem", display: "flex", alignItems: "center" }}>
            <Box sx={{ mr: ".5rem" }}>
              {data.yesterdayLow} / {data.yesterdayHigh}
            </Box>
          </Box>
        </StatisticsCard>
        <StatisticsCard title="Y Open / Y Close">
          <Box sx={{ fontSize: "1rem", display: "flex", alignItems: "center" }}>
            <Box sx={{ mr: ".5rem" }}>
              {data.yesterdayOpen} / {data.yesterdayClose}
            </Box>
          </Box>
        </StatisticsCard>
        <StatisticsCard title="Price change">
          <Box sx={{ fontSize: "1rem", display: "flex", alignItems: "center" }}>
            <Box sx={{ mr: ".5rem" }}>{data.priceChange}</Box>
            <PerformanceWidget value={data.yesterdayChange} invert places={2} />
          </Box>
        </StatisticsCard>
        <StatisticsCard title="24hr Low / 24hr High">
          <Box sx={{ fontSize: "1rem", display: "flex", alignItems: "center" }}>
            <Box sx={{ mr: ".5rem" }}>
              {data.low} / {data.high}
            </Box>
          </Box>
        </StatisticsCard>
      </StatisticsRow>
      <StatisticsRow
        title={`${ticker} price history`}
        secondRow={
          <Box sx={{ width: "100%", display: "flex", mt: ".75rem" }}>
            <StatisticsCard title="Alll time high">
              <Box
                sx={{ fontSize: "1rem", display: "flex", alignItems: "center" }}
              >
                {data.allTimeHigh}
                <Box
                  sx={{
                    ml: ".5rem",
                    fontSize: ".9rem",
                    color: "text.light",
                    fontWeight: 500,
                  }}
                >
                  {dateFormat(data.allTimeHighDate, "mm/dd/yyyy")}
                </Box>
              </Box>
            </StatisticsCard>
            <StatisticsCard title="All time low">
              <Box
                sx={{ fontSize: "1rem", display: "flex", alignItems: "center" }}
              >
                {data.allTimeLow}
                <Box
                  sx={{
                    ml: ".5rem",
                    fontSize: ".9rem",
                    color: "text.light",
                    fontWeight: 500,
                  }}
                >
                  {dateFormat(data.allTimeLowDate, "mm/dd/yyyy")}
                </Box>
              </Box>
            </StatisticsCard>
            <StatisticsCard title="ROI">
              <Box
                sx={{ fontSize: "1rem", display: "flex", alignItems: "center" }}
              >
                <PerformanceWidget value={data.roi} invert places={2} large />
              </Box>
            </StatisticsCard>
          </Box>
        }
      >
        <StatisticsCard title="7d Low / 7d High">
          <Box sx={{ fontSize: "1rem", display: "flex", alignItems: "center" }}>
            <Box sx={{ mr: ".5rem" }}>
              {data.weekLow} / {data.weekHigh}
            </Box>
          </Box>
        </StatisticsCard>
        <StatisticsCard title="30d Low / 30d High">
          <Box sx={{ fontSize: "1rem", display: "flex", alignItems: "center" }}>
            <Box sx={{ mr: ".5rem" }}>
              {data.monthLow} / {data.monthHigh}
            </Box>
          </Box>
        </StatisticsCard>
        <StatisticsCard title="90d Low / 90d High">
          <Box sx={{ fontSize: "1rem", display: "flex", alignItems: "center" }}>
            <Box sx={{ mr: ".5rem" }}>
              {data.threeMonthLow} / {data.threeMonthHigh}
            </Box>
          </Box>
        </StatisticsCard>
        <StatisticsCard title="52w Low / 52w High">
          <Box sx={{ fontSize: "1rem", display: "flex", alignItems: "center" }}>
            <Box sx={{ mr: ".5rem" }}>
              {data.yearLow} / {data.yearHigh}
            </Box>
          </Box>
        </StatisticsCard>
      </StatisticsRow>
      <StatisticsRow title={`${ticker} supply`}>
        <StatisticsCard title="Total Supply">
          <Box sx={{ fontSize: "1rem", display: "flex", alignItems: "center" }}>
            {data.totalSupply}
          </Box>
        </StatisticsCard>
        <StatisticsCard title="Max Supply">
          <Box sx={{ fontSize: "1rem", display: "flex", alignItems: "center" }}>
            {data.maxSupply}
          </Box>
        </StatisticsCard>
      </StatisticsRow>
    </Box>
  );
};

export default Statistics;
