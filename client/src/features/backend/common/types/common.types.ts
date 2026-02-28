export type RoutesConfig = Record<string, RouteModule>;
export type RouteModule = {
    basePath: string;
    permissions?: Record<PermissionKey, Permission>;
};
export type PermissionKey = "list" | "add" | "edit" | "delete";
export type Permission = {
    show?: boolean;
    name: string;
    path: string;
    roles: Role[];
};
export type Role = "admin" | "user";