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

const WALLET_ADDRESS = "wallet_address";
export const WALLET_ADDRESS_LIST = "wallet_address_list";
const DAPP_CONNECTED = "dapp_connected";

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
  const [dAppError, setDAppError] = React.useState(false);
  const [dAppAddressTableData, setdAppAddressTableData] = React.useState([]); // table data
  const [view, setView] = React.useState<string>(
    wallet !== "" && !dAppWallet.connected
      ? "mobile"
      : wallet !== "" && dAppWallet.connected
      ? "nautilus"
      : "listing"
  );

  React.useEffect(() => {
    //@ts-ignore
    // load primary address
    if (localStorage.getItem(WALLET_ADDRESS)) {
      console.log('wallet address here', localStorage.getItem(WALLET_ADDRESS))
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
    // refresh connection
    try {
      if (localStorage.getItem(DAPP_CONNECTED) === "true") {
        // @ts-ignore
        ergoConnector.nautilus.connect().then((access_granted: any) => {
          if (access_granted) {
            // @ts-ignore
            ergoConnector.nautilus.getContext().then(async (context: any) => {
              //@ts-ignore
              const address_used = await context.get_used_addresses();
              //@ts-ignore
              const address_unused = await context.get_unused_addresses();
              const addresses = [...address_used, ...address_unused];
              const address = addresses.length > 0 ? addresses[0] : "";
              // if (!isAddressValid(wallet) && addresses.indexOf(wallet) == -1) {
              //   setWallet(address);
              //   setWalletInput(address);
              // }
              const addressData = addresses.map((address, index) => {
                return { id: index, name: address };
              });
              setDAppWallet({
                addresses: addressData,
                connected: true,
              });
            });
          } else {
          }
        });
        // //@ts-ignore
        // window.ergo_check_read_access().then((res) => {
        //   if (!res)
        //     //@ts-ignore
        //     window.ergo_request_read_access().then((res) => {
        //       if (!res) clearWallet();
        //     });
        // });
      }
    } catch (e) {
      console.log(e);
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

  const handleClose = () => {
    // reset unsaved changes
    handleSubmitWallet();
    setDAppError(false);
  };

  const handleSubmitWallet = () => {
    // add read only wallet
    setWallet(walletInput);
    // clear dApp state
    setDAppError(false);
    setDAppWallet({
      connected: false,
      addresses: [],
    });
  };

  const clearWallet = () => {
    // clear state and local storage
    localStorage.setItem(WALLET_ADDRESS, "");
    localStorage.setItem(WALLET_ADDRESS_LIST, "");
    localStorage.setItem(DAPP_CONNECTED, "");
    setWalletInput("");
    setWallet("");
    // clear dApp state
    setDAppError(false);
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
        await dAppLoad();
        setLoading(false);
        return;
      }
      setDAppError(true);
    } catch (e) {
      setDAppError(true);
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
      const address = addresses.length ? addresses[0] : "";

      if (!isAddressValid(wallet) && addresses.indexOf(wallet) == -1) {
        setWallet(address);
        setWalletInput(address);
      }

      const addressData = addresses.map((address, index) => {
        return { id: index, name: address };
      });
      // // update dApp state
      setDAppWallet({
        connected: true,
        addresses: addressData,
      });
      setDAppError(false);
    } catch (e) {
      console.log(e);
      // update dApp state
      setDAppWallet({
        connected: false,
        addresses: [],
      });
      setDAppError(true);
    }
  };

  let loadAddresses = async () => {
    try {
      //@ts-ignore
      const address_used = await ergo.get_used_addresses();
      //@ts-ignore
      const address_unused = await ergo.get_unused_addresses();
      const addresses = [...address_used, ...address_unused];
      const addressData = addresses.map((address, index) => {
        return { id: index, name: address };
      });
      const address = addresses.length > 0 ? addresses[0] : [];

      if (!isAddressValid(wallet) && addresses.indexOf(wallet) == -1) {
        setWallet(address);
        setWalletInput(address);
      }
      setDAppWallet({
        addresses: addressData,
        connected: true,
      });
    } catch (e) {
      console.log(e);
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
      <Dialog open={addWalletOpen} onClose={() => setAddWalletOpen(false)}>
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
              load={loadAddresses}
              setLoading={setLoading}
              setDAppWallet={setDAppWallet}
              dAppWallet={dAppWallet}
              loading={loading}
              setdAppAddressTableData={setdAppAddressTableData}
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
            {loading && view !== "listing" && !loggedIn && (
              <CircularProgress size="1.5rem" />
            )}
            {/* {isAddressValid(wallet) && (
              <Button
                color="error"
                variant="outlined"
                sx={{ mr: view === "mobile" ? ".5rem" : 0 }}
                onClick={() => {
                  // setWallet("");

                  // clearWallet();
                }}
              >
                Disconnect
              </Button>
            )} */}
            {view === "mobile" && (
              <Button
                onClick={handleClose}
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
