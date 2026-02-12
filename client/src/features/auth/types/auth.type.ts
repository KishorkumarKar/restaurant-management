export interface LoginAuthType {
    email: string;
    password: string;
}
export interface LoginResponseAuthType {
    success: boolean;
    message?: string;
    token?: string;
    type?: string;
    status?: string;
}