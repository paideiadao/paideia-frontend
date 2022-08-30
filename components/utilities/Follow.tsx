import { Button } from "@mui/material";
import * as React from "react";
import { deviceWrapper } from "./Style";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useDidMountEffect from "./hooks";
import { GlobalContext, IGlobalContext } from "@lib/AppContext";
import FollowApi from "@lib/FollowApi";

interface IFollow {
  followed: boolean;
  putUrl: string;
}

const Follow: React.FC<IFollow> = (props) => {
  const [followed, setFollowed] = React.useState<boolean>(props.followed);
  const globalContext = React.useContext<IGlobalContext>(GlobalContext);
  const api = new FollowApi(globalContext.api, props.putUrl);
  useDidMountEffect(() => {
    api.follow(followed ? "follow" : "unfollow");
  }, [followed]);

  return (
    <Button
      onClick={() => setFollowed(!followed)}
      sx={{
        color: followed ? "error.light" : "text.secondary",
        borderColor: followed ? "error.light" : "text.secondary",
        ":hover": {
          borderColor: "error.light",
          color: "error.light",
        },
        // display: deviceWrapper("none", "flex"),
      }}
      variant="outlined"
      size="small"
      startIcon={followed ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    >
      Follow{followed && "ed"}
    </Button>
  );
};

export default Follow;
