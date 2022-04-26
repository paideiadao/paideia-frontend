/*
 Each section of the tokenomics that has a vesting schedule attached needs to be included as an object
 within each vesting object, the emission data needs to be calculated for dates & displayed.
*/
import { Box } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';
import * as React from 'react';
import { ITokenomics } from '../../../../lib/creation/Api';
import { IData } from '../../../../lib/utilities';

const getCleanEmissionsDateData = (data: any) => {
    // things needed to make an array of values
    /*
        start date (await answer from Nico and Marty)
        frequency
        length (* units)
    */
   console.log('i...', data.distributionName)
    return []
}

const getCleanEmissionsData = (data: any) => {
    let colorLookup = [

    ]
    return data.filter((i: any) => i.vesting).map((i: any, c: number) => {
        return {
            id: i.distributionName,
            color: colorLookup[c],
            label: i.distributionName,
            data: getCleanEmissionsDateData(i)
        }
    })
}

const Emissions: React.FC<ITokenomics> = (props) => {
    return <ResponsiveLine
      colors={(d: any) => d.color}
      margin={{ top: 50, right: 100, bottom: 50, left: 60 }}
      data={getCleanEmissionsData(props.distributions)}
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
        max: 10
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
        format: '%b %d',
        tickValues: 'every 2 days',
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
      tooltip={(point) => {
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