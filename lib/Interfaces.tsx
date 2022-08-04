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
  