import { ICreationData } from "../../lib/creation/Api";

export function checkCompleteness(_data: ICreationData): boolean {
  switch (_data.navStage) {
    case 0: {
      return (
        _data.basicInformation.daoName === "" ||
        _data.basicInformation.daoUrl === "" ||
        _data.basicInformation.shortDescription === ""
      );
    }
  }
}

export function bytesToSize(bytes) {
  var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes == 0) return "0 Byte";
  var i = Math.floor(Math.log(bytes) / Math.log(1024));
  return (bytes / Math.pow(1024, i)).toFixed(2) + " " + sizes[i];
}

export function balanceToPercentage(total: number, balance: number): number {
  return parseFloat(((balance / total) * 100).toFixed(2));
}

export function percentageToBalance(total: number, percentage: number): number {
  return parseFloat((total * percentage).toFixed(2));
}

export function percentage(value: number, places: number = 2): string {
  return (value * 100).toFixed(2) + "%";
}
