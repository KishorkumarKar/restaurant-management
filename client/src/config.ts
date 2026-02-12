

export const PAGE_SIZE = 10;
export const API = {
    BASE_URL: "http://127.0.0.1:5050/",
    VERSION: "V1",
}
export const API_URL = {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
}

export const JWT_EXPIRE_TIME = (Number(process.env.JWT_EXPIRE_MINUTES) || 20) as number * 60; // in second