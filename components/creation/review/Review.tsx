import { Box, Button } from "@mui/material";
import * as React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { GlobalContext } from "../../../lib/creation/Context";
import { Header } from "../utilities/HeaderComponents";
import ReviewDrawer from "./ReviewDrawer";

const Review: React.FC = () => {
  const globalContext = React.useContext(GlobalContext);
  let data = globalContext.api.data;
  return (
    <Box
      sx={{
        width: "70%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        color: "primary.text",
      }}
    >
      <Box>
        <Button
          onClick={() =>
            globalContext.api.setData({ ...data, navStage: data.navStage - 1 })
          }
          size="small"
        >
          <ArrowBackIcon sx={{ mr: ".5rem", fontSize: "1rem" }} />
          Back
        </Button>
      </Box>
      <Header
        title="Review"
        large={true}
        subtitle="Check once more that your DAO configuration is correct. Remember, you can always publish it as a draft and review it later on."
      />
      <ReviewDrawer />
    </Box>
  );
};

export default Review;
