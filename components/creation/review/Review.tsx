import { Alert, Box, Button, AlertTitle } from "@mui/material";
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
      <Box sx={{width: '100%', mt: '1rem', display: 'flex', alignItems: 'center'}}>
          <Button sx={{width: "49%", mr: '.5rem'}} variant='outlined'>
              Publish as a draft
          </Button>
          <Button sx={{width: "49%", ml: '.5rem'}} variant='contained'>
              Publish DAO
          </Button>
      </Box>
      <Box sx={{mt: '1rem'}}>
        <Alert severity="warning" color="warning" sx={{ fontSize: ".8rem" }}>
            <AlertTitle sx={{ fontSize: ".9rem" }}>
                Draft publishing
            </AlertTitle>
            Publishing as a draft allows you to see the DAO configuation before committing to it. You will be able to change any configuration (except name and URL). When you publish as a draft the users you whitelisted won't be notified and nothing will happen until you are ready to do the FINAL publish.
            </Alert>
      </Box>
    </Box>
  );
};

export default Review;
