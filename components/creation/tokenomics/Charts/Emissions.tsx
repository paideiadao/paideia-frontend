/*
 Each section of the tokenomics that has a vesting schedule attached needs to be included as an object
 within each vesting object, the emission data needs to be calculated for dates & displayed.
*/
import { Box } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import * as React from "react";
import { ITokenomics } from "../../../../lib/creation/Api";
import { percentage } from "../../../../lib/creation/Utilities";
import { IObj } from "../../../../lib/utilities";
import dateFormat from "dateformat";
import { LightTheme } from "../../../../theme/theme";
import {
  GlobalContext,
  IGlobalContext,
} from "../../../../lib/creation/Context";

const getEmittedTokens = (
  data: any,
  timePeriodsTotal: number,
  timePeriodsRemaining: number,
  number: number
) => {
  let base = data.balance * (data.initialDistribution / 100);
  return timePeriodsTotal === timePeriodsRemaining
    ? base
    : base + (data.balance / timePeriodsTotal) * number;
};

const getCleanEmissionsDateData = (data: any) => {
  // things needed to make an array of values
  /*
        start date (await answer from Nico and Marty)
        frequency
        length (* units)
        
        1. create array starting at the emissionStartDate, x is emissionDateStart, y is initial

    */

  let frequencyConversion: IObj<Function> = {
    hourly: (length: number, units: string) => {
      switch (units) {
        case "days": {
          return 24 * length;
        }
        case "weeks": {
          return 168 * length;
        }
        case "months": {
          return 730 * length;
        }
        case "years": {
          return 8760 * length;
        }
      }
    },
    daily: (length: number, units: string) => {
      switch (units) {
        case "days": {
          return 1 * length;
        }
        case "weeks": {
          return 7 * length;
        }
        case "months": {
          return 30 * length;
        }
        case "years": {
          return 365 * length;
        }
      }
    },
    weekly: (length: number, units: string) => {
      switch (units) {
        case "days": {
          return 0;
        }
        case "weeks": {
          return 1 * length;
        }
        case "months": {
          return 4 * length;
        }
        case "years": {
          return 52 * length;
        }
      }
    },
    monthly: (length: number, units: string) => {
      switch (units) {
        case "days": {
          return 0;
        }
        case "weeks": {
          return 0;
        }
        case "months": {
          return 1 * length;
        }
        case "years": {
          return 12 * length;
        }
      }
    },
    yearly: (length: number, units: string) => {
      switch (units) {
        case "days": {
          return 0;
        }
        case "weeks": {
          return 0;
        }
        case "months": {
          return 0;
        }
        case "years": {
          return 1 * length;
        }
      }
    },
  };

  let frequencyLookup: IObj<Function> = {
    hourly: (d: Date, iter: number) => {
      let date = new Date(d);
      date.setHours(date.getHours() + iter);
      return date;
    },
    daily: (d: Date, iter: number) => {
      let date = new Date(d);
      date.setDate(date.getDate() + iter);
      return date;
    },
    weekly: (d: Date, iter: number) => {
      let date = new Date(d);
      date.setDate(date.getDate() + 7 * iter);
      return date;
    },
    monthly: (d: Date, iter: number) => {
      let date = new Date(d);
      date.setDate(date.getDate() + 30 * iter);
      return date;
    },
    yearly: (d: Date, iter: number) => {
      let date = new Date(d);
      date.setDate(date.getDate() + 365 * iter);
      return date;
    },
  };

  let length = frequencyConversion[data.frequency](
    data.emissionLength,
    data.emissionLengthUnits
  );
  let init = new Date(data.emissionStartDate);
  let temp = Array.from(Array(length).keys()).map((i: any, c: any) => {
    let point = frequencyLookup[data.frequency](init, c);
    return {
      x: point,
      y: getEmittedTokens(data, length, length - c, c),
    };
  });

  return temp;
};

