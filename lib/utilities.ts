import { useRadioGroup } from "@mui/material";
import axios from "axios";

const statusLookup: IObj<number> = {
  GET: 200,
  POST: 200,
  PATCH: 200,
  PUT: 200,
  DELETE: 204,
};

interface IUpdateUser {
  alias?: string;
  primary_wallet_address?: string;
}

export const addDays = (days: number, date: Date = new Date()): Date => {
  let temp = new Date(date);
  temp.setDate(temp.getDate() + days);
  return temp;
};

export const clientSideOnly = (func: Function): void => {
  if (typeof window !== "undefined") {
    // Client-side-only code
    func();
  }
};
export interface ISigningMessage {
  signingMessage: string;
}

export class AbstractApi {
  alert: any;
  setAlert: Function;

  constructor(_alert: any, _setAlert: Function) {
    this.alert = _alert;
    this.setAlert = _setAlert;
  }

  async signingMessage(address: string, addresses?: string[]): Promise<any> {
    const data = await this.post<{ data: ISigningMessage }>(
      "/auth/login",
      { address: address, addresses: addresses },
      "added user.",
      ""
    );

    console.log(data);
    return data;
  }

  async signMessage(url: string, response: any) {
    return await this.post<{ data: any }>(url, response, "signed message", "");
  }

  async updateUser(address: string, user: IUpdateUser) {
    return await this.put<{ data: any }>(
      `/users/${address}`,
      user,
      "updated address",
      ""
    );
  }

  async mobileLogin(address: string) {
    return await this.post<{ data: any }>(
      "/auth/login",
      { address },
      "added user.",
      ""
    );
  }

  async login(username: string, password: string) {
    const res: any = await this.post(
      "/auth/token",
      { username, password },
      "logged in.",
      ""
    );

    if (res !== false) {
      console.log(res);
      console.log("token", res.data.access_token);
      localStorage.setItem("jwt_token_login", res.data.access_token);
    }
  }

  error(err: any): any {
    console.log(err);
    if (this !== undefined) {
      this.setAlert({
        show: true,
        value: "error",
        current: "occured",
        action: "Unknown error",
      });
    }
  }

  showAlert = (value: string, current: string, action: string): boolean => {
    if (action !== "" && action !== undefined) {
      this.setAlert({
        show: true,
        value: value,
        current: current,
        action: action,
      });
    }
    return false;
  };

  async get<T>(url: string, action: string, current: string = ""): Promise<T> {
    let self = this;
    // @ts-ignore
    return await this.request(url, "GET").then((data: T) => {
      self.showAlert("success", current, action);
      return data;
    }, self.error);
  }

  async post<T>(
    url: string,
    body: any,
    action: string = undefined,
    current: string = ""
  ): Promise<T> {
    let self = this;
    return await this.request(url, "POST", body).then(
      // @ts-ignore
      (data: T) => {
        self.showAlert("success", current, action);
        return data;
      },
      self.error
    );
  }

  async patch<T>(
    url: string,
    action: string,
    current: string = ""
  ): Promise<T> {
    let self = this;
    return await this.request(url, "PATCH").then(
      // @ts-ignore
      (data: T) => data,
      self.error
    );
  }

  async put<T>(
    url: string,
    body: any,
    action: string,
    current: string = ""
  ): Promise<T> {
    let self = this;
    return await this.request(url, "PUT", body).then(
      // @ts-ignore
      (data: T) => data,
      self.error
    );
  }

  async delete<T>(
    url: string,
    body: any,
    action: string,
    current: string = ""
  ): Promise<T> {
    let self = this;
    return await this.request(url, "DELETE", body).then(
      // @ts-ignore
      (data: T) => data,
      self.error
    );
  }

  async _request(
    url: string,
    method: string,
    body?: IObj<any>,
    auth?: boolean
  ): Promise<Response> {
    const methods: IObj<Function> = {
      POST: axios.post,
      GET: axios.get,
      PATCH: axios.patch,
      DELETE: axios.delete,
      PUT: axios.put,
    };
    const defaultOptions = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt_token_login")}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    };
    url = url.includes("8000/api") ? url.split("8000/api")[1] : url;
    return await methods[method](
      url.slice(0, 4) === "http" ? url : "http://localhost:8000/api" + url,
      body,
      defaultOptions
    );
  }

  async request(url: string, method: string, body?: any) {
    return await new Promise(async (resolve, reject) => {
      try {
        if (body !== undefined) {
          return await this._request(url, method, body).then(async (res) => {
            if (res.status !== statusLookup[method]) {
              resolve("error");
            } else {
              resolve(res);
            }
          });
        } else {
          return await this._request(url, method, body).then(async (res) => {
            if (res.status !== statusLookup[method]) {
              resolve(undefined);
            } else {
              resolve(res);
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
