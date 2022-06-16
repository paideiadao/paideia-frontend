import { data } from "jquery";
import React from "react";
import axios from "axios";

const statusLookup: IObj<number> = {
  GET: 200,
  POST: 201,
  PATCH: 200,
  PUT: 200,
  DELETE: 204,
};

export class AbstractApi {
  alert: any;
  setAlert: Function;

  constructor(_alert: any, _setAlert: Function) {
    console.log(_setAlert);
    this.alert = _alert;
    this.setAlert = _setAlert;
  }

  async signup(username: string, password: string) {
    return await this.post(
      "http://localhost:8000/api/auth/signup",
      { username, password },
      "added user."
    );
  }

  async login(username: string, password: string) {
    const token = await this.post(
      "http://localhost:8000/api/auth/token",
      { username, password },
      "logged in."
    );
    // set sessions / cookies here
  }

  error = (err: any): boolean => {
    this.setAlert({
      show: true,
      value: "error",
      current: "occured",
      action: "Unknown error",
    });
    return false;
  };

  showAlert = (value: string, current: string, action: string): boolean => {
    this.setAlert({
      show: true,
      value: value,
      current: current,
      action: action,
    });
    return false;
  };

  async get<T>(
    url: string,
    action: string,
    current: string = ""
  ): Promise<T | boolean> {
    let self = this;
    return await this.request(url, "GET").then((data: T | boolean) => {
      self.showAlert("success", current, action);
      return data;
    }, self.error);
  }

  async post<T>(
    url: string,
    body: any,
    action: string,
    current: string = ""
  ): Promise<T | boolean> {
    console.log("here...");
    let self = this;
    return await this.request(url, "POST", body).then((data: T | boolean) => {
      self.showAlert("success", current, action);
      return data;
    }, self.error);
  }

  async patch<T>(
    url: string,
    action: string,
    current: string = ""
  ): Promise<T | boolean> {
    let self = this;
    return await this.request(url, "PATCH").then(
      (data: T | boolean) => data,
      self.error
    );
  }

  async put<T>(
    url: string,
    body: any,
    action: string,
    current: string = ""
  ): Promise<T | boolean> {
    let self = this;
    return await this.request(url, "PUT", body).then(
      (data: T | boolean) => data,
      self.error
    );
  }

  async delete<T>(
    url: string,
    body: any,
    action: string,
    current: string = ""
  ): Promise<T | boolean> {
    let self = this;
    return await this.request(url, "DELETE", body).then(
      (data: T | boolean) => data,
      self.error
    );
  }

  async _request(
    url: string,
    method: string,
    body?: IObj<any>,
    type?: any
  ): Promise<Response> {
    console.log("request here...");
    const methods = {
      POST: axios.post,
      GET: axios.get,
      PATCH: axios.patch,
      DELETE: axios.delete,
      PUT: axios.put,
    };
    const defaultOptions = {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem(
          "jwt_token_login_422"
        )}`,
        // 'Content-Type': props.type,
      },
    };
    const formData = new FormData();
    console.log(body);
    for (const [k, v] of Object.entries(body)) {
      formData.append(k, v);
    }

    return await methods[method](url, formData, defaultOptions);
  }

  async request(url: string, method: string, body?: any) {
    return await new Promise(async (resolve, reject) => {
      try {
        if (body !== undefined) {
          return await this._request(url, method, body).then(async (res) => {
            if (res.status !== statusLookup[method]) {
              resolve("error");
            } else {
              return await res.json().then((data) => resolve(data));
            }
          });
        } else {
          return await this._request(url, method).then(async (res) => {
            if (res.status !== statusLookup[method]) {
              resolve(undefined);
            } else {
              return await res.json().then((data) => resolve(data));
            }
          });
        }
      } catch (err) {
        console.log("err", err);
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