const getCleanEmissionsData = (data: any) => {
  let colorLookup = ["red", "blue", "green", "orange"];

  /*
    All data points need to have the EXACT same length. 
    Find the max distribution length & make all arrays of that size...
    */
  let temp =
    data == null
      ? []
      : data
          .filter(
            (i: any) => i.vesting && i.balance > 0 && i.emissionLength > 0
          )
          .map((i: any, c: number) => {
            return {
              id: i.distributionName,
              color: colorLookup[c],
              label: i.distributionName,
              data: getCleanEmissionsDateData(i),
            };
          });

  // need to go back through and add records for these charts dating all the way into the future...
  // grab the largest max date & add records for that row going until that time...
  // also need to dynamically change the tick values.
  let max = undefined;
  temp.forEach((j: any) => {
    let tempDates = j.data.map((z: any) => z.x);
    max = new Date(Math.max.apply(null, tempDates));
  });

  temp.forEach((j: any) => {
    let last = j.data[j.data.length - 1];

    if (last.y < max) {
      j.data.push({
        x: max,
        y: last.y,
      });
    }
  });

  temp = temp.sort((a: any, b: any) => b.data.length - a.data.length);
  return temp;
};

// to do 1. get lowest frequency 2. get longest emission length.

const getLowestFrequency = (data: any) => {
  let frequencyRank = ["hourly", "daily", "weekly", "monthly", "yearly"];

  let temp = data
    .filter((i: any) => i !== undefined)
    .filter((i: any) => i.vesting)
    .map((i: any) => {
      return frequencyRank.indexOf(i.frequency);
    });

  console.log("lf", temp);

  let min = Math.min(...temp);

  return temp[temp.indexOf(min)];
};

let frequencyConversion: IObj<Function> = {
  hourly: (length: number, units: string) => {
    switch (units) {
      case "days": {
        return 24 * length;
      }
      case "weeks": {
        return 168 * length;
      }
      case "months": {
        return 730 * length;
      }
      case "years": {
        return 8760 * length;
      }
    }
  },
  daily: (length: number, units: string) => {
    switch (units) {
      case "days": {
        return 1 * length;
      }
      case "weeks": {
        return 7 * length;
      }
      case "months": {
        return 30 * length;
      }
      case "years": {
        return 365 * length;
      }
    }
  },
  weekly: (length: number, units: string) => {
    switch (units) {
      case "days": {
        return 0;
      }
      case "weeks": {
        return 1 * length * 30;
      }
      case "months": {
        return 4 * length;
      }
      case "years": {
        return 52 * length;
      }
    }
  },
  monthly: (length: number, units: string) => {
    switch (units) {
      case "days": {
        return 0.03333333333 * length;
      }
      case "weeks": {
        return 0.25 * length;
      }
      case "months": {
        return 1 * length;
      }
      case "years": {
        return 12 * length;
      }
    }
  },
  yearly: (length: number, units: string) => {
    switch (units) {
      case "days": {
        return length * 0.00273972602;
      }
      case "weeks": {
        return length * 0.01917806642;
      }
      case "months": {
        return length * 0.08333;
      }
      case "years": {
        return 1 * length;
      }
    }
  },
};

const getLongestEmission = (data: any) => {
  let temp = data.map((i: any) =>
    frequencyConversion[i.frequency](i.emissionLength, i.emissionLengthUnits)
  );
  console.log(temp, "le");
  temp = temp.sort((a, b) => a - b);
  let max = Math.max(...temp);

  return temp[temp.indexOf(max)];
};

