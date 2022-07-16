import {
  PerformanceWidget,
  TimeWidget,
} from "@components/dao/dashboard/FinancialSummary";
import { Box } from "@mui/material";
import * as React from "react";
import dateFormat from "dateformat";
import { deviceWrapper } from "@components/utilities/Style";

interface IInfoCard {
  value: string;
  widget: JSX.Element;
  title: string;
  c?: number;
}

const InfoCard: React.FC<IInfoCard> = (props) => {
  return (
    <Box
      sx={{
        width: deviceWrapper('47.5%', "23.5%"),
        p: ".5rem",
        display: "flex",
        alignItems: deviceWrapper('flex-start', "center"),
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "fileInput.outer",
        borderRadius: ".4rem",
        border: 1,
        ml: deviceWrapper(props.c % 2 === 0 ? '0rem' : '.75rem', '1rem'),
        mt: deviceWrapper(props.c > 1 ? '1rem' : '0', props.c > 3 ? '1rem' : '0'),

        borderColor: "border.main",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ fontSize: deviceWrapper('.95rem', "1.5rem"), fontWeight: 500, mr: deviceWrapper('.25rem',".5rem") }}>
          {props.value}
        </Box>
        {props.widget}
      </Box>
      <Box sx={{ fontSize: deviceWrapper('.7rem', ".9rem"), color: "text.light", mt: deviceWrapper('.05rem', '0') }}>{props.title}</Box>
    </Box>
  );
};



const InfoGrid: React.FC = () => {
  const ticker = "DTK";
  const tempDate = new Date();
  const infoCards: IInfoCard[] = [
    {
      value:"$0.1342",
      widget: <PerformanceWidget value={0.17} />,
      title: `${ticker} Price`,
    }, 
    {
      value:"$0.2199",
      widget: <TimeWidget amount={24} unit="hrs" />,
      title: `High`,
    },
    {
      value:"$0.0119",
      widget: <TimeWidget amount={24} unit="hrs" />,
      title: `Low`,
    },
    {
      value:"$0.3117",
      widget: <Box
      sx={{ color: "text.light", fontSize: deviceWrapper('.8rem', "1rem"), fontWeight: 500 }}
    >
      {dateFormat(tempDate, "mm/dd/yyyy")}
    </Box>,
      title: `All Time High`,
    },


    {
      value:"$18,578,159",
      widget: <PerformanceWidget value={-0.01} />,
      title: `Market Cap`,
    }, 
    {
      value:"$31,009,812",
      widget: <PerformanceWidget value={0.03} />,
      title: `Fully Diluted Market Cap`,
    },
    {
      value:"$11,849",
          widget:<PerformanceWidget value={0.21} />,
          title:`Volume (24hrs)`,
    },
    {
      value:"$0.3117",
      widget: <Box
      sx={{ color: "text.light", fontSize: deviceWrapper('.8rem', "1rem"), fontWeight: 500 }}
    >
      {dateFormat(tempDate, "mm/dd/yyyy")}
    </Box>,
      title: `All Time High`,
    }
  ]
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          width: "100%",
          mt: "1rem",
          display: "flex",
          alignItems: "center",
          flexWrap: 'wrap'
        }}
      >
        {infoCards.map((i: IInfoCard, c: number) => {
          return <InfoCard {...i} key={`info-card-${c}`} c={c}/>
        })}
      </Box>
    </Box>
  );
};

export default InfoGrid;
