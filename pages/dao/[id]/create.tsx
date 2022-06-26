import * as React from "react";
import { paths, props } from "@lib/DaoPaths";
import { Box } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import BalanceIcon from "@mui/icons-material/Balance";
import ChatIcon from "@mui/icons-material/Chat";
import CreateHeader from "@components/dao/proposal/Header";

const Create: React.FC = () => {
  const router = useRouter();

  const { id } = router.query;
  return (
    <Box
      sx={{
        p: "1.5rem",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "70%" }}>
        {/* get last link here */}
        <CreateHeader />

        <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
          <Link
            href={
              id === undefined
                ? "/dao/proposals/create"
                : `/dao/${id}/proposal/create`
            }
          >
            <Box
              sx={{
                cursor: "pointer",
                borderRadius: ".5rem",
                border: "1px solid",
                p: ".5rem",
                backgroundColor: "fileInput.outer",
                borderColor: "divider.main",
                width: "50%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                mr: "1rem",
                ":hover": {
                  borderColor: "primary.main",
                },
              }}
            >
              <BalanceIcon sx={{ fontSize: "2rem", opacity: ".6" }} />
              <Box
                sx={{
                  textAlign: "center",
                  fontSize: "1.3rem",
                  fontWeight: 350,
                }}
              >
                Create a proposal
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                  fontSize: ".8rem",
                  color: "text.light",
                }}
              >
                Provide users with different options to vote on, and the
                proposal will either be approved or declined. Keep in mind, once
                you create a proposal, it can't be edited or deleted.
              </Box>
            </Box>
          </Link>
          <Link href={`/dao/${id}/discussion/create`}>
            <Box
              sx={{
                cursor: "pointer",
                borderRadius: ".5rem",
                border: "1px solid",
                p: ".5rem",
                backgroundColor: "fileInput.outer",
                borderColor: "divider.main",
                width: "50%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                ":hover": {
                  borderColor: "primary.main",
                },
              }}
            >
              <ChatIcon sx={{ fontSize: "2rem", opacity: ".6" }} />
              <Box
                sx={{
                  textAlign: "center",
                  fontSize: "1.3rem",
                  fontWeight: 350,
                }}
              >
                Create a discussion
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                  fontSize: ".8rem",
                  color: "text.light",
                }}
              >
                Get feedback from others on a specific subject before creating a
                full proposal. Discussions can easily be upgraded to proposals
                at any time.
              </Box>
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

// export const getStaticPaths = paths;
// export const getStaticProps = props;

export default Create;
