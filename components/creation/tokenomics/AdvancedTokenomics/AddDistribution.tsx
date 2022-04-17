import { Box, InputAdornment, TextField } from "@mui/material";
import * as React from "react";
import { ITokenomics } from "../../../../lib/creation/Api";
import { IData } from "../../../../lib/utilities";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Treasury from "./Treasury";
import CancelIcon from "@mui/icons-material/Cancel";
import { Header } from "../../utilities/HeaderComponents";

const renderDisplay = (
  display: string,
  props: {
    data: IData<ITokenomics>;
    close: Function;
  }
) => {
  switch (display) {
    case "Treasury":
      return <Treasury {...props} />;
  }
};

const AddDistribution: React.FC<{
  data: IData<ITokenomics>;
  close: Function;
}> = (props) => {
  const [display, setDisplay] = React.useState<string>(undefined);
  const distributionTypes = [
    { label: "Treasury" },
    { label: "Team & Partners" },
    { label: "Private Round" },
    { label: "Public Round" },
    { label: "Airdrop" },
    { label: "Liquidity" },
    { label: "Staking" },
  ];

  return (
    <Box
      sx={{
        borderRadius: ".3rem",
        backgroundColor: "fileInput.outer",
        border: "1px solid",
        borderColor: "fileInput.border",
        display: "flex",
        flexWrap: "wrap",
        mt: ".5rem",
        mb: ".5rem",
        width: "100%",
        p: "1rem",
        pt: ".5rem",
        position: "relative",
        justifyContent: "center",
      }}
    >
      {display === undefined ? (
        <>
          <CancelIcon
            sx={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              cursor: "pointer",
            }}
            color="error"
            onClick={() => props.close()}
          />
          <Box
            sx={{
              width: "100%",
              borderBottom: "1px solid",
              borderColor: "divider.main",
              mb: "1rem",
            }}
          >
            <Header
              title="Add Distribution"
              subtitle="Select what type of distribution you want to add from the list below."
            />
          </Box>
          <Box>
            {distributionTypes.map((i: any) => {
              return (
                <TextField
                  value={i.label}
                  sx={{
                    width: "32.3%",
                    mr: "1%",
                    mb: ".5rem",
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                  InputProps={{
                    style: { cursor: "pointer" },
                    readOnly: true,
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        onClick={() => setDisplay(i.label)}
                      >
                        <NavigateNextIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
              );
            })}
          </Box>
        </>
      ) : (
        renderDisplay(display, props)
      )}
    </Box>
  );
};

export default AddDistribution;
