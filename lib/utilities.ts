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

  post<T>(url: string, body: any): Promise<T> {
    return this.request(url, 'POST', body).then((res: Response) => {
      if (res.status !== 201) {
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

  _request(url: string, method: string, body?: any): Promise<Response> {
    return fetch(url, {
      method: method,
      credentials: 'include',
      body: body,
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json, text/plain, */*',
        'X-CSRFToken': 'token here...'
      }
    });
  }

  request(url: string, method: string, body?: any) {
      return new Promise((resolve, reject) => {
          try {
              if (body !== undefined) {
                  this._request(url, method, ...body).then((res) => {
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
