import { JWT_EXPIRE_TIME } from "@/config";
import { LoginResponseAuthType } from "@/features/auth/types/auth.type";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

export const generateLoginSession = async (loginData: LoginResponseAuthType) => {
    const cookieStore = await cookies();
    if (loginData?.token) {
        console.log("-----", loginData.token);
        cookieStore.set("session", loginData.token, {
            secure: true,
            httpOnly: true,
            maxAge: JWT_EXPIRE_TIME,
        });
    }
}

export const destroyLoginSession = async (): Promise<boolean> => {
    const cookieStore = await cookies();
    cookieStore.delete("session");
    return true;
}

export const getLoginSession = async (): Promise<RequestCookie | undefined> => {
    const cookieStore = await cookies();
    return cookieStore.get("session");
}