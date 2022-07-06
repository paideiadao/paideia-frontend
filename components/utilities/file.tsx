import { Avatar, Box, Button, Paper } from "@mui/material";
import { bytesToSize } from "../../lib/creation/Utilities";
import ImagePlaceholder from "../../public/images/image-placeholder.png";
import { deviceStruct } from "./Style";

const FileInput: React.FC<{
  file: any;
  handleImage: Function;
  id: string;
  fileUrl: string;
  banner?: boolean;
}> = (props) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: "1rem",
        backgroundColor: "fileInput.outer",
        border: "1px solid",
        borderColor: "border.main",
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
          src={props.file === -1 ? "" : props.fileUrl}
          sx={{
            height: deviceStruct("4rem", "4rem", "4.5rem", "5rem", "5rem"),
            width: deviceStruct("4rem", "4rem", "4.5rem", "5rem", "5rem"),
            ml: deviceStruct(".5rem", "5rem", "2rem", "3rem", "3rem"),
            fontSize: "2rem",
            mr: "1rem",
          }}
        >
          <img src={ImagePlaceholder.src} />
        </Avatar>
        <Box sx={{ pr: ".5rem" }}>
          <input
            type="file"
            id={props.id}
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => props.handleImage(e)}
          />
          <Box
            sx={{
              color: "primary.text",
              fontSize: deviceStruct(".8rem", ".8rem", ".9rem", "1rem", "1rem"),
            }}
          >
            {props.file === undefined || props.file === -1
              ? "To replace, drop your image here or "
              : props.file.name}
            {(props.file === undefined || props.file === -1) && (
              <Box
                sx={{
                  color: "primary.main",
                  display: "inline",
                  cursor: "pointer",
                }}
                onClick={() => {
                  const fileInput = document.getElementById(props.id);
                  fileInput.click();
                }}
              >
                browse
              </Box>
            )}
          </Box>
          <Box
            sx={{
              color: "text.light",
              fontSize: deviceStruct(
                ".7rem",
                ".7rem",
                ".8rem",
                ".9rem",
                ".9rem"
              ),
            }}
          >
            {props.file === undefined || props.file === -1
              ? "File Max size 1Mb. Dimensions 48px by 48px."
              : bytesToSize(props.file.size)}
          </Box>
          {props.file === -1 && (
            <Box sx={{ color: "red", fontWeight: 500 }}>
              File size too large.
            </Box>
          )}
          {props.file !== undefined && props.file !== -1 && (
            <Button
              variant="contained"
              size="small"
              sx={{ mt: ".5rem" }}
              onClick={() => {
                const fileInput = document.getElementById(props.id);
                fileInput.click();
              }}
            >
              Replace
            </Button>
          )}
        </Box>
      </Paper>
    </Paper>
  );
};

export default FileInput;
