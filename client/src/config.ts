import { RoutesConfig } from "./features/backend/common/types/common.types";


export const PAGE_SIZE = 10;
export const ADMIN_USER = "admin";
export const LOGIN_USER = "user";
export const API = {
    BASE_URL: "http://172.26.80.1:6050/",
    VERSION: "V1",
}
export const API_URL = {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
    VALIDATE: "/auth/validate",
    Admin: {
        tag: {
            list: "/admin/tag"
        }
    },
    User: {
        category: {
            list: "/user/category"
        }
    },
    IMPORT: {
        tag: "/admin/import/tag",
        category: "/admin/import/category",
        restaurant: "/admin/import/restaurant",
        DOWNLOAD: "/admin/import/download/",
    }
}
export const ROUTES: RoutesConfig = {
    tag: {
        basePath: "/admin/tag",
        permissions: {
            list: {
                show: true,
                name: "List Tag",
                path: "",
                roles: [ADMIN_USER, LOGIN_USER],
            },
            add: {
                show: true,
                name: "Add Tag",
                path: "/add",
                roles: [ADMIN_USER],
            },
            edit: {
                name: "Edit Tag",
                path: "/edit/",
                roles: [ADMIN_USER],
            },
            delete: {
                name: "Delete Tag",
                path: "/delete/",
                roles: [ADMIN_USER],
            },
        },
    },
};
export const JWT_EXPIRE_TIME = (Number(process.env.JWT_EXPIRE_MINUTES) || 20) as number * 60; // in second
export const IS_HTTP_SECURE = process.env.IS_HTTP_SECURE !== "false";