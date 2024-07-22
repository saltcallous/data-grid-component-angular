export interface IUser {
    [key: string]: string;
    name: string;
    title: string;
    status: string;
    role: string;
}

export interface ICol {
    key: string;
    name: string;
    addClass: string;
}

export interface IData {
    col: ICol[];
    data: IUser[];
}