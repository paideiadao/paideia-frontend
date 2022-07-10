import WalletSelector from "@components/creation/governance/WalletSelector";
import BalanceInput from "@components/creation/utilities/BalanceInput";
import PercentageInput from "@components/creation/utilities/PercentageInput";
import { ITokenHolder } from "@lib/creation/CreationApi";
import { Box, Button } from "@mui/material";
import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import FileUploadIcon from "@mui/icons-material/FileUpload";

interface IMultiTokenHolders {
  tokenHolders: ITokenHolder[];
  treasuryAmount: number;
  set: (tokenHolders: ITokenHolder[]) => void;
}

const MultiTokenHolders: React.FC<IMultiTokenHolders> = (props) => {
  return (
    <>
      {props.tokenHolders.map((i: ITokenHolder, c: number) => {
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
                id={"multi-token-holder" + c}
                key={c + "multi-token-holder"}
                canDelete={props.tokenHolders.length > 0}
                data={i}
                mt="0"
                number={c}
                set={(j: any) => {
                  let temp = [...props.tokenHolders];
                  if (j === undefined) {
                    temp.splice(c, 1);
                  } else {
                    temp[c] = { ...temp[c], ...j };
                  }
                  props.set(temp);
                }}
              />
            </Box>
            <BalanceInput
              total={props.treasuryAmount}
              remaining={
                props.treasuryAmount -
                props.tokenHolders
                  .map((i: ITokenHolder) => i.balance)
                  .reduce((partialSum, a) => partialSum + a, 0)
              }
              balance={i.balance}
              value={i}
              set={(newValue: any) => {
                let temp = [...props.tokenHolders];
                temp[c] = { ...newValue };
                props.set(temp);
              }}
            />
            <PercentageInput
              total={props.treasuryAmount}
              remaining={
                props.treasuryAmount -
                props.tokenHolders
                  .map((i: ITokenHolder) => i.balance)
                  .reduce((partialSum, a) => partialSum + a, 0)
              }
              percentage={i.percentage}
              value={i}
              set={(newValue: any) => {
                let temp = [...props.tokenHolders];
                temp[c] = { ...newValue };
                props.set(temp);
              }}
            />
            {props.tokenHolders.length > 1 && (
              <DeleteIcon
                style={{
                  fill: "red",
                  marginLeft: ".4rem",
                  cursor: "pointer",
                  width: "3%",
                }}
                onClick={() => {
                  let temp = [...props.tokenHolders];
                  temp.splice(c, 1);
                  props.set(temp);
                }}
              />
            )}
          </Box>
        );
      })}
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
          size="small"
          sx={{ mr: 2 }}
          onClick={() => {
            let temp = [...props.tokenHolders];
            props.set(
              temp.concat([
                { alias: "", address: "", img: "", balance: 0, percentage: 0 },
              ])
            );
          }}
        >
          Add Another <AddIcon />
        </Button>
        <Button variant="text" size="small">
          Add from file <FileUploadIcon />
        </Button>
      </Box>
    </>
  );
};

export default MultiTokenHolders;
