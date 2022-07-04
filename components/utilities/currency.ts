export const currencyFormatter = (value: number, places: number = 2) => {
  return value.toFixed(places).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};
