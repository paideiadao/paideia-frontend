import { Box } from "@mui/material";
import React from "react";
import { GlobalContext } from "../../../lib/creation/Context";
import FileInput from "../../utilities/file";
import { Subheader, Subtitle } from "../utilities/HeaderComponents";
import LabeledSwitch from "../utilities/LabeledSwitch";

const Banner: React.FC = () => {
  let globalContext = React.useContext(GlobalContext);

  let data = globalContext.api.data.design;
  let setData = (data: any) => {
    globalContext.api.setData({
      ...globalContext.api.data,
      design: data,
    });
  };

//   const [url, setUrl] = React.useState<any>(data.logo.url);

//   function handleImage(e: any) {
//     let fileInput = e.currentTarget.files;
//     if (fileInput && fileInput[0]) {
//       if (fileInput.length != 1) return;
//       if (fileInput[0].size > 1000000) {
//         setData({
//           ...data,
//           logo: {
//             ...data.logo,
//             file: -1,
//           },
//         });

//         return;
//       }

//       var reader = new FileReader();
//       reader.onload = function (_e: any) {
//         setUrl(_e.target.result);
//       };

//       reader.readAsDataURL(fileInput[0]);
//       setData({ ...data, logo: { ...data.logo, file: fileInput[0] } });
//     }
//   }

//   React.useEffect(() => {
//     setData({ ...data, logo: { ...data.logo, url: url } });
//   }, [url]);
  return (
    <Box
      sx={{
        borderTop: "1px solid",
        borderTopColor: "divider.main",
        pt: "1rem",
        mt: "1rem",
      }}
    >
      <Box sx={{ width: "100%", mb: "1rem" }}>
        <Box sx={{ mb: ".5rem" }}>
          <Subheader title="Banner" />
        </Box>
        <Subtitle subtitle="You can choose to have a banner on your DAO homepage by simply enabling below and uploading a compatible file." />
      </Box>

      <LabeledSwitch
        title="Show banner"
        value={data.banner.show}
        onChange={() =>
          setData({
            ...data,
            banner: {
              ...data.banner,
              show: !data.banner.show,
            },
          })
        }
      />
      {
         data.banner.show && <FileInput
         file={data.banner.data === undefined ? "" : data.banner.data.file}
         fileUrl={data.banner.data === undefined ? "" : data.banner.data.url}
         handleImage={() => null}
         id="logo-img-upload"
       /> 
      }
    </Box>
  );
};

export default Banner;
