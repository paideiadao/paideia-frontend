import CreateHeader from "@components/dao/proposal/Header";
import { Box, Button } from "@mui/material";
import * as React from "react";
import ChatIcon from "@mui/icons-material/Chat";
import { useRouter } from "next/router";
import Link from "next/link";
import { IFile } from "@lib/creation/Api";
import { IProposal } from "../proposal/create";
import GeneralInformation from "@components/dao/discussion/GeneralInformation";
import DiscussionApi from "@components/dao/discussion/DiscussionApi";
import DiscussionContext from "@components/dao/discussion/DiscussionContext";
import DiscussionImage from "@components/dao/discussion/DiscussionImage";
import DiscussionPlaceholder from "@public/dao/discussion-banner-placeholder.png";

export interface IDiscussion {
  name: string;
  category: string;
  image: IFile;
  references: IProposal[];
  content: string;
}

const CreateDiscussion: React.FC = () => {
  const [alert, setAlert] = React.useState({ show: false });
  const [value, setValue] = React.useState<IDiscussion>({
    name: "",
    category: "",
    image: {
      url: DiscussionPlaceholder.src,
      file: undefined,
    },
    references: [],
    content: "",
  });
  const router = useRouter();
  const { id } = router.query;
  const api = new DiscussionApi(alert, setAlert, value, setValue);

  return (
    <DiscussionContext.Provider value={{ api }}>
      <Box
        sx={{
          p: "1.5rem",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "70%" }}>
          <CreateHeader type="discussion" />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              border: "1px solid",
              borderColor: "divider.main",
              backgroundColor: "fileInput.outer",
              p: ".5rem",
              pl: "0",
              borderRadius: ".3rem",
            }}
          >
            <Box
              sx={{
                width: "10%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ChatIcon sx={{ fontSize: "2rem" }} color="primary" />
            </Box>
            <Box sx={{ width: "75%", fontSize: "1.3rem", fontWeight: 400 }}>
              Create a discussion
              <Box sx={{ fontSize: ".8rem", color: "text.light" }}>
                Get feedback from other users on a specific subject before
                creating a full proposal. Discussions can easily be upgraded to
                proposals at any time.
              </Box>
            </Box>
            <Box
              sx={{ display: "flex", width: "15%", justifyContent: "center" }}
            >
              <Link href={`/dao/${id}/create`}>
                <Button size="small">Change</Button>
              </Link>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              borderTop: "1px solid",
              borderTopColor: "divider.main",
              mt: "1rem",
              pt: "1rem",
            }}
          >
            <GeneralInformation />
            <DiscussionImage />
          </Box>
        </Box>
      </Box>
    </DiscussionContext.Provider>
  );
};

export default CreateDiscussion;
