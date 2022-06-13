import React from "react";

export class AbstractApi {
  alert: any;
  setAlert: Function;

  constructor(_alert: any, _setAlert: Function) {
    this.alert = _alert;
    this.setAlert = _setAlert;
  }

  get<T>(url: string): Promise<T> {
    return this.request(url, 'GET').then((res: Response) => {
      if (res.status !== 200) {
        return undefined
      } else {
        return res.json().then((data) => {
          return data
        })
    }
    }, (err) => this.setAlert({
      show: true,
      content: err.toString(),
      header: 'Error'
    }))
  }

  _request(url: string, method: string, params?: any): Promise<Response> {
    return fetch(url, {
      method: method,
      credentials: 'include',
      body: params,
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json, text/plain, */*',
        'X-CSRFToken': 'token here...'
      }
    });
  }

  request(url: string, method: string, params?: any) {
      return new Promise((resolve, reject) => {
          try {
              if (params !== undefined) {
                  this._request(url, method, ...params).then((res) => {
                      resolve(res);
                  });
              }
              else {
                  this._request(url, method).then((res) => {
                      resolve(res);
                  });
              }
          }
          catch (err) {
              reject(err);
          }
      });
  }

}

export interface IData<T> {
  data: T;
  setData: Function;
}

export interface IObj<TValue> {
  [id: string]: TValue;
}

export interface IAlert {
  show: boolean;
  header?: string;
  content?: string | JSX.Element;
}
