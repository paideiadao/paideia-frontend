import {
  Avatar,
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import * as React from "react";
import nautilus from "@public/icons/nautilus.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ClearIcon from "@mui/icons-material/Clear";
import { isAddressValid, WALLET_ADDRESS_LIST } from "./AddWallet";
import { GlobalContext, IGlobalContext } from "@lib/AppContext";
import { useWallet } from "./WalletContext";
import useDidMountEffect from "@components/utilities/hooks";
import { LoadingButton } from "@mui/lab";

const Nautilus: React.FC<{
  set: Function;
  connect: Function;
  connected: boolean;
  addresses: any[];
  load: Function;
  setLoading: Function;
  setDAppWallet: Function;
  dAppWallet: any;
  loading: boolean;
  setdAppAddressTableData: Function;
}> = (props) => {
  const { wallet, setWallet, loggedIn, setLoggedIn } = useWallet();
  const globalContext = React.useContext<IGlobalContext>(GlobalContext);
  const [changeLoading, setChangeLoading] = React.useState<number>(undefined);
  React.useEffect(() => {
    const wrapper = async () => {
      props.setLoading(true);
      await props.connect();
      await props.load();
      props.setLoading(false);
    };
    wrapper();
  }, []);

  useDidMountEffect(() => {
    if (!props.connected) {
      const load = async () => {
        props.setLoading(true);
        try {
          // //@ts-ignore
          // const address_used = await ergo.get_used_addresses();
          // //@ts-ignore
          // const address_unused = await ergo.get_unused_addresses();
          // const addresses = [...address_used, ...address_unused];
          // const addressData = addresses.map((address, index) => {
          //   return { id: index, name: address };
          // });
          // const address = addresses.length ? addresses[0].trim() : "";

          if (isAddressValid(wallet)) {
            await globalContext.api
              .signingMessage(wallet)
              .then(async (signingMessage: any) => {
                if (signingMessage !== undefined) {
                  // @ts-ignore
                  let response = await ergo.auth(
                    wallet,
                    // @ts-ignore
                    signingMessage.data.signingMessage
                  );
                  response.proof = Buffer.from(response.proof, "hex").toString(
                    "base64"
                  );
                  globalContext.api
                    .signMessage(signingMessage.data.tokenUrl, response)
                    .then((data) => {
                      localStorage.setItem(
                        "jwt_token_login",
                        data.data.access_token
                      );
                      setLoggedIn(true);
                      setChangeLoading(undefined);

                      props.setLoading(false);
                    });
                }
              });
          }
        } catch (e) {
          console.log(e);
          props.setDAppWallet({
            connected: false,
            addresses: [],
          });
          setWallet("");
          setChangeLoading(undefined);
          props.setLoading(false);
        }
      };
      load();
    }
  }, [wallet]);

  React.useEffect(() => {
    if (
      props.connected &&
      props.addresses.length > 0 &&
      (localStorage.getItem("jwt_token_login") === "" ||
        localStorage.getItem("jwt_token_login") === null)
    ) {
      setChangeLoading(0);
    }
  }, [props.connected]);

  return (
    <Box sx={{ width: "100%" }}>
      {props.connected || changeLoading !== undefined ? (
        <>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              fontSize: "1.5rem",
              mt: "1rem",
            }}
          >
            <CheckCircleIcon
              color="primary"
              sx={{ fontSize: "3rem", mr: "1rem" }}
            />
            Wallet successfully connected!
          </Box>
          <Box sx={{ mt: ".5rem", fontSize: ".9rem", mb: ".5rem" }}>
            Select which address you want to use as as the default.
          </Box>
          <TextField
            label="Default Wallet Address"
            sx={{ width: "100%", mt: ".75rem" }}
            value={wallet}
            disabled
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {wallet !== "" && <CheckCircleIcon color="success" />}
                </InputAdornment>
              ),
            }}
          />
          <Box
            sx={{
              width: "100%",
              border: "1px solid",
              borderColor: "border.main",
              borderRadius: ".3rem",
              mt: "1rem",
              maxHeight: "12rem",
              overflowY: "auto",
            }}
          >
            {props.addresses !== undefined &&
              props.addresses.map((i: any, c: number) => {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      fontSize: ".7rem",
                      pl: ".5rem",
                      mt: ".5rem",
                      pb: ".5rem",
                      borderBottom:
                        c === props.addresses.length - 1 ? 0 : "1px solid",
                      borderBottomColor: "border.main",
                    }}
                    key={`${i.name}-address-selector`}
                  >
                    {i.name}
                    {changeLoading === c ? (
                      <LoadingButton
                        color="primary"
                        loading
                        variant="contained"
                        sx={{ ml: "auto", mr: ".5rem" }}
                      >
                        Active
                      </LoadingButton>
                    ) : (
                      <Button
                        sx={{ ml: "auto", mr: ".5rem" }}
                        variant="contained"
                        color={wallet === i.name ? "success" : "primary"}
                        size="small"
                        onClick={async () => {
                          try {
                            setChangeLoading(c);
                            setLoggedIn(false);
                            await globalContext.api
                              .signingMessage(i.name)
                              .then(async (signingMessage: any) => {
                                if (signingMessage !== undefined) {
                                  // @ts-ignore
                                  let response = await ergo.auth(
                                    i.name,
                                    // @ts-ignore
                                    signingMessage.data.signingMessage
                                  );
                                  response.proof = Buffer.from(
                                    response.proof,
                                    "hex"
                                  ).toString("base64");
                                  globalContext.api
                                    .signMessage(signingMessage.data.tokenUrl, {
                                      ...response,
                                      previous_wallet_address: wallet,
                                    })
                                    .then((data) => {
                                      localStorage.setItem(
                                        "jwt_token_login",
                                        data.data.access_token
                                      );
                                      setLoggedIn(true);
                                      setChangeLoading(undefined);

                                      props.setLoading(false);
                                      setWallet(i.name);
                                    });
                                }
                              });
                          } catch (e) {
                            setChangeLoading(undefined);
                          }
                        }}
                      >
                        {wallet === i.name ? "Active" : "Choose"}
                      </Button>
                    )}
                  </Box>
                );
              })}
          </Box>
        </>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: "1rem",
              width: "100%",
              backgroundColor: "primary.lightOpacity",
              p: "1rem",
              borderRadius: ".5rem",
              border: "1px solid",
              borderColor: "primary.main",
            }}
          >
            <Avatar
              src={nautilus.src}
              sx={{ height: "3rem", width: "3rem", mr: "1rem" }}
            />
            <Box sx={{ fontSize: "1.2rem", color: "text.primary" }}>
              Nautilus
              <Box
                sx={{
                  fontSize: ".9rem",
                  color: "text.secondary",
                  mt: "-.25rem",
                }}
              >
                Connect automatically signing with your wallet
              </Box>
            </Box>
            <Button
              sx={{ ml: "auto" }}
              size="small"
              onClick={() => props.set()}
            >
              Change
            </Button>
          </Box>
          <Box sx={{ mt: ".5rem", fontSize: ".9rem" }}>
            Follow the instructions in your Nautilus Wallet to confirm and you
            will connect your wallet instantly. If a popup box is not appearing
            or if you accidentally closed it, please{" "}
            <Box
              sx={{
                cursor: "pointer",
                display: "inline",
                textDecoration: "underline",
                color: "primary.main",
              }}
              onClick={() => {
                // props.setLoading(true);
                // const load = async () => {
                //   try {
                //     //@ts-ignore
                //     // const address_used = await ergo.get_used_addresses();
                //     // //@ts-ignore
                //     // const address_unused = await ergo.get_unused_addresses();
                //     // const addresses = [...address_used, ...address_unused];
                //     // const addressData = addresses.map((address, index) => {
                //     //   return { id: index, name: address };
                //     // });
                //     // props.setDAppWallet({
                //     //   ...props.dAppWallet,
                //     //   addresses: addressData,
                //     // });
                //     // props.setdAppAddressTableData(addressData);
                //   } catch (e) {
                //     console.log(e);
                //   }
                //   // props.setLoading(false);
                // };
                // const connect = async () => await props.connect();
                // connect().then(() => load());
              }}
            >
              click here
            </Box>{" "}
            to open it again
          </Box>
        </>
      )}
    </Box>
  );
};

export default Nautilus;
