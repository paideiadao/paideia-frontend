import * as React from "react";
import { AlertTitle, Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import { GlobalContext } from "../../../lib/creation/Context";

const BasicInformation: React.FC = () => {
  let globalContext = React.useContext(GlobalContext);
  let data = globalContext.api.data.basicInformation;

  React.useEffect(() => {
    let clean = data.dao_name.toLowerCase().replaceAll(" ", "");
    console.log(clean);
    globalContext.api.setData({
      ...globalContext.api.data,
      basicInformation: {
        ...data,
        dao_url: clean === "" ? clean : clean + ".paideia.im",
      },
    });
  }, [data.dao_name]);

  return (
    <Box
      sx={{
        width: "65%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        color: "primary.text",
      }}
    >
      <Box sx={{ textAlign: "left", width: "100%", fontSize: "1.2rem" }}>
        Basic Information
        <Box
          sx={{ width: "100%", color: "primary.lightText", fontSize: ".8rem" }}
        >
          Here you will pick your DAO's name, this will determine your DAO's URL
          as shown below and you can also write a short description of what your
          DAO is about.
        </Box>
      </Box>
      <Box sx={{ width: "100%", display: "flex", alignItems: "center", mt: 2 }}>
        <Box sx={{ width: "50%", mr: 2 }}>
          <TextField
            label="DAO Name"
            sx={{ width: "100%" }}
            value={data.dao_name}
            onChange={(e) =>
              globalContext.api.setData({
                ...globalContext.api.data,
                basicInformation: {
                  ...data,
                  dao_name: e.target.value,
                },
              })
            }
          />
        </Box>
        <Box sx={{ width: "50%" }}>
          <TextField
            label="DAO URL"
            sx={{ width: "100%" }}
            value={data.dao_url}
            onChange={(e) =>
              globalContext.api.setData({
                ...globalContext.api.data,
                basicInformation: {
                  ...data,
                  dao_url: e.target.value,
                },
              })
            }
          />
        </Box>
      </Box>

      <Box sx={{ width: "100%", mt: 2 }}>
        <Alert severity="warning" color="warning" sx={{ fontSize: ".8rem" }}>
          <AlertTitle sx={{ fontSize: ".9rem" }}>
            You won't be able to change this once published
          </AlertTitle>
          The name and URL of your DAO can't be changed even if you publish your
          DAO as a draft. You will be able to review everything later before
          fully committing though.
        </Alert>
      </Box>
      <Box sx={{ width: "100%", mt: 2 }}>
        <TextField
          label="DAO short description"
          inputProps={{
            maxLength: 250,
          }}
          multiline
          value={data.short_description}
          onChange={(e) =>
            globalContext.api.setData({
              ...globalContext.api.data,
              basicInformation: {
                ...data,
                short_description: e.target.value,
              },
            })
          }
          rows={5}
          sx={{ width: "100%" }}
          FormHelperTextProps={{ sx: { textAlign: "right" } }}
          helperText={`${data.short_description.length}/250`}
        />
      </Box>
    </Box>
  );
};

export default BasicInformation;
