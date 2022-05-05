import { Avatar, Box, Button, Paper } from "@mui/material";
import * as React from "react";
import { ITokenomics } from "../../../lib/creation/Api";
import { bytesToSize } from "../../../lib/creation/Utilities";
import { IData } from "../../../lib/utilities";
import FileInput from "../../utilities/file";
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
      <FileInput
        file={file}
        handleImage={handleImage}
        size={
          props.data.tokenImage === undefined ? 0 : props.data.tokenImage.size
        }
        id="token-image-upload"
        name={
          props.data.tokenImage === undefined ? "" : props.data.tokenImage.name
        }
      />
    </>
  );
};

export default TokenSymbol;
