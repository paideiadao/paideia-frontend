import axios from "axios";

const statusLookup: IObj<number> = {
  GET: 200,
  POST: 200,
  PATCH: 200,
  PUT: 200,
  DELETE: 204,
};

export class AbstractApi {
  alert: any;
  setAlert: Function;

  constructor(_alert: any, _setAlert: Function) {
    this.alert = _alert;
    this.setAlert = _setAlert;
  }

  async signup(username: string, password: string) {
    return await this.post(
      "/auth/signup",
      { username, password },
      "added user."
    );
  }

  async login(username: string, password: string) {
    const res: any = await this.post(
      "/auth/token",
      { username, password },
      "logged in."
    );

    if (res !== false) {
      console.log(res)
      console.log('token', res.data.access_token)
      localStorage.setItem('jwt_token_login', res.data.access_token)
    }
    
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
    action: string = undefined,
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
        'Authorization': `Bearer ${localStorage.getItem("jwt_token_login")}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
    // only for auth... everything else can be passed throught he body
    // const formData = new FormData();
    // console.log(body);
    // for (const [k, v] of Object.entries(body)) {
    //   formData.append(k, v);
    // }

    console.log(body)
    let params = new URLSearchParams();
    for (const [k, v] of Object.entries(body)) {
      params.append(k, JSON.stringify(v));
    }

    console.log(body)

    return await methods[method]('http://localhost:8000/api' + url, params, defaultOptions);
  }

  async request(url: string, method: string, body?: any) {
    return await new Promise(async (resolve, reject) => {
      try {
        if (body !== undefined) {
          return await this._request(url, method, body).then(async (res) => {
            if (res.status !== statusLookup[method]) {
              resolve("error");
            } else {
              console.log(res)
              resolve(res);
            }
          });
        } else {
          return await this._request(url, method).then(async (res) => {
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
