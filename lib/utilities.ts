export class AbstractApi {
  alert: any;
  setAlert: Function;

  constructor(_alert: any, _setAlert: Function) {
    this.alert = _alert;
    this.setAlert = _setAlert;
  }
}

export interface IData<T> {
  data: T;
  setData: Function;
}
