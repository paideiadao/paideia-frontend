import {
  LearnMore,
  Subtitle,
} from "@components/creation/utilities/HeaderComponents";
import LabeledSwitch from "@components/creation/utilities/LabeledSwitch";
import MultiWalletSelector from "@components/utilities/MultiWalletSelector";
import { deviceStruct } from "@components/utilities/Style";
import { IWallet } from "@lib/creation/Interfaces";
import {
  ConfigContext,
  IConfigContext,
} from "@lib/dao/dao-config/ConfigContext";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
} from "@mui/material";
import * as React from "react";

const OptimisticGovernance: React.FC = () => {
  const context = React.useContext<IConfigContext>(ConfigContext);
  const data = context.api.data.governance;
  return (
    <>
      <LearnMore
        title="Optimistic governance"
        tooltipTitle={"Title Here"}
        tooltipText={"Content Here"}
        tooltipLink="/"
      />
      <Subtitle subtitle="If active, only whitelisted members will be able to create proposals. If a proposal is not challenged, they will be approved." />
      <LabeledSwitch
        small
        onChange={() =>
          context.api.setData({
            ...context.api.data,
            governance: {
              ...data,
              optimisticGovernance: !data.optimisticGovernance,
            },
          })
        }
        value={data.optimisticGovernance}
        title="Activate optimistic governance"
      />
      {data.optimisticGovernance && (
        <>
          <LearnMore
            small
            title="White listed members"
            tooltipTitle={"Title Here"}
            tooltipText={"Content Here"}
            tooltipLink="/"
          />
          <MultiWalletSelector
            wallets={data.whitelist}
            set={(value: IWallet[]) =>
              context.api.setData({
                ...context.api.data,
                governance: {
                  ...data,
                  whitelist: value,
                },
              })
            }
          />
          <LearnMore
            small
            title="Collateral"
            tooltipTitle={"Title Here"}
            tooltipText={"Content Here"}
            tooltipLink="/"
          />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              mt: ".4rem",
            }}
          >
            <Box sx={{ width: "50%", mr: ".8rem" }}>
              <TextField
                value={data.amount}
                label="Amount"
                type="number"
                sx={{ width: "100%" }}
                onChange={(e) =>
                  context.api.setData({
                    ...context.api.data,
                    governance: {
                      ...data,
                      amount: e.target.value,
                    },
                  })
                }
              />
            </Box>
            <Box sx={{ width: "50%" }}>
              <FormControl fullWidth>
                <InputLabel id="currency-select-label">Currency</InputLabel>
                <Select
                  labelId="currency-select-label"
                  id="currency-select"
                  value={data.currency}
                  label="Currency"
                  onChange={(e) =>
                    context.api.setData({
                      ...context.api.data,
                      governance: {
                        ...data,
                        currency: e.target.value,
                      },
                    })
                  }
                >
                  <MenuItem value="sigusd">SigUSD</MenuItem>
                  <MenuItem value="erg">ERG</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <LearnMore
            small
            title="Time to challenge a proposal"
            tooltipTitle="Title Here"
            tooltipText="Content here."
            tooltipLink="/here"
          />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              mt: ".8rem",
            }}
          >
            <Box
              sx={{ width: deviceStruct("70%", "70%", "30%", "30%", "30%") }}
            >
              <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                <InputLabel htmlFor={`challenge-time-input`} shrink>
                  Challenge time
                </InputLabel>
                <OutlinedInput
                  notched
                  id={`challenge-time-input`}
                  type="number"
                  value={data.timeToChallenge === 0 ? "" : data.timeToChallenge}
                  onChange={(e) =>
                    context.api.setData({
                      ...context.api.data,
                      governance: {
                        ...data,
                        timeToChallenge: e.target.value,
                      },
                    })
                  }
                  endAdornment={
                    <Box
                      sx={{
                        height: "100%",
                        width: "90%",
                        backgroundColor: "backgroundColor.main",
                        color: "text.primary",
                        lineHeight: "350%",
                        textAlign: "center",
                        borderRadius: "0 .3rem .3rem 0",
                        mr: "-.8rem",
                        ml: ".5rem",
                        display: "flex",
                      }}
                    >
                      <FormControl fullWidth>
                        <Select
                          labelId="currency-select-label"
                          id="currency-select"
                          variant="outlined"
                          value={data.timeToChallengeUnits}
                          sx={{ height: "100%", color: "text.primary" }}
                          onChange={(e) =>
                            context.api.setData({
                              ...context.api.data,
                              governance: {
                                ...data,
                                timeToChallengeUnits: e.target.value,
                              },
                            })
                          }
                        >
                          <MenuItem value="minutes">Minutes</MenuItem>
                          <MenuItem value="hours">Hours</MenuItem>
                          <MenuItem value="days">Days</MenuItem>
                          <MenuItem value="weeks">Weeks</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  }
                  label="Challenge time"
                />
              </FormControl>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default OptimisticGovernance;
