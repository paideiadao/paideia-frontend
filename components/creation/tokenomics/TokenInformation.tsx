import { Box, Button, ButtonGroup } from "@mui/material";
import * as React from "react";
import { Header, Subheader } from "../utilities/HeaderComponents";

const TokenInformation: React.FC = () => {
  const [tokenType, setTokenType] = React.useState<string>("create");
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
    </Box>
  );
};

export default TokenInformation;
