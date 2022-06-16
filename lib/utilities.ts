import { data } from "jquery";
import React from "react";
import axios from 'axios';

const statusLookup: IObj<number> = {
  GET: 200,
  POST: 201,
  PATCH: 200,
  PUT: 200,
  DELETE: 204
};

export class AbstractApi {
  alert: any;
  setAlert: Function;

  constructor(_alert: any, _setAlert: Function) {
    this.alert = _alert;
    this.setAlert = _setAlert;
  }

  async signup(username: string, password: string) {
    return await this.post('localhost:8000/api/signup', {username, password})
  }

  error = (err) =>
    this.setAlert({
      show: true,
      content: err.toString(),
      header: "Error",
    });

    async get<T>(url: string): Promise<T> {
      return await this.request(url, "GET").then((data: T) => data, this.error);
    }

  async post<T>(url: string, body: any): Promise<T> {
    console.log('here...')
    return await this.request(url, "POST", body).then((data: T) => data, this.error);
  }

  async patch<T>(url: string): Promise<T> {
    return await this.request(url, "PATCH").then((data: T) => data, this.error);
  }

  async put<T>(url: string, body: any): Promise<T> {
    return await this.request(url, "PUT", body).then((data: T) => data, this.error);
  }

  async delete<T>(url: string, body: any): Promise<T> {
    return await this.request(url, "DELETE", body).then((data: T) => data, this.error);
  }

  async _request(url: string, method: string, body?: any, type?: any): Promise<Response> {
    console.log('request here...')
    const methods = {
      'POST': axios.post,
      'GET': axios.get,
      'PATCH': axios.patch,
      'DELETE': axios.delete,
      'PUT': axios.put
    }
      const defaultOptions = {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem(
            'jwt_token_login_422'
          )}`,
          // 'Content-Type': props.type,
        },
      };
      const formData = new FormData();
      for (let key in body) {
        formData.append(key, body[key]);
      }

      return await methods[method](
        url,
        formData,
        defaultOptions
      );
  }

  async request(url: string, method: string, body?: any) {
    return await new Promise(async (resolve, reject) => {
      try {
        if (body !== undefined) {
          return await this._request(url, method, ...body).then((res) => {
            if (res.status !== statusLookup[method]) {
              return resolve(undefined);
            } else {
              return res.json().then((data) => {
                return resolve(data);
              });
            }
          });
        } else {
          return await this._request(url, method).then((res) => {
            if (res.status !== statusLookup[method]) {
              return resolve(undefined);
            } else {
              return res.json().then((data) => {
                return resolve(data);
              });
            }
          });
        }
      } catch (err) {
        return reject(err);
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
