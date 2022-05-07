import { Box, Button, ButtonGroup, TextField } from "@mui/material";
import * as React from "react";
import { ICreationData, ITokenomics } from "../../../lib/creation/Api";
import { GlobalContext } from "../../../lib/creation/Context";
import { IData } from "../../../lib/utilities";
import { Header, LearnMore, Subheader } from "../utilities/HeaderComponents";

const NewToken: React.FC<IData<ITokenomics>> = (props) => {
  let data = props.data;
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
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
        value={data.tokenAmount === 0 ? "" : data.tokenAmount}
        sx={{ width: "25%", mt: "1rem", pr: ".5rem" }}
        label="Token amount"
        type="number"
        onChange={(e) =>
          props.setData({
            ...data,
            tokenAmount: e.target.value === "" ? 0 : parseInt(e.target.value),
          })
        }
      />
    </Box>
  );
};

const ExistingToken: React.FC<IData<ITokenomics>> = (props) => {
  let data = props.data;
  return (
    <>
      <Box sx={{ width: "100%", mt: "1rem", mb: "1rem" }}>
        <TextField
          value={data.tokenId}
          sx={{ width: "100%" }}
          label="Token ID"
          onChange={(e) =>
            props.setData({
              ...data,
              tokenId: e.target.value,
            })
          }
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
        <Box sx={{ width: "50%", mr: ".5rem" }}>
          <TextField
            value={data.tokenName}
            sx={{ width: "100%" }}
            label="Token name"
            onChange={(e) =>
              props.setData({
                ...data,
                tokenName: e.target.value,
              })
            }
          />
        </Box>
        <Box sx={{ width: "50%", ml: ".5rem" }}>
          <TextField
            value={data.tokenTicker}
            sx={{ width: "100%" }}
            label="Token ticker"
            onChange={(e) =>
              props.setData({
                ...data,
                tokenTicker: e.target.value,
              })
            }
          />
        </Box>
      </Box>
    </>
  );
};

const TokenInformation: React.FC<IData<ITokenomics>> = (props) => {
  const [tokenType, setTokenType] = React.useState<string>("create");
  const globalContext = React.useContext(GlobalContext);

  React.useEffect(() => {
    globalContext.api.setData({
      ...globalContext.api.data,
      tokenomics: {
        ...globalContext.api.data.tokenomics,
        type: tokenType,
      },
    });
  }, [tokenType]);

  return (
    <Box>
      <Subheader title="Token information" />
      <ButtonGroup variant="outlined" sx={{ width: "100%", mt: ".5rem" }}>
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
      {tokenType === "create" ? (
        <NewToken {...props} />
      ) : (
        <ExistingToken {...props} />
      )}
    </Box>
  );
};

export default TokenInformation;
