import * as React from "react";
import { AlertTitle, Box, Button, Switch } from "@mui/material";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import { GlobalContext } from "../../../lib/creation/Context";
import InfoIcon from "@mui/icons-material/Info";
import AddIcon from "@mui/icons-material/Add";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import WalletSelector from "./WalletSelector";

const Governance: React.FC = () => {
  const globalContext = React.useContext(GlobalContext);
  let data = globalContext.api.data.governance;
  return (
    <Box
      sx={{
        width: "65%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        color: "primary.text",
      }}
    >
      <Box sx={{ textAlign: "left", width: "100%", fontSize: "1.2rem" }}>
        Governance and voting configuration
        <Box
          sx={{ width: "100%", color: "primary.lightText", fontSize: ".8rem" }}
        >
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
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box>Optimistic governance</Box>
          <Box sx={{ ml: "auto" }}>
            <Button variant="text">
              Learn More{" "}
              <InfoIcon style={{ fill: "primary.main", marginLeft: ".4rem" }} />
            </Button>
          </Box>
        </Box>
        <Box
          sx={{ width: "100%", color: "primary.lightText", fontSize: ".8rem" }}
        >
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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                mt: ".4rem",
              }}
            >
              <Box sx={{ fontSize: ".9rem", fontWeight: 410 }}>
                White listed members
              </Box>
              <Box sx={{ ml: "auto" }}>
                <Button variant="text">
                  Learn More{" "}
                  <InfoIcon
                    style={{ fill: "primary.main", marginLeft: ".4rem" }}
                  />
                </Button>
              </Box>
            </Box>
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
                  <WalletSelector
                    data={i}
                    number={c}
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
          </>
        )}
      </Box>
    </Box>
  );
};

export default Governance;
