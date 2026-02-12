export interface IUser {
    id?: string
    name: string,
    age: number,
    email: string,
    phone: string,
    password: string,
    address?: IUserAddress,
    type: string,
}

export interface IUserAddress {
    name: string,
    zipcode: string,
    region: string,
    city: string,
    country: string,
}

export interface IUserLogin {
    email: string,
    password: string
}