const getChartData = (data: any) => {
  // let lowestFrequency = getLowestFrequency(data);
  // console.log(lowestFrequency)
  console.log("data", data);
  let longestEmission = getLongestEmission(data.filter((i: any) => i.vesting));
  console.log("longestEmission", longestEmission);
  let colorLookup = ["red", "blue", "green", "orange", "brown"];
  let lastDay = 0;
  let vestingData = data
    .filter((i: any) => i.vesting)
    .map((i: any, c: number) => {
      let initial = (i.initialDistribution / 100) * i.balance;
      let denom =
        i.frequency === undefined
          ? i.balance
          : frequencyConversion[i.frequency](
              i.emissionLength,
              i.emissionLengthUnits
            );
      return {
        id: i.distributionName,
        color: colorLookup[c],
        label: i.distributionName,
        data:
          longestEmission === undefined
            ? []
            : [...Array.from(Array(longestEmission + 1).keys())].map(
                (j: any, c: number) => {
                  let temp = new Date(i.emissionStartDate);
                  let mod = frequencyConversion[i.frequency](
                    i.emissionLength,
                    i.emissionLengthUnits
                  );
                  if (j % Math.floor(mod) === 0 || mod == longestEmission) {
                    lastDay = j;
                  }

                  let conversion =
                    denom === 0
                      ? 0
                      : (lastDay === denom ? lastDay : lastDay % denom) / denom;

                  temp.setDate(temp.getDate() + j);
                  if (c === longestEmission) {
                    lastDay = 0;
                  }
                  return {
                    x: new Date(temp),
                    y: !i.vesting
                      ? i.balance
                      : conversion > 1
                      ? i.balance
                      : initial + conversion * (i.balance - initial), //((conversion * (i.balance - initialAmt)) + initialAmt)
                  };
                }
              ),
      };
    });

  let nonVestingData =
    data.length === 0
      ? []
      : data
          .filter((i: any) => i.vesting === undefined || !i.vesting)
          .map((i: any, c: number) => {
            let longestPeriod = vestingData.length === 0 ? 10 : longestEmission;

            return {
              id: i.distributionName,
              color: colorLookup[c + vestingData.length],
              label: i.distributionName,
              data: [...Array.from(Array(longestPeriod + 1).keys())].map(
                (j: any, c: number) => {
                  let temp = new Date();
                  temp.setDate(temp.getDate() + j);
                  return {
                    x: new Date(temp),
                    y: i.balance,
                  };
                }
              ),
            };
          });

  console.log("nonVestingData", nonVestingData);

  return nonVestingData.concat(vestingData);
};

const Emissions: React.FC<ITokenomics> = (props) => {
  let globalContext = React.useContext<IGlobalContext>(GlobalContext);
  let data = globalContext.api.data.tokenomics.distributions
    .filter((i: any) => i !== undefined)
    .sort((a: any, b: any) => (a.vesting ? 1 : -1));
  // sort by longest vesting data in the getChartData function

  let chartData = getChartData(data);
  console.log(chartData, " ya digggggg");

  let xScaleNumber =
    chartData.length === 0
      ? 1
      : chartData[0].data.length / 30 < 1
      ? 1
      : (chartData[0].data.length / 30).toFixed(0);
  return (
    <ResponsiveLine
      colors={(d: any) => d.color}
      margin={{ top: 50, right: 140, bottom: 50, left: 50 }}
      data={chartData}
      enableArea
      enablePoints={false}
      theme={{
        textColor:
          globalContext.api.theme === LightTheme
            ? "rgba(0, 0, 0, 0.6)"
            : "rgba(255, 255, 255, 0.7)",
      }}
      xScale={{
        type: "time",
        format: "%Y-%m-%d",
        useUTC: true,
        precision: "day",
      }}
      xFormat="time:%Y-%m-%d"
      yScale={{
        type: "linear",
        stacked: true,
      }}
      curve="monotoneX"
      axisLeft={{
        legend: "Tokens",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendOffset: -40,
        legendPosition: "middle",
        tickValues: 5,
      }}
      axisBottom={{
        format: "%b %y",
        tickValues: `every ${xScaleNumber === 0 ? 1 : xScaleNumber} month`,
        legend: "Date",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendOffset: 36,
        legendPosition: "middle",
      }}
      areaOpacity={1}
      pointSize={5}
      pointBorderWidth={1}
      pointBorderColor={{
        from: "color",
        modifiers: [["darker", 0.3]],
      }}
      useMesh={true}
      enableSlices={false}
      lineWidth={1}
      tooltip={(point: any) => {
        return (
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: ".1rem",
              textAlign: "center",
              p: 1,
              m: 1,
            }}
          >
            <Box sx={{ fontSize: "1.1rem" }}>
              {dateFormat(point.point.data.x, "mmmm dS, yyyy")}
            </Box>
            <Box sx={{ fontSize: "1rem" }}>{point.point.data.y}</Box>
          </Box>
        );
      }}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default Emissions;
