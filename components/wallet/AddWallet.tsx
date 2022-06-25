import * as React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Avatar,
  Chip,
} from "@mui/material";
import { useAddWallet } from "@components/wallet/AddWalletContext";
import { useWallet } from "@components/wallet/WalletContext";
import { Address } from "@components/wallet/Address";
import ProviderListing from "./ProviderListing";
import Nautilus from "./Nautilus";
import MobileWallet from "./MobileWallet";

const WALLET_ADDRESS = "wallet_address";
const WALLET_ADDRESS_LIST = "wallet_address_list";
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
export const AddWallet: React.FC = () => {
  const [walletInput, setWalletInput] = React.useState("");
  const { addWalletOpen, setAddWalletOpen } = useAddWallet();
  const { wallet, setWallet, dAppWallet, setDAppWallet } = useWallet();
  const [init, setInit] = React.useState(false);

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
  const [view, setView] = React.useState<string>(wallet !== '' && !dAppWallet.connected ? 'mobile' : wallet !== '' && dAppWallet.connected ? 'nautilus' : 'listing');

  React.useEffect(() => {
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
    // refresh connection
    try {
      if (localStorage.getItem(DAPP_CONNECTED) === "true") {
        //@ts-ignore
        window.ergo_check_read_access().then((res) => {
          if (!res)
            //@ts-ignore
            window.ergo_request_read_access().then((res) => {
              if (!res) clearWallet();
            });
        });
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
    if (init) localStorage.setItem(WALLET_ADDRESS, wallet);
  }, [wallet, init]);

  const handleClose = () => {
    // reset unsaved changes
    handleSubmitWallet()
    setDAppError(false);
  };

  const handleSubmitWallet = () => {
    // add read only wallet
    setAddWalletOpen(false);
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
    setWalletInput("");
    setWallet("");
    // clear dApp state
    setDAppError(false);
    setDAppWallet({
      connected: false,
      addresses: [],
    });
    localStorage.setItem(WALLET_ADDRESS, undefined)
    localStorage.setItem(WALLET_ADDRESS_LIST, undefined)
    localStorage.setItem(DAPP_CONNECTED, undefined)
  };

  const handleWalletFormChange = (e) => {
    setWalletInput(e.target.value);
  };

  /**
   * dapp connector
   */
  const dAppConnect = async () => {
    setLoading(true);
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
      const address = addresses.length ? addresses[0] : "";
      setWallet(address);
      setWalletInput(address);
      // update dApp state
      setDAppWallet({
        connected: true,
        addresses: addresses,
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

  const changeWalletAddress = (address) => {
    setWallet(address);
    setWalletInput(address);
  };

  const loadAddresses = async () => {
    setLoading(true);
    try {
      //@ts-ignore
      const address_used = await ergo.get_used_addresses();
      //@ts-ignore
      const address_unused = await ergo.get_unused_addresses();
      const addresses = [...address_used, ...address_unused];
      const addressData = addresses.map((address, index) => {
        return { id: index, name: address };
      });
      setDAppWallet({
        ...dAppWallet,
        addresses: addresses,
      });
      setdAppAddressTableData(addressData);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  return (
    <>
      <Dialog open={addWalletOpen} onClose={handleClose}>
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
            <Nautilus set={() => setView('listing')} connect={dAppConnect}/>
          ) : (
            <MobileWallet 
              set={() => setView('listing')}
              wallet={walletInput}
              setWallet={setWalletInput}
            />
          )}
          {/* {dAppWallet.connected && (
            <Accordion sx={{ mt: 1 }}>
              <AccordionSummary onClick={loadAddresses}>
                <strong>Change Address</strong>
              </AccordionSummary>
              <AccordionDetails>
                List wallets here...
                <PaginatedTable
                      rows={dAppAddressTableData}
                      onClick={(index) =>
                        changeWalletAddress(dAppAddressTableData[index].name)
                      }
                    />
              </AccordionDetails>
            </Accordion>
          )} */}
          {/* <TextField
            disabled={dAppWallet.connected}
            autoFocus
            margin="dense"
            id="name"
            label="Wallet address"
            type="wallet"
            fullWidth
            variant="standard"
            value={walletInput}
            onChange={handleWalletFormChange}
            error={!isAddressValid(walletInput)}
          />
          <FormHelperText error={true}>
            {!isAddressValid(walletInput) ? "Invalid ergo address." : ""}
          </FormHelperText> */}
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "fileInput.main",
            pl: '1rem', pr: '1rem', pb: '.5rem'
          }}
        >
          {wallet !== '' && <Button color='error' variant='outlined' onClick={() => {
            setWallet("");

            clearWallet();
            setAddWalletOpen(false);
          }}>
            Disconnect
          </Button>}
          <Box sx={{ ml: "auto" }}>
            <Button onClick={handleClose} sx={{ mr: "1rem" }}>
              Cancel
            </Button>
            <Button onClick={handleClose} disabled={walletInput === ''} variant='contained'>
              Confirm
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </>
  );
};

function isAddressValid(address) {
  try {
    return new Address(address).isValid();
  } catch (_) {
    return false;
  }
}

export default AddWallet;
