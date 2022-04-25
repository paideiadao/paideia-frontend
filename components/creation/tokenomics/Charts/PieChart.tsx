import { Box } from '@mui/material';
import { ResponsivePie } from '@nivo/pie';
import * as React from 'react';
import { ITokenHolder, ITokenomics } from '../../../../lib/creation/Api';
import { percentage } from '../../../../lib/creation/Utilities';

// [
//     {
//       "id": "css",
//       "label": "css",
//       "value": 428,
//       "color": "hsl(24, 70%, 50%)"
//     }
//   ]

const PieChart: React.FC<ITokenomics> = (props) => {
    let data = props
    let tokenHolders = data.tokenHolders;
    return <ResponsivePie
    data={[{
        id: 'Token Holders',
        label: 'Token Holders',
        value: tokenHolders.map((i: ITokenHolder) => i.balance).reduce((sum, current) => sum + current, 0)
    }, {
        id: 'Unassigned Tokens',
        label: 'Unassigned Tokens (Treasury)',
        value: data.tokenRemaining
    }].concat(data.distributions.map((i: any) => {
        return {
            id: i.distributionName,
            label: i.distributionName,
            value: i.balance
        }
    }))}
    valueFormat={(value) => `${value} (${percentage(value / data.tokenAmount, 0, true)})`}
    sortByValue
    margin={{ top: 40, right: 70, bottom: 30, left: 70 }}
    innerRadius={0.5}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                0.2
            ]
        ]
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: 'color' }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                2
            ]
        ]
    }}
/>
}


export default PieChart;