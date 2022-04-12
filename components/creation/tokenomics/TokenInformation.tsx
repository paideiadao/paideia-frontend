import { Box, Button, ButtonGroup, TextField } from "@mui/material";
import * as React from "react";
import { ICreationData, ITokenomics } from "../../../lib/creation/Api";
import { IData } from "../../../lib/utilities";
import { Header, LearnMore, Subheader } from "../utilities/HeaderComponents";

const TokenSymbol: React.FC<IData<ITokenomics>> = (props) => {
  return (
    <>
      <LearnMore title="Token symbol" />
    </>
  );
};

const TokenInformation: React.FC<IData<ITokenomics>> = (props) => {
  const [tokenType, setTokenType] = React.useState<string>("create");
  let data = props.data;
  return (
    <Box>
      <Subheader title="Token information" />
      <ButtonGroup variant="outlined" sx={{ width: "100%" }}>
        <Button
          sx={{
            width: "50%",
            fontSize: ".8rem",
            backgroundColor:
              tokenType === "create" ? "primary.selectedButton" : "",
          }}
          onClick={() => setTokenType("create")}
        >
          Create a new token
        </Button>
        <Button
          sx={{
            width: "50%",
            fontSize: ".8rem",
            backgroundColor:
              tokenType === "existing" ? "primary.selectedButton" : "",
          }}
          onClick={() => setTokenType("existing")}
        >
          Use an existing one
        </Button>
      </ButtonGroup>
      <TextField
        value={data.tokenName}
        sx={{ width: "50%", mt: "1rem", pr: ".5rem" }}
        label="Token name"
        onChange={(e) =>
          props.setData({
            ...data,
            tokenName: e.target.value,
          })
        }
      />
      <TextField
        {...{ ...(data.tokenTicker.length === 3 ? null : { error: true }) }}
        value={data.tokenTicker}
        sx={{ width: "25%", mt: "1rem", pr: ".5rem" }}
        label="Token ticker"
        onChange={(e) =>
          props.setData({
            ...data,
            tokenTicker: e.target.value,
          })
        }
      />
      <TextField
        value={data.tokenAmount}
        sx={{ width: "25%", mt: "1rem", pr: ".5rem" }}
        label="Token amount"
        type="number"
        onChange={(e) =>
          props.setData({
            ...data,
            tokenAmount: e.target.value,
          })
        }
      />
    </Box>
  );
};

export default TokenInformation;
