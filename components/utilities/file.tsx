import { Avatar, Box, Button, Paper } from "@mui/material"
import { bytesToSize } from "../../lib/creation/Utilities";

const FileInput: React.FC<{file: any, handleImage: Function, id: string, fileUrl: string}> = (props) =>  {
    console.log(props)
    return       <Paper
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
        src={props.fileUrl}
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
          id={props.id}
          accept="image/*"
          style={{ display: "none" }}
          onChange={(e) => props.handleImage(e)}
        />
        <Box sx={{ color: "primary.text", fontSize: "1rem" }}>
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
                const fileInput =
                  document.getElementById(props.id);
                fileInput.click();
              }}
            >
              browse
            </Box>
          )}
        </Box>
        <Box sx={{ color: "primary.lightText" }}>
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
            sx={{ mt: ".5rem" }}
            onClick={() => {
              const fileInput =
                document.getElementById(props.id);
              fileInput.click();
            }}
          >
            Replace
          </Button>
        )}
      </Box>
    </Paper>
  </Paper>
}

export default FileInput;