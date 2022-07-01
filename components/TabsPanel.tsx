import React, { FC } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { IObj } from '@lib/utilities'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { DarkTheme } from "@theme/theme";
import { styled } from '@mui/material/styles';

interface ITabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: ITabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        children
      )}
    </div>
  );
}

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface ITabs {
  tabs: IObj<React.ReactFragment | string>[],

}

interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    background: theme.palette.primary
  }),
)


const CustomTable: FC<ITabs> = ({ tabs }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {tabs.map((tab, i) => {
            return (
              <StyledTab label={tab.title} {...a11yProps(i)} />
            )
          })}
        </Tabs>
      </Box>
      {tabs.map((tab, i) => {
        return (
          <TabPanel value={value} index={i}>
            {tab.fragment}
          </TabPanel>
        )
      })}

    </Box>
  )
}

export default CustomTable


