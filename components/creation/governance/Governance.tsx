import * as React from "react";
import {
  AlertTitle,
  Box,
  Button,
  Divider,
  OutlinedInput,
  Select,
  Slider,
  Switch,
} from "@mui/material";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import { GlobalContext } from "../../../lib/creation/Context";
import InfoIcon from "@mui/icons-material/Info";
import AddIcon from "@mui/icons-material/Add";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import WalletSelector from "./WalletSelector";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import DeleteIcon from "@mui/icons-material/Delete";
import { LearnMore } from "../utilities/HeaderComponents";

const Governance: React.FC = () => {
  const globalContext = React.useContext(GlobalContext);
  let data = globalContext.api.data.governance;
  return (
    <Box
      sx={{
        width: "70%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        color: "primary.text",
      }}
    >
      <Box sx={{ textAlign: "left", width: "100%", fontSize: "1.2rem" }}>
        Governance and voting configuration
        <Box sx={{ width: "100%", color: "text.light", fontSize: ".8rem" }}>
          You can use the default settings or dive more in deep configure your
          voting system as you wish. You can enable and configure features such
          as "Optimistic governance" or "Quadratic voting" and edit the support
          quorum, and voting times.
        </Box>
      </Box>
      <Box
        sx={{
          textAlign: "left",
          width: "100%",
          fontSize: "1.1rem",
          mt: ".8rem",
          pb: "1rem",
          borderBottom: "1px solid",
          borderBottomColor: "divider.main",
        }}
      >
        <LearnMore title="Optimistic governance" tooltipTitle="Title Here" tooltipText="Content here." tooltipLink="/here" />
        <Box sx={{ width: "100%", color: "text.light", fontSize: ".8rem" }}>
          If active only whitelisted members will be able to create proposals.
          If proposals are not challenged, they will be approved.
        </Box>
        <Box
          sx={{
            fontSize: ".9rem",
            fontWeight: 410,
            display: "flex",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Box>Activate optimistic governance</Box>
          <Box sx={{ ml: "auto" }}>
            <Switch
              checked={data.optimisticGovernance}
              onChange={() =>
                globalContext.api.setData({
                  ...globalContext.api.data,
                  governance: {
                    ...data,
                    optimisticGovernance: !data.optimisticGovernance,
                  },
                })
              }
            />
          </Box>
        </Box>
        {data.optimisticGovernance && (
          <>
            
        <LearnMore title="White listed members" tooltipTitle="Title Here" tooltipText="Content here." tooltipLink="/here" />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                flexDirection: "column",
              }}
            >
              {data.whitelist.map((i: any, c: number) => {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      mt: ".5rem",
                      mb: ".5rem",
                    }}
                  >
                    <Box
                      sx={{
                        width: "90%",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <WalletSelector
                        id="governance"
                        data={i}
                        number={c}
                        canDelete={data.whitelist.length > 0}
                        set={(j: any) => {
                          let temp = [...data.whitelist];

                          if (j === undefined) {
                            temp.splice(c, 1);
                          } else {
                            temp[c] = j;
                          }
                          globalContext.api.setData({
                            ...globalContext.api.data,
                            governance: {
                              ...data,
                              whitelist: temp,
                            },
                          });
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        width: "10%",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {data.whitelist.length > 1 && (
                        <DeleteIcon
                          style={{
                            fill: "red",
                            marginLeft: ".4rem",
                            cursor: "pointer",
                            width: "3rem",
                          }}
                          onClick={() => {
                            let temp = [...data.whitelist];
                            temp.splice(c, 1);
                            globalContext.api.setData({
                              ...globalContext.api.data,
                              governance: {
                                ...data,
                                whitelist: temp,
                              },
                            });
                          }}
                        />
                      )}
                    </Box>
                  </Box>
                );
              })}
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: ".8rem",
              }}
            >
              <Button
                variant="text"
                sx={{ mr: 2 }}
                onClick={() => {
                  let temp = [...data.whitelist];
                  globalContext.api.setData({
                    ...globalContext.api.data,
                    governance: {
                      ...data,
                      whitelist: temp.concat([
                        { alias: "", address: "", img: "" },
                      ]),
                    },
                  });
                }}
              >
                Add Another <AddIcon />
              </Button>
              <Button variant="text">
                Add from file <FileUploadIcon />
              </Button>
            </Box>
        <LearnMore small title="Collateral" tooltipTitle="Title Here" tooltipText="Content here." tooltipLink="/here" />


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
                    globalContext.api.setData({
                      ...globalContext.api.data,
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
                      globalContext.api.setData({
                        ...globalContext.api.data,
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
            <LearnMore small title="Time to challenge a proposal" tooltipTitle="Title Here" tooltipText="Content here." tooltipLink="/here" />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                mt: ".8rem",
              }}
            >
              <Box sx={{ width: "30%" }}>
                <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                  <InputLabel htmlFor={`challenge-time-input`} shrink>
                    Challenge time
                  </InputLabel>
                  <OutlinedInput
                    notched
                    id={`challenge-time-input`}
                    type="number"
                    value={
                      data.timeToChallenge === 0 ? "" : data.timeToChallenge
                    }
                    onChange={(e) =>
                      globalContext.api.setData({
                        ...globalContext.api.data,
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
                          color: "primary.text",
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
                            sx={{ height: "100%", color: "primary.text" }}
                            onChange={(e) =>
                              globalContext.api.setData({
                                ...globalContext.api.data,
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
      </Box>
      <Box
        sx={{
          pb: "1rem",
          mb: "1rem",
          borderBottom: "1px solid",
          borderBottomColor: "divider.main",
        }}
      >
                    <LearnMore title="Quadratic voting" tooltipTitle="Title Here" tooltipText="Content here." tooltipLink="/here" />

        <Box sx={{ width: "100%", color: "text.light", fontSize: ".8rem" }}>
          If active, voting power will not be determined only by the stakeholder
          investment, avoiding whales having too much influence over decisions
        </Box>
        <Box
          sx={{
            fontSize: ".9rem",
            fontWeight: 410,
            display: "flex",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Box>Activate quadratic voting</Box>
          <Box sx={{ ml: "auto" }}>
            <Switch
              checked={data.quadraticVoting}
              onChange={() =>
                globalContext.api.setData({
                  ...globalContext.api.data,
                  governance: {
                    ...data,
                    quadraticVoting: !data.quadraticVoting,
                  },
                })
              }
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          pb: "1rem",
          mb: "1rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box>Configure voting system</Box>
        </Box>
        <LearnMore small title="Support needed on single choice voting" tooltipTitle="Title Here" tooltipText="Content here." tooltipLink="/here" />

        <Box
          sx={{ display: "flex", alignItem: "center", mt: ".4rem", pl: "1rem" }}
        >
          <Box sx={{ width: "87%", display: "flex", alignItems: "center" }}>
            <Slider
              value={data.supportNeeded}
              min={51}
              max={100}
              onChange={(event, newValue) =>
                globalContext.api.setData({
                  ...globalContext.api.data,
                  governance: {
                    ...data,
                    supportNeeded: newValue,
                  },
                })
              }
            />
          </Box>
          <Box
            sx={{
              width: "13%",
              ml: "1rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextField
              label="Value"
              type="number"
              value={data.supportNeeded}
              onChange={(e) =>
                globalContext.api.setData({
                  ...globalContext.api.data,
                  governance: {
                    ...data,
                    supportNeeded: e.target.value,
                  },
                })
              }
              InputProps={{
                inputProps: { min: 51, max: 100 },
                endAdornment: <Box>%</Box>,
              }}
            />
          </Box>
        </Box>
        <Box sx={{ width: "100%", mt: 2 }}>
          <Alert severity="warning" color="warning" sx={{ fontSize: ".8rem" }}>
            <AlertTitle sx={{ fontSize: ".9rem" }}>
              Only for single-choice voting
            </AlertTitle>
            Support will only apply to single-choice voting. It determines the
            percentage of users that need to agree for a proposal to be
            approved. Can't be set to less than 51%
          </Alert>
        </Box>
        <LearnMore small title="Quorum" tooltipTitle="Title Here" tooltipText="Content here." tooltipLink="/here" />

        <Box
          sx={{ display: "flex", alignItem: "center", mt: ".4rem", pl: "1rem" }}
        >
          <Box sx={{ width: "87%", display: "flex", alignItems: "center" }}>
            <Slider
              value={data.quorum}
              min={0}
              max={100}
              onChange={(event, newValue) =>
                globalContext.api.setData({
                  ...globalContext.api.data,
                  governance: {
                    ...data,
                    quorum: newValue,
                  },
                })
              }
            />
          </Box>
          <Box
            sx={{
              width: "13%",
              ml: "1.5rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextField
              label="Value"
              type="number"
              value={data.quorum}
              onChange={(e) =>
                globalContext.api.setData({
                  ...globalContext.api.data,
                  governance: {
                    ...data,
                    quorum: e.target.value,
                  },
                })
              }
              InputProps={{
                inputProps: { min: 0, max: 100 },
                endAdornment: <Box>%</Box>,
              }}
            />
          </Box>
        </Box>
        <Box sx={{ fontSize: ".9rem", fontWeight: 410, mb: "1rem", ml: 1 }}>
          How long does the voting period last for?
        </Box>
        <FormControl sx={{ m: 1, width: "30%" }} variant="outlined">
          <InputLabel htmlFor={`challenge-time-input`} shrink>
            Vote duration
          </InputLabel>
          <OutlinedInput
            notched
            id={`challenge-time-input`}
            type="number"
            value={data.voteDuration === 0 ? "" : data.voteDuration}
            onChange={(e) =>
              globalContext.api.setData({
                ...globalContext.api.data,
                governance: {
                  ...data,
                  voteDuration:
                    e.target.value === "" ? 0 : parseInt(e.target.value),
                },
              })
            }
            endAdornment={
              <Box
                sx={{
                  height: "100%",
                  width: "90%",
                  backgroundColor: "backgroundColor.main",
                  color: "primary.text",
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
                    value={data.voteDurationUnits}
                    sx={{ height: "100%", color: "primary.text" }}
                    onChange={(e) =>
                      globalContext.api.setData({
                        ...globalContext.api.data,
                        governance: {
                          ...data,
                          voteDurationUnits: e.target.value,
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
            label="Vote duration"
          />
        </FormControl>
      </Box>
    </Box>
  );
};

export default Governance;
