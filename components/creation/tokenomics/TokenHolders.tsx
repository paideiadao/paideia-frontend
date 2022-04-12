import { Alert, AlertTitle, Box, Button, InputAdornment, TextField } from "@mui/material";
import * as React from "react";
import { ITokenomics } from "../../../lib/creation/Api";
import { GlobalContext } from "../../../lib/creation/Context";
import { IData } from "../../../lib/utilities";
import WalletSelector from "../governance/WalletSelector";
import { LearnMore } from "../utilities/HeaderComponents";
import AddIcon from "@mui/icons-material/Add";
import FileUploadIcon from "@mui/icons-material/FileUpload";


const TokenHolders: React.FC<IData<ITokenomics>> = (props) => {
  let globalContext = React.useContext(GlobalContext);
  let data = props.data;
  return (
    <Box sx={{borderBottom: '1px solid', borderBottomColor: 'divider.main', pb: '1rem'}}>
      <LearnMore title="Token Holders" />
      <Box
        sx={{
          width: "100%",
        }}
      >
        {data.tokenHolders.map((i: any, c: number) => {
          return (
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <Box sx={{ width: "60%", mr: '.5rem' }}>
                <WalletSelector
                  id="tokenomics"
                  key={c + 'tokenomics'}
                  data={i}
                  number={c}
                  set={(j: any) => {
                    let temp = [...data.tokenHolders];
                    console.log(j);
                    if (j === undefined) {
                      temp.splice(c, 1);
                    } else {
                      temp[c] = { ...temp[c], ...j };
                    }
                    console.log(temp[c]);
                    props.setData({ ...props.data, tokenHolders: temp })
                  }}
                />
              </Box>
              <Box sx={{ width: "26%", mr: '.5rem' }}>
                <TextField
                  label="Balance"
                  type="number"
                  value={data.tokenHolders[c].balance}
                  onChange={(e) => {
                    let temp = [...data.tokenHolders];
                    temp[c] = { ...temp[c], balance: parseInt(e.target.value) };
                    console.log(temp[c]);
                    props.setData({ ...props.data, tokenHolders: temp })
                  }
                  }
                />
              </Box>
              <Box sx={{ width: "14%" }}>
                <TextField
                  label="Percentage"
                  type="number"
                  value={data.tokenHolders[c].percentage}
                  onChange={(e) => {
                    let temp = [...data.tokenHolders];
                    temp[c] = { ...temp[c], percentage: parseInt(e.target.value) };
                    console.log(temp[c]);
                    props.setData({ ...props.data, tokenHolders: temp })
                  }}
                  InputProps={{
                    endAdornment:<InputAdornment position="end">%</InputAdornment>
                  }}
                />
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
                  let temp = [...data.tokenHolders];
                  globalContext.api.setData({
                    ...globalContext.api.data,
                    tokenomics: {
                      ...data,
                      tokenHolders: temp.concat([
                        { alias: "", address: "", img: "", balance: 0, percentage: 0 },
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

            <Box sx={{ width: "100%", mt: 2 }}>
          <Alert severity="warning" color="warning" sx={{ fontSize: ".8rem" }}>
            <AlertTitle sx={{ fontSize: ".9rem" }}>
              Tokens will be automatically sent to the treasury
            </AlertTitle>
            You have ... unassigned ... tokens (...%). You can distribute them now by setting token configuration below or if you choose not to do it now, they will go to the treasury.
          </Alert>
        </Box>
    </Box>
  );
};

export default TokenHolders;
