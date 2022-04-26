/*
 Each section of the tokenomics that has a vesting schedule attached needs to be included as an object
 within each vesting object, the emission data needs to be calculated for dates & displayed.
*/
import { Box } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';
import * as React from 'react';
import { ITokenomics } from '../../../../lib/creation/Api';
import { percentage } from '../../../../lib/creation/Utilities';
import { IObj } from '../../../../lib/utilities';

const getEmittedTokens = (data: any, timePeriodsTotal: number, timePeriodsRemaining: number, number: number) => {
    console.log(data)
    let base = data.balance * (data.initialDistribution / 100);
    let remaining = data.balance - base
    console.log('remaining', remaining)
    console.log('base', base)

    return timePeriodsTotal === timePeriodsRemaining ? base : (base) + ((data.balance / timePeriodsTotal) * (number)) 
}

const getCleanEmissionsDateData = (data: any) => {
    // things needed to make an array of values
    /*
        start date (await answer from Nico and Marty)
        frequency
        length (* units)
        
        1. create array starting at the emissionStartDate, x is emissionDateStart, y is initial

    */

    let frequencyConversion: IObj<Function> = {
        'hourly': (length: number, units: string) => {
            switch(units) {
                case 'days': {
                    return 24 * length
                }
                case 'weeks': {
                    return 168 * length
                }
                case 'months': {
                    return 730 * length
                }
                case 'years': {
                    return 8760 * length
                }
            }
        },
        'daily': (length: number, units: string) => {
            switch(units) {
                case 'days': {
                    return 1 * length
                }
                case 'weeks': {
                    return 7 * length
                }
                case 'months': {
                    return 30 * length
                }
                case 'years': {
                    return 365 * length
                }
            }
        },
        'weekly': (length: number, units: string) => {
            switch(units) {
                case 'days': {
                    return 0;
                }
                case 'weeks': {
                    return 1 * length
                }
                case 'months': {
                    return 4 * length
                }
                case 'years': {
                    return 52 * length
                }
            }
        },
        'monthly': (length: number, units: string) => {
            switch(units) {
                case 'days': {
                    return 0;
                }
                case 'weeks': {
                    return 0
                }
                case 'months': {
                    return 1 * length
                }
                case 'years': {
                    return 12 * length
                }
            }
        },
        'yearly': (length: number, units: string) => {
            switch(units) {
                case 'days': {
                    return 0;
                }
                case 'weeks': {
                    return 0
                }
                case 'months': {
                    return 0
                }
                case 'years': {
                    return 1 * length
                }
            }
        }

    }

    let frequencyLookup: IObj<Function> = {
        'hourly': (d: Date, iter: number) => {
            let date = new Date(d)
            date.setHours(date.getHours() + iter);
            return date;
        },
        'daily': (d: Date, iter: number) => {
            let date = new Date(d)
            date.setDate(date.getDate() + (iter))
            return date;
        },
        'weekly': (d: Date, iter: number) => {
            let date = new Date(d)
            date.setDate(date.getDate() + (7 * iter));
            return date;
        },
        'monthly': (d: Date, iter: number) => {
            let date = new Date(d)
            date.setDate(date.getDate() + (30 * iter));
            return date;
        },
        'yearly': (d: Date, iter: number) => {
            let date = new Date(d)
            date.setDate(date.getDate() + (365 * iter));
            return date;
        }
    }

    let length = frequencyConversion[data.frequency](data.emissionLength, data.emissionLengthUnits)
    console.log(length)
    let init = new Date(data.emissionStartDate);
    return Array.from(Array(length).keys()).map((i: any, c: any) => {
        let point = frequencyLookup[data.frequency](init, c);
        return {
            x: point,
            y: getEmittedTokens(data, length, length - c, c)
        }
    })
}

const getCleanEmissionsData = (data: any) => {
    let colorLookup = [
        'red',
        'blue'
    ];

    let temp = data == null ? [] : data.filter((i: any) => i.vesting).map((i: any, c: number) => {
        return {
            id: i.distributionName,
            color: colorLookup[c],
            label: i.distributionName,
            data: getCleanEmissionsDateData(i)
        }
    })

    // need to go back through and add records for these charts dating all the way into the future...
    // grab the largest max date & add records for that row going until that time... 
    // also need to dynamically change the tick values. 

    return temp
}

const Emissions: React.FC<ITokenomics> = (props) => {
    return <ResponsiveLine
      colors={(d: any) => d.color}
      margin={{ top: 50, right: 140, bottom: 50, left: 50 }}
      data={getCleanEmissionsData(props.distributions)}
      enableArea
      xScale={{
        type: 'time',
        format: '%Y-%m-%d',
        useUTC: false,
        precision: 'day'
      }}
      xFormat="time:%Y-%m-%d"
      yScale={{
        type: 'linear',
        stacked: true,
        max: 'auto'
      }}
      axisLeft={{
        legend: 'Percentage of Total Supply',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendOffset: -40,
        legendPosition: 'middle',
        tickValues: 5
      }}
      axisBottom={{
        format: '%b %y',
        tickValues: 'every 1 month',
        legend: 'Date',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendOffset: 36,
        legendPosition: 'middle'
      }}
      pointSize={5}
      pointBorderWidth={1}
      pointBorderColor={{
        from: 'color',
        modifiers: [['darker', 0.3]]
      }}
      curve="monotoneX"
      useMesh={true}
      enableSlices={false}
      lineWidth={1}
      tooltip={(point: any) => {
        return (
          <Box
            sx={{
              backgroundColor: 'white',
              borderRadius: '.1rem',
              textAlign: 'center',
              p: 1,
              m: 1
            }}
          >
            <Box sx={{ fontSize: '1.1rem' }}>
              Tip Here
            </Box>
            <Box sx={{ fontSize: '1rem' }}>
                {point.point.data.y}
            </Box>
          </Box>
        );
      }}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
    />
}

export default Emissions;