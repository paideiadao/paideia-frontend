import { Alert, AlertTitle, Box, Button } from "@mui/material";
import * as React from "react";
import { ITokenomics } from "../../../lib/creation/CreationApi";
import { GlobalContext } from "../../../lib/creation/Context";
import { IData } from "../../../lib/utilities";
import WalletSelector from "../governance/WalletSelector";
import { LearnMore } from "../utilities/HeaderComponents";
import AddIcon from "@mui/icons-material/Add";
import {
  percentage,
  percentageToBalance,
} from "../../../lib/creation/Utilities";
import PercentageInput from "../utilities/PercentageInput";
import BalanceInput from "../utilities/BalanceInput";
import DeleteIcon from "@mui/icons-material/Delete";
import CsvLoader from "../../utilities/CsvLoader";

const TokenHolders: React.FC<IData<ITokenomics>> = (props) => {
  let globalContext = React.useContext(GlobalContext);
  let data = props.data;

  React.useEffect(() => {}, [props.data.tokenAmount]);

  return (
    <Box
      sx={{
        borderBottom: "1px solid",
        borderBottomColor: "divider.main",
        pb: "1rem",
      }}
    >
      <LearnMore
        title="Token Holders"
        tooltipTitle="Title Here"
        tooltipText="Content here."
        tooltipLink="/here"
      />
      <Box
        sx={{
          width: "100%",
        }}
      >
        {data.tokenHolders.map((i: any, c: number) => {
          return (
            <Box
              sx={{ display: "flex", alignItems: "center", height: "5rem" }}
              key={`${c}-token-holder`}
            >
              <Box
                sx={{
                  width: "50%",
                  mr: ".5rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <WalletSelector
                  id="tokenomics"
                  key={c + "tokenomics"}
                  canDelete={data.tokenHolders.length > 0}
                  data={i}
                  mt="0"
                  number={c}
                  set={(j: any) => {
                    let temp = [...data.tokenHolders];
                    if (j === undefined) {
                      temp.splice(c, 1);
                    } else {
                      temp[c] = { ...temp[c], ...j };
                    }
                    props.setData({ ...props.data, tokenHolders: temp });
                  }}
                />
              </Box>
              <BalanceInput
                total={data.tokenAmount}
                remaining={data.tokenRemaining}
                balance={data.tokenHolders[c].balance}
                value={data.tokenHolders[c]}
                set={(newValue: any) => {
                  let temp = [...data.tokenHolders];
                  temp[c] = { ...newValue };
                  props.setData({ ...props.data, tokenHolders: temp });
                }}
              />
              <PercentageInput
                total={data.tokenAmount}
                remaining={data.tokenRemaining}
                percentage={data.tokenHolders[c].percentage}
                value={data.tokenHolders[c]}
                set={(newValue: any) => {
                  let temp = [...data.tokenHolders];
                  temp[c] = { ...newValue };
                  props.setData({ ...props.data, tokenHolders: temp });
                }}
              />
              {data.tokenHolders.length > 1 && (
                <DeleteIcon
                  style={{
                    fill: "red",
                    marginLeft: ".4rem",
                    cursor: "pointer",
                    width: "3%",
                  }}
                  onClick={() => {
                    let temp = [...data.tokenHolders];
                    temp.splice(c, 1);
                    props.setData({ ...data, tokenHolders: temp });
                  }}
                />
              )}
            </Box>
          );
        })}
      </Box>

      {data.tokenRemaining > 0 && (
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
                    {
                      alias: "",
                      address: "",
                      img: "",
                      balance: 0,
                      percentage: 0,
                    },
                  ]),
                },
              });
            }}
          >
            Add Another <AddIcon />
          </Button>
          <CsvLoader
            id="tokenomics-loader"
            handleFile={(imported: any) => {
              imported = imported.map((i: any, c: number) => {
                return {
                  ...i,
                  balance: percentageToBalance(
                    data.tokenAmount,
                    i.percentage / 100
                  ),
                  alias: `Wallet ${c}`,
                  img: "",
                };
              });
              let temp = [data.tokenHolders];
              globalContext.api.setData({
                ...globalContext.api.data,
                tokenomics: {
                  ...data,
                  tokenHolders: temp.concat(imported),
                },
              });
            }}
          />
        </Box>
      )}

      {data.tokenAmount > 0 && (
        <Box sx={{ width: "100%", mt: 2 }}>
          <Alert severity="warning" color="warning" sx={{ fontSize: ".8rem" }}>
            <AlertTitle sx={{ fontSize: ".9rem" }}>
              Tokens will be automatically sent to the treasury
            </AlertTitle>
            You have {data.tokenRemaining} unassigned {data.tokenName} tokens
            {data.tokenAmount > 0 &&
              ` (${percentage(data.tokenRemaining / data.tokenAmount)})`}
            . You can distribute them now by setting token configuration below
            or if you choose not to do it now, they will go to the treasury.
          </Alert>
        </Box>
      )}
    </Box>
  );
};

export default TokenHolders;
