import { Avatar, Box, Button, Paper } from "@mui/material";
import * as React from "react";
import { ITokenomics } from "../../../lib/creation/Api";
import { bytesToSize } from "../../../lib/creation/Utilities";
import { IData } from "../../../lib/utilities";
import { LearnMore } from "../utilities/HeaderComponents";

const TokenSymbol: React.FC<IData<ITokenomics>> = (props) => {
  const [file, setFileData] = React.useState<any>(undefined);

  function handleImage(e: any) {
    let fileInput = e.currentTarget.files;
    // where to store the images??? will be helpful to create the apis for future use & maintainabiliity.
    if (fileInput && fileInput[0]) {
        if (fileInput.length != 1) return;
        if (fileInput[0].size > 1000000) {
            setFileData(-1);
            props.setData({ ...props.data, tokenImage: undefined });

            return;
        }
        
      var reader = new FileReader();

      reader.onload = function (_e: any) {
        setFileData(_e.target.result);
      };

      reader.readAsDataURL(fileInput[0]);

        props.setData({ ...props.data, tokenImage: fileInput[0] });

    }
    
  }
  return (
    <>
      <LearnMore title="Token symbol" small={true} />
      <Paper
        elevation={0}
        sx={{
          p: "1rem",
          backgroundColor: "fileInput.outer",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: ".5rem",
        }}
      >
        <Paper
          elevation={0}
          sx={{
            backgroundColor: "fileInput.main",
            border: "1px dashed",
            borderColor: "fileInput.border",
            height: "8rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar
            src={file}
            sx={{
              height: "5rem",
              width: "5rem",
              ml: "3rem",
              fontSize: "2rem",
              mr: "1rem",
            }}
          >
            SP
          </Avatar>
          <Box>
            <input
              type="file"
              id="token-image-upload"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) => handleImage(e)}
            />
            <Box sx={{ color: "primary.text", fontSize: "1rem" }}>
              {file === undefined || file === -1? 'To replace, drop your image here or ' :props.data.tokenImage.name}
              {file === undefined || file === -1 && <Box
                sx={{
                  color: "primary.main",
                  display: "inline",
                  cursor: "pointer",
                }}
                onClick={() => {
                  const fileInput =
                    document.getElementById("token-image-upload");
                  fileInput.click();
                }}
              >
                browse
              </Box>}
            </Box>
            <Box sx={{ color: "primary.lightText" }}>
              {file === undefined || file === -1 ? 'File Max size 1Mb. Dimensions 48px by 48px.' : bytesToSize(props.data.tokenImage.size)}
            </Box>
            {file === -1 && <Box sx={{ color: "red" }}>
                File size too large.
            </Box>}
            {file !== undefined && file !== -1 && <Button variant='contained' sx={{mt: '.5rem'}} onClick={() => {
                  const fileInput =
                    document.getElementById("token-image-upload");
                  fileInput.click();
                }}>Replace</Button>}
          </Box>
        </Paper>
      </Paper>
    </>
  );
};

export default TokenSymbol;
