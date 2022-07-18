import CreateHeader from "@components/dao/proposal/Header";
import { Box, Button, Modal } from "@mui/material";
import * as React from "react";
import ChatIcon from "@mui/icons-material/Chat";
import { useRouter } from "next/router";
import Link from "next/link";
import { IFile } from "@lib/creation/CreationApi";
import { IProposal } from "../proposal/create";
import GeneralInformation from "@components/dao/discussion/GeneralInformation";
import DiscussionApi from "@lib/dao/discussion/DiscussionApi";
import DiscussionContext from "@lib/dao/discussion/DiscussionContext";
import DiscussionImage from "@components/dao/discussion/DiscussionImage";
import DiscussionPlaceholder from "@public/dao/discussion-banner-placeholder.png";
import Reference from "@components/dao/discussion/Reference";
import Content from "@components/dao/discussion/Content";
import { modalBackground } from "@components/utilities/modalBackground";
import LoadingButton from "@mui/lab/LoadingButton";
import PublishIcon from "@mui/icons-material/Publish";
import { IComment } from "@components/dao/discussion/Comments";
import Layout from "@components/dao/Layout";
import { deviceWrapper } from "@components/utilities/Style";

export interface IDiscussion {
  name: string;
  category: string;
  image?: IFile;
  references: IProposal[];
  content: string;
  date?: Date;
  likes?: number;
  dislikes?: number;
  followed?: boolean;
  tags?: any[];
  userSide?: number;
  comments?: IComment[];
  attachments?: IFile[];
}

const CreateDiscussion: React.FC = () => {
  const [alert, setAlert] = React.useState({ show: false });
  const [value, setValue] = React.useState<IDiscussion>({
    name: "",
    category: "",
    image: {
      url: 'https://picsum.photos/1200/300',
      file: undefined,
    },
    references: [],
    content: "",
  });
  const [publish, setPublish] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  const router = useRouter();
  const { id } = router.query;
  const api = new DiscussionApi(alert, setAlert, value, setValue);

  return (
    <DiscussionContext.Provider value={{ api }}>
      <Layout>
        <CreateHeader type="discussion" />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            border: "1px solid",
            borderColor: "primary.main",
            backgroundColor: "fileInput.main",
            pl: "0",
            borderRadius: ".3rem",
            pt: ".75rem",
            pb: deviceWrapper("0", ".75rem"),
            flexDirection: deviceWrapper("column", "row"),
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
          <Box
            sx={{
              width: "75%",
              fontSize: "1.3rem",
              fontWeight: 400,
              textAlign: deviceWrapper("center", "left"),
            }}
          >
            Create a discussion
            <Box sx={{ fontSize: ".8rem", color: "text.secondary" }}>
              Get feedback from other users on a specific subject before
              creating a full proposal. Discussions can easily be upgraded to
              proposals at any time.
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: deviceWrapper("100%", "15%"),
              justifyContent: "center",
            }}
          >
            <Link href={id === undefined ? "/dao/create" : `/dao/${id}/create`}>
              <Button
                size="small"
                sx={{
                  mt: deviceWrapper(".5rem", "0"),
                  borderTop: deviceWrapper("1px solid", "0"),
                  borderColor: "border.main",
                  width: deviceWrapper("100%", "15%"),
                  pt: deviceWrapper(".5rem", "0"),
                  pb: deviceWrapper(".5rem", "0"),
                  borderTopLeftRadius: deviceWrapper("0", ".5rem"),
                  borderTopRightRadius: deviceWrapper("0", ".5rem"),
                }}
              >
                Change
              </Button>
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            borderTop: "1px solid",
            borderTopColor: "border.main",
            mt: "1rem",
            pt: "1rem",
          }}
        >
          <GeneralInformation />
          <DiscussionImage />
          <Reference />
          <Content />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              mt: "1rem",
              mb: ".5rem",
            }}
          >
            <Button variant="outlined" sx={{ width: "50%", mr: "1rem" }}>
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{ width: "50%" }}
              onClick={() => {
                console.log(value, "call api here...");
                setPublish(true);
              }}
            >
              Publish
            </Button>
          </Box>
        </Box>

        <Modal
          open={publish}
          onClose={() => setPublish(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{ ...modalBackground, width: "35rem" }}>
            <Box sx={{ fontSize: "1.1rem", fontWeight: 450 }}>
              You are about to publish a discussion
            </Box>
            <Box sx={{ mt: "1rem", fontSize: ".9rem" }}>
              Once published, a discussion can't be edited or deleted. However,
              a discussion can be upgraded to a proposal at any time.
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
                {!loading && (
                  <Button sx={{ mr: "1rem" }} onClick={() => setPublish(false)}>
                    Cancel
                  </Button>
                )}
                <LoadingButton
                  onClick={() => (loading ? null : setLoading(true))}
                  startIcon={<PublishIcon />}
                  loading={loading}
                  loadingPosition="start"
                  variant="contained"
                >
                  Publish
                </LoadingButton>
              </Box>
            </Box>
          </Box>
        </Modal>
      </Layout>
    </DiscussionContext.Provider>
  );
};

export default CreateDiscussion;
