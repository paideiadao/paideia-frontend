import React, { FC } from "react";
import { styled } from "@mui/system";
import { Grid, Typography, Tabs, Tab, Box } from "@mui/material";

interface ITabs {
  tabs: {
    title: string;
    fragment: React.ReactFragment;
  }[];
  headline?: string;
}

const StyledTabs = styled(Tabs)`
  display: inline-flex;
  border-radius: 4px;
  .Mui-selected {
    text-decoration: none;
    background-color: rgba(159, 210, 219, 0.08);
    border: 1px solid #9fd2db;
  }
`;

const StyledTab = styled(Tab)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  padding: 0;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  text-decoration: none;
  color: inherit;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 0.8125rem;
  line-height: 1.75;
  text-transform: uppercase;
  min-width: 64px;
  padding: 3px 9px;
  border-radius: 4px;
  transition: background-color 250ms, border-color 250ms, color 250ms;
  border: 1px solid rgba(159, 210, 219, 0.5);
  color: #9fd2db;
  min-width: 40px;

  &:not(:last-of-type) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right-color: transparent;
  }

  &:last-of-type {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    margin-left: -1px;
  }

  &:hover {
    text-decoration: none;
    background-color: rgba(159, 210, 219, 0.08);
    border: 1px solid #9fd2db;
  }
`;

const TabsPanel: FC<ITabs> = ({ tabs, headline }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "center", md: "flex-start" },
          marginBottom: "24px",
        }}
      >
        <Grid item md={8}>
          <Typography
            sx={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontWeight: "500",
              fontSize: "20px",
              lineHeight: "23px",
            }}
          >
            {headline}
          </Typography>
        </Grid>
        <Grid item md="auto">
          <StyledTabs value={value} onChange={handleChange}>
            {tabs.map((tab, i) => (
              <StyledTab key={i} label={tab.title} />
            ))}
          </StyledTabs>
        </Grid>
      </Grid>
      {tabs.map((tab, i) => (
        <Box
          key={i}
          role="tabpanel"
          hidden={value !== i}
          id={`simple-tabpanel-${i}`}
          aria-labelledby={`simple-tab-${i}`}
        >
          {value === i && <Box sx={{ p: 3 }}>{tab.fragment}</Box>}
        </Box>
      ))}
    </>
  );
};

export default TabsPanel;