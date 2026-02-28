"use server";

import { ROUTES } from "@/config";

export const getSidebarLink=async()=>{
    return ROUTES;
}