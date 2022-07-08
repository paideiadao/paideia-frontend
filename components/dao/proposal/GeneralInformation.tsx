import {
  Header,
  LearnMore,
} from "@components/creation/utilities/HeaderComponents";
import ProposalContext, {
  IProposalContext,
} from "@lib/dao/proposal/ProposalContext";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import * as React from "react";

const GeneralInformation: React.FC = () => {
  const context = React.useContext<IProposalContext>(ProposalContext);
  const handleChange = (event: SelectChangeEvent) => {
    context.api.setValue({
      ...context.api.value,
      category: event.target.value,
    });
  };
  return (
    <>
      <Header title="Proposal general information" />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          mt: "1rem",
        }}
      >
        <TextField
          value={context.api.value.name}
          label="Proposal name"
          sx={{ width: "50%", mr: "1rem" }}
        />
        <FormControl sx={{ width: "50%" }}>
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={context.api.value.category}
            label="Category"
            onChange={handleChange}
          >
            <MenuItem value="Category 1">Category 1</MenuItem>
            <MenuItem value="Category 2">Category 2</MenuItem>
            <MenuItem value="Category 3">Category 3</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default GeneralInformation;
