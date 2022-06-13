import { data } from "jquery";
import React from "react";

const statusLookup: IObj<number> = {
  GET: 200,
  POST: 201,
};

export class AbstractApi {
  alert: any;
  setAlert: Function;

  constructor(_alert: any, _setAlert: Function) {
    this.alert = _alert;
    this.setAlert = _setAlert;
  }

  error = (err) =>
    this.setAlert({
      show: true,
      content: err.toString(),
      header: "Error",
    });

  get<T>(url: string): Promise<T> {
    return this.request(url, "GET").then((data: T) => data, this.error);
  }

  post<T>(url: string, body: any): Promise<T> {
    return this.request(url, "POST", body).then((data: T) => data, this.error);
  }

  _request(url: string, method: string, body?: any): Promise<Response> {
    return fetch(url, {
      method: method,
      credentials: "include",
      body: body,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json, text/plain, */*",
        "X-CSRFToken": "token here...",
      },
    });
  }

  request(url: string, method: string, body?: any) {
    return new Promise((resolve, reject) => {
      try {
        if (body !== undefined) {
          this._request(url, method, ...body).then((res) => {
            if (res.status !== statusLookup[method]) {
              return resolve(undefined);
            } else {
              return res.json().then((data) => {
                resolve(data);
              });
            }
          });
        } else {
          this._request(url, method).then((res) => {
            if (res.status !== statusLookup[method]) {
              return resolve(undefined);
            } else {
              return res.json().then((data) => {
                resolve(data);
              });
            }
          });
        }
      } catch (err) {
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
