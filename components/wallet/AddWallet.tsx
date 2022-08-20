import * as React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
  CircularProgress,
} from "@mui/material";
import { useAddWallet } from "@components/wallet/AddWalletContext";
import { useWallet } from "@components/wallet/WalletContext";
import { Address } from "@components/wallet/Address";
import ProviderListing from "./ProviderListing";
import Nautilus from "./Nautilus";
import MobileWallet from "./MobileWallet";
import { GlobalContext, IGlobalContext } from "@lib/AppContext";

export const WALLET_ADDRESS = "wallet_address";
export const WALLET_ADDRESS_LIST = "wallet_address_list";
export const DAPP_CONNECTED = "dapp_connected";

/**
 * Note on es-lint disable line:
 *
 * Ergo dApp injector uses global variables injected from the browser,
 * es-lint will complain if we reference un defined varaibles.
 *
 * Injected variables:
 * - ergo
 * - window.ergo_check_read_access
 * - window.ergo_request_read_access
 */
const AddWallet: React.FC = () => {
  const [walletInput, setWalletInput] = React.useState("");
  const { addWalletOpen, setAddWalletOpen } = useAddWallet();
  const { wallet, setWallet, dAppWallet, setDAppWallet, loggedIn } =
    useWallet();
  const [init, setInit] = React.useState(false);
  const globalContext = React.useContext<IGlobalContext>(GlobalContext);
  /**
   * dapp state
   *
   * loading: yoroi is slow so need to show a loader for yoroi
   * dAppConnected: true if permission granted (persisted in local storage)
   * dAppError: show error message
   * dAppAddressTableData: list available addresses from wallet
   */
  const [loading, setLoading] = React.useState(false);
  const [view, setView] = React.useState<string>(
    wallet !== "" && !dAppWallet.connected
      ? "mobile"
      : wallet !== "" && dAppWallet.connected
      ? "nautilus"
      : "listing"
  );



  React.useEffect(() => {
    window.addEventListener("ergo_wallet_disconnected", () => {
      clearWallet();
    });
    //@ts-ignore
    // load primary address
    if (localStorage.getItem(WALLET_ADDRESS)) {
      setWallet(localStorage.getItem(WALLET_ADDRESS));
      setWalletInput(localStorage.getItem(WALLET_ADDRESS));
    }
    // load dApp state
    if (
      localStorage.getItem(DAPP_CONNECTED) &&
      localStorage.getItem(WALLET_ADDRESS_LIST)
    ) {
      setDAppWallet({
        connected:
          localStorage.getItem(DAPP_CONNECTED) === "true" ? true : false,
        addresses: JSON.parse(localStorage.getItem(WALLET_ADDRESS_LIST)),
      });
    }

    setInit(true);
  }, []);

  /**
   * update persist storage
   */
  React.useEffect(() => {
    if (init) {
      localStorage.setItem(DAPP_CONNECTED, dAppWallet.connected);
      localStorage.setItem(
        WALLET_ADDRESS_LIST,
        JSON.stringify(dAppWallet.addresses)
      );
    }
  }, [dAppWallet, init]);

  React.useEffect(() => {
    // setLoading(false)
    if (init) localStorage.setItem(WALLET_ADDRESS, wallet);
  }, [wallet, init]);

  const handleSubmitWallet = () => {
    // add read only wallet
    setWallet(walletInput);
    // clear dApp state
    setDAppWallet({
      connected: false,
      addresses: [],
    });
  };

  const clearWallet = () => {
    // clear state and local storage
    localStorage.setItem(WALLET_ADDRESS, "");
    localStorage.setItem(WALLET_ADDRESS_LIST, "[]");
    localStorage.setItem(DAPP_CONNECTED, "false");
    localStorage.setItem("jwt_token_login", "");
    setWalletInput("");
    setWallet("");
    // clear dApp state
    setView("listing");
    setDAppWallet({
      connected: false,
      addresses: [],
    });
  };

  /**
   * dapp connector
   */
  const dAppConnect = async () => {
    try {
      //@ts-ignore
      if (await window.ergo_check_read_access()) {
        await dAppLoad();
        setLoading(false);
        return;
        //@ts-ignore
      } else if (await window.ergo_request_read_access()) {
        //@ts-ignore
        if (await window.ergo_check_read_access()) {
          await dAppLoad();
          setLoading(false);
          return;
        }
        
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const dAppLoad = async () => {
    try {
      //@ts-ignore
      const address_used = await ergo.get_used_addresses();
      //@ts-ignore
      const address_unused = await ergo.get_unused_addresses();
      const addresses = [...address_used, ...address_unused];
      // use the first used address if available or the first unused one if not as default
      // when a user hits the signing request, it should be a list of addresses that they have connected.
      // If one of them has an account, then you login using that method... don't default to 0

      const addressData = addresses.map((address, index) => {
        return { id: index, name: address };
      });

      await globalContext.api
            .signingMessage(addresses)
            .then(async (signingMessage: any) => {
              
              if (signingMessage !== undefined) {
                setLoading(true);

                // @ts-ignore
                let response = await ergo.auth(
                  signingMessage.data.address,
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
                    setWallet(signingMessage.data.address);
                    localStorage.setItem(
                      WALLET_ADDRESS,
                      signingMessage.data.address
                    );

                  });
              }
            });
      // setWallet(address);
      // // update dApp state
      setDAppWallet({
        connected: true,
        addresses: addressData,
      });
    } catch (e) {
      console.log(e);
      setLoading(false);

    }
    setLoading(false);

  };

  React.useEffect(() => {
    if (localStorage.getItem(WALLET_ADDRESS_LIST)) {
      if (JSON.parse(localStorage.getItem(WALLET_ADDRESS_LIST)).length > 0) {
        setDAppWallet({
          // connected: true,
          connected: true,
          addresses: localStorage.getItem(WALLET_ADDRESS_LIST)
            ? JSON.parse(localStorage.getItem(WALLET_ADDRESS_LIST))
            : [],
        });
        setWallet(localStorage.getItem(WALLET_ADDRESS));
      }
    } else if (isAddressValid(wallet)) {
      setDAppWallet({
        // connected: true,
        connected: false,
        addresses: [],
      });
      setWallet(localStorage.getItem(WALLET_ADDRESS));
    }
  }, [view]);

  return (
    <>
      <Dialog
        open={addWalletOpen}
        onClose={() => setAddWalletOpen(false)}
        PaperProps={{ sx: { maxWidth: "38rem" } }}
      >
        <DialogTitle sx={{ backgroundColor: "fileInput.main" }}>
          Connect Wallet
        </DialogTitle>
        <DialogContent sx={{ backgroundColor: "fileInput.main" }}>
          <DialogContentText sx={{ fontSize: ".9rem" }}>
            Your private key will never be stored on our server. If you are
            using a dapp wallet, please make sure only one wallet is enabled.
            Enabling multiple wallet extensions willl cause undefined behavior.
          </DialogContentText>
          {view === "listing" ? (
            <ProviderListing set={setView} />
          ) : view === "nautilus" ? (
            <Nautilus
              set={() => setView("listing")}
              connect={dAppConnect}
              connected={dAppWallet.connected}
              addresses={dAppWallet.addresses}
              setLoading={setLoading}
              setDAppWallet={setDAppWallet}
              dAppWallet={dAppWallet}
              loading={loading}
              clear={clearWallet}
            />
          ) : (
            <MobileWallet
              set={() => setView("listing")}
              wallet={walletInput}
              setWallet={setWalletInput}
            />
          )}
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "fileInput.main",
            pl: "1rem",
            pr: "1rem",
            pb: ".5rem",
          }}
        >
          <Button onClick={() => setAddWalletOpen(false)} sx={{ mr: "1rem" }}>
            Close
          </Button>

          <Box sx={{ ml: "auto" }}>
            {loading && <CircularProgress color='primary' size='small'/>}
            {dAppWallet.connected && (
              <Button
                color="error"
                variant="outlined"
                sx={{ mr: view === "mobile" ? ".5rem" : 0 }}
                onClick={() => {
                  clearWallet();
                }}
              >
                Disconnect
              </Button>
            )}
            {view === "mobile" && (
              <Button
                onClick={async () => {
                  // add try catch here...
                  let res = await globalContext.api.mobileLogin(walletInput);
                  console.log("res", res);
                  globalContext.api.webSocket(res.data.verificationId);
                  handleSubmitWallet();
                }}
                disabled={walletInput === ""}
                variant="contained"
              >
                Confirm
              </Button>
            )}
          </Box>
        </DialogActions>
      </Dialog>
    </>
  );
};

export const isAddressValid = (address: string) => {
  return address !== undefined ? address.length > 5 : false;
  try {
    return new Address(address).isValid();
  } catch (_) {
    return false;
  }
};

export default AddWallet;
