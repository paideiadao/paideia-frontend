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
