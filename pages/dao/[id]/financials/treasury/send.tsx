import Layout from "@components/dao/Layout";
import { Box, Button } from "@mui/material";
import * as React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import { useRouter } from "next/router";
import { CapsInfo, Header } from "@components/creation/utilities/HeaderComponents";
import WalletSelector from "@components/creation/governance/WalletSelector";
import BalanceInput from "@components/creation/utilities/BalanceInput";
import PercentageInput from "@components/creation/utilities/PercentageInput";
import { ITokenHolder } from "@lib/creation/CreationApi";
import { percentageToBalance } from "@lib/creation/Utilities";
import CsvLoader from "@components/utilities/CsvLoader";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import LabeledSwitch from "@components/creation/utilities/LabeledSwitch";

const Send: React.FC = () => {
  const router = useRouter();
  const {id} = router.query;
  const [data, setData] = React.useState<ITokenHolder[]>([{
    alias: "",
    address: "",
    img: "",
    balance: 0,
    percentage: 0,
  },]);
  const [recurring, setRecurring] = React.useState<boolean>(false);
  const treasuryAmount = 50000;
  return <Layout width='60%'>
    <Link href={id === undefined ? '/dao/financials/treasury' : `/dao/${id}/financials/treasury`}>
      <Button
      variant='outlined'
      >
        <ArrowBackIcon sx={{ mr: ".5rem", fontSize: "1rem" }} />
        Back
      </Button>
    </Link>
    <Box sx={{mt: '1rem'}}/>
    <Header title='Send funds from treasury' large/>
    <Box sx={{mt: '1.5rem'}}/>
    <CapsInfo
      title="Sign-up form"
      mb='0.25rem'
    />
    <Box sx={{color: 'text.light', fontSize: '.9rem'}}>
      In order to participate on this airdrop, please complete the form below.
    </Box>
    <Box
        sx={{
          width: "100%",
          mt: '1rem'
        }}
      >
        {data.map((i: any, c: number) => {
          return (
            <Box
              sx={{ display: "flex", alignItems: "center", height: "5rem" }}
              key={`${c}-token-holder`}
            >
              <Box
                sx={{
                  width: "50%",
                  mr: ".5rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <WalletSelector
                  id="tokenomics"
                  key={c + "tokenomics"}
                  canDelete={data.length > 0}
                  data={i}
                  mt="0"
                  number={c}
                  set={(j: any) => {
                    let temp = [...data];
                    if (j === undefined) {
                      temp.splice(c, 1);
                    } else {
                      temp[c] = { ...temp[c], ...j };
                    }
                    setData(temp)
                  }}
                />
              </Box>
              <BalanceInput
                total={treasuryAmount}
                remaining={treasuryAmount - data.map((i: ITokenHolder) => i.balance).reduce((partialSum, a) => partialSum + a, 0)}
                balance={i.balance}
                value={i}
                set={(newValue: any) => {
                  let temp = [...data];
                  temp[c] = { ...newValue };
                  setData(temp)
                }}
              />
              <PercentageInput
                total={treasuryAmount}
                remaining={treasuryAmount - data.map((i: ITokenHolder) => i.balance).reduce((partialSum, a) => partialSum + a, 0)}
                percentage={i.percentage}
                value={i}
                set={(newValue: any) => {
                  let temp = [...data];
                  temp[c] = { ...newValue };
                  setData(temp)
                }}
              />
              {data.length > 1 && (
                <DeleteIcon
                  style={{
                    fill: "red",
                    marginLeft: ".4rem",
                    cursor: "pointer",
                    width: "3%",
                  }}
                  onClick={() => {
                    let temp = [...data];
                    temp.splice(c, 1);
                    setData(temp)
                  }}
                />
              )}
            </Box>
          );
        })}
      </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: ".8rem",
          }}
        >
          <Button
            variant="text"
            sx={{ mr: 2 }}
            onClick={() => {
              let temp = [...data];
              setData(temp.concat([
                {
                  alias: "",
                  address: "",
                  img: "",
                  balance: 0,
                  percentage: 0,
                },
              ]))

            }}
          >
            Add Another <AddIcon />
          </Button>
          <CsvLoader
            id="treasury-loader"
            handleFile={(imported: any) => {
              imported = imported.map((i: any, c: number) => {
                return {
                  ...i,
                  balance: percentageToBalance(
                    treasuryAmount,
                    i.percentage / 100
                  ),
                  alias: `Wallet ${c}`,
                  img: "",
                };
              });
              let temp = [...data];
              setData(temp.concat(imported))
            }}
          />
        </Box>
        <LabeledSwitch
          title='Set as recurring'
          subtitle='Set and schedule this payment to be done for a determined amount of time, in any frequency you wish.'
          value={recurring}
          onChange={() => setRecurring(!recurring)}
        />
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}> 
          <Button variant='outlined' sx={{width: '50%', mr: '1rem'}}>
            Cancel  
          </Button> 
          <Button variant='contained' sx={{width: '50%'}}>
            Submit  
          </Button> 
        </Box>
  </Layout>;
};

export default Send;
