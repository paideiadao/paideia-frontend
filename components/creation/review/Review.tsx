import { Alert, Box, Button, AlertTitle, Modal } from "@mui/material";
import * as React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { GlobalContext } from "../../../lib/creation/Context";
import { Header } from "../utilities/HeaderComponents";
import ReviewDrawer from "./ReviewDrawer";
import { modalBackground } from "../../utilities/modalBackground";

const Review: React.FC = () => {
  const globalContext = React.useContext(GlobalContext);
  let data = globalContext.api.data;
  const [publish, setPublish] = React.useState<boolean>(false);
  const [draft, setDraft] = React.useState<boolean>(false);
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
      <Box
        sx={{
          width: "100%",
          mt: "1rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Button
          sx={{ width: "49%", mr: ".5rem" }}
          variant="outlined"
          onClick={() => setDraft(true)}
        >
          Publish as a draft
        </Button>
        <Button
          sx={{ width: "49%", ml: ".5rem" }}
          variant="contained"
          onClick={() => setPublish(true)}
        >
          Publish DAO
        </Button>
      </Box>
      <Box sx={{ mt: "1rem" }}>
        <Alert severity="warning" color="warning" sx={{ fontSize: ".8rem" }}>
          <AlertTitle sx={{ fontSize: ".9rem" }}>Draft publishing</AlertTitle>
          Publishing as a draft allows you to see the DAO configuation before
          committing to it. You will be able to change any configuration (except
          name and URL). When you publish as a draft the users you whitelisted
          won't be notified and nothing will happen until you are ready to do
          the FINAL publish.
        </Alert>
      </Box>
      <Modal
        open={publish}
        onClose={() => setPublish(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...modalBackground, width: "35rem" }}>
          <Box sx={{ fontSize: "1.1rem", fontWeight: 450 }}>
            You are about to publish the final version of your DAO
          </Box>
          <Box sx={{ mt: "1rem", fontSize: ".9rem" }}>
            Once you publish the DAO any configuration change would have to be
            done through the proposal system. Also, keep in mind that tokens
            will be minted and distributed instantly as your Tokenomics
            configuration.
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              mt: "1rem",
            }}
          >
            <Box sx={{ ml: "auto" }}>
              <Button sx={{ mr: "1rem" }} onClick={() => setPublish(false)}>
                Cancel
              </Button>
              <Button onClick={() => console.log("publish dao here.")}>
                Publish DAO
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
      <Modal
        open={draft}
        onClose={() => setDraft(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...modalBackground, width: "35rem" }}>
          <Box sx={{ fontSize: "1.1rem", fontWeight: 450 }}>
            You are about to publish your DAO as a draft
          </Box>
          <Box sx={{ mt: "1rem", fontSize: ".9rem" }}>
            Please keep in mind that if you continue you won't be able to change
            either your DAO's name or it's URL. The rest of the properties can
            be changed though. Also, your tokens won't be minted or distributed
            until you publish the final version.
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              mt: "1rem",
            }}
          >
            <Box sx={{ ml: "auto" }}>
              <Button sx={{ mr: "1rem" }} onClick={() => setDraft(false)}>
                Cancel
              </Button>
              <Button onClick={() => console.log("publish dao draft here.")}>
                Publish DAO AS A DRAFT
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Review;
