import { Header } from "@components/creation/utilities/HeaderComponents";
import { Box } from "@mui/material";
import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { currencyFormatter } from "@components/utilities/currency";

const columns: GridColDef[] = [
  {
    field: "source",
    headerName: "Source",
    flex: 1,
    sortable: true,
  },
  {
    field: "pairs",
    headerName: "Pairs",
    flex: 1,
  },
  {
    field: "price",
    headerName: "Price",
    flex: 1,
    sortable: true,
    align: "left",
    headerAlign: "left",
    valueGetter: (params: GridValueGetterParams) =>
      "$" + currencyFormatter(params.row.price, 4),
  },
  {
    field: "volume",
    headerName: "Volume",
    flex: 1,
    sortable: true,
    align: "left",
    headerAlign: "left",
  },
  {
    field: "liquidity",
    headerName: "Liquidity",
    flex: 1,
    sortable: true,
    align: "left",
    headerAlign: "left",
  },
];

const rows = [
  {
    id: 1,
    source: "Kucoin",
    pairs: "PTK/SigUSD",
    price: 0.1342,
    volume: 22.78,
    liquidity: 343,
  },
  {
    id: 2,
    source: "Gate.io",
    pairs: "PTK/SigUSD",
    price: 0.1343,
    volume: 19.44,
    liquidity: 390,
  },
  {
    id: 3,
    source: "Kucoin",
    pairs: "PTK/ERG",
    price: 0.1342,
    volume: 4.22,
    liquidity: 263,
  },
  {
    id: 4,
    source: "Gate.io",
    pairs: "PTK/ERG",
    price: 0.1345,
    volume: 1.3,
    liquidity: 310,
  },
  {
    id: 5,
    source: "FMFW.io",
    pairs: "PTK/ERG",
    price: 0.1341,
    volume: 2.39,
    liquidity: 33,
  },
  {
    id: 6,
    source: "FMFW.io",
    pairs: "PTK/SigUSD",
    price: 0.1347,
    volume: 1.3,
    liquidity: 22,
  },
];

const Markets: React.FC = () => {
  const ticker = "PTK";
  return (
    <Box sx={{ width: "100%", mt: "1rem" }}>
      <Header title={`${ticker} markets`} />
      <Box sx={{ mt: ".5rem" }} />
      <DataGrid
        rows={rows}
        columns={columns}
        disableSelectionOnClick
        autoHeight
        sx={{
          fontSize: ".8rem",
          "& .MuiDataGrid-cell": {
            backgroundColor: "fileInput.outer",
            outline: "none",
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: "fileInput.outer",
          },
          "&.MuiDataGrid-root .MuiDataGrid-cell:focus": {
            outline: "none",
          },
          "& .MuiDataGrid-columnHeader:focus": {
            outline: "none",
          },
        }}
        hideFooter
      />
    </Box>
  );
};

export default Markets;
