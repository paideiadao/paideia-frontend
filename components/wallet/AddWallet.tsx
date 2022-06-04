import * as React from 'react'
import {
  Button,
  Dialog,
  TextField,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormHelperText,
  Grid,
  CircularProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import {useAddWallet} from '@components/wallet/AddWalletContext';
import {useWallet} from '@components/wallet/WalletContext';
import {Address} from '@components/wallet/Address';


const WALLET_ADDRESS = 'wallet_address';
const WALLET_ADDRESS_LIST = 'wallet_address_list';
const DAPP_CONNECTED = 'dapp_connected';

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
    const [walletInput, setWalletInput] = React.useState('');
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
            localStorage.getItem(DAPP_CONNECTED) === 'true' ? true : false,
          addresses: JSON.parse(localStorage.getItem(WALLET_ADDRESS_LIST)),
        });
      }
      // refresh connection
      try {
        if (localStorage.getItem(DAPP_CONNECTED) === 'true') {
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
      setAddWalletOpen(false);
      setWalletInput(wallet);
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
      setWalletInput('');
      setWallet('');
      // clear dApp state
      setDAppError(false);
      setDAppWallet({
        connected: false,
        addresses: [],
      });
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
        const address = addresses.length ? addresses[0] : '';
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
          <DialogTitle>Connect Wallet</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter your Ergo wallet public key. This will be used to interact
              with smart contracts and display assets on the dashboard. Your
              public key will never be stored on our server. If you are using a
              dapp wallet please make sure only one wallet is enabled. Enabling
              multiple wallet extensions will cause undefined behaviour.
            </DialogContentText>
            <Grid sx={{ py: 2 }}>
              <Button
                disabled={loading}
                onClick={dAppConnect}
                sx={{
                  color: '#fff',
                  fontSize: '1rem',
                  py: '0.6rem',
                  px: '1.6rem',
                  textTransform: 'none',
                  backgroundColor: 'blue',
                  '&:hover': {
                    backgroundColor: 'red',
                    boxShadow: 'none',
                  },
                  '&:active': {
                    backgroundColor: 'green',
                  },
                }}
              >
                {dAppWallet.connected
                  ? 'dApp Connected'
                  : 'Connect with Nautilus or SAFEW'}
                {loading && (
                  <CircularProgress
                    sx={{ ml: 2, color: 'white' }}
                    size={'1.2rem'}
                  />
                )}
              </Button>
              <FormHelperText error={true}>
                {dAppError ? 'Failed to connect to wallet. Please retry.' : ''}
              </FormHelperText>
              {dAppWallet.connected && (
                <Accordion sx={{ mt: 1 }}>
                  <AccordionSummary onClick={loadAddresses}>
                    <strong>Change Address</strong>
                  </AccordionSummary>
                  <AccordionDetails>
                      SLEEP
                    {/* <PaginatedTable
                      rows={dAppAddressTableData}
                      onClick={(index) =>
                        changeWalletAddress(dAppAddressTableData[index].name)
                      }
                    /> */}
                  </AccordionDetails>
                </Accordion>
              )}
            </Grid>
            <TextField
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
              {!isAddressValid(walletInput) ? 'Invalid ergo address.' : ''}
            </FormHelperText>
          </DialogContent>
          <DialogActions sx={{ justifyContent: 'space-between' }}>
            <Button onClick={() => clearWallet()}>Remove wallet</Button>
            <Button onClick={handleClose}>Close Window</Button>
            <Button
              onClick={handleSubmitWallet}
              disabled={!isAddressValid(walletInput) || dAppWallet.connected}
            >
              Connect Read Only Wallet
            </Button>
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