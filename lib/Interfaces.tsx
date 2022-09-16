export interface IData<T> {
  data: T;
  setData: Function;
}

export interface IObj<TValue> {
  [id: string]: TValue;
}

export interface IDaoUserData {
  dao_id: number;
  followers: number[];
  following: number[];
  id: number;
  level: number;
  name: string;
  social_links: any;
  user_id: number;
  xp: number;
}

export interface IDaoUserRes {
  data: IDaoUserData;
}
