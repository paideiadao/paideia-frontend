import { Box, Button, ButtonGroup, TextField } from "@mui/material";
import * as React from "react";
import { ICreationData, ITokenomics } from "@lib/creation/Interfaces";
import { CreationContext } from "../../../lib/creation/Context";
import { IData } from "@lib/Interfaces";
import { Header, LearnMore, Subheader } from "../utilities/HeaderComponents";
import { deviceStruct, deviceWrapper } from "@components/utilities/Style";

const NewToken: React.FC<IData<ITokenomics>> = (props) => {
  let data = props.data;
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexWrap: deviceWrapper("wrap", "nowrap"),
      }}
    >
      <TextField
        value={data.tokenName}
        sx={{
          width: deviceStruct("100%", "100%", "50%", "50%", "50%"),
          mt: "1rem",
          pr: ".5rem",
        }}
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
        sx={{
          width: deviceStruct("50%", "50%", "25%", "25%", "25%"),
          mt: "1rem",
          pr: ".5rem",
        }}
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
        sx={{
          width: deviceStruct("50%", "50%", "25%", "25%", "25%"),
          mt: "1rem",
          pr: ".5rem",
        }}
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
        <Box sx={{ width: "50%" }}>
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
  const creationContext = React.useContext(CreationContext);

  React.useEffect(() => {
    creationContext.api.setData({
      ...creationContext.api.data,
      tokenomics: {
        ...creationContext.api.data.tokenomics,
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
          <Box
            sx={{
              display: deviceStruct("none", "none", "block", "block", "block"),
            }}
          >
            Create a new token
          </Box>
          <Box
            sx={{
              display: deviceStruct("block", "block", "none", "none", "none"),
            }}
          >
            New token
          </Box>
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
          <Box
            sx={{
              display: deviceStruct("none", "none", "block", "block", "block"),
            }}
          >
            Use an existing one
          </Box>
          <Box
            sx={{
              display: deviceStruct("block", "block", "none", "none", "none"),
            }}
          >
            Existing One
          </Box>
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
