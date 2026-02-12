"use server";
import { API, API_URL } from "@/config";
import { LoginAuthType, LoginResponseAuthType } from "../types/auth.type";
import {
  destroyLoginSession,
  generateLoginSession,
} from "@/utils/sessionManagement";

export const loginUserAction = async (
  loginData: LoginAuthType,
): Promise<LoginResponseAuthType> => {
  try {
    let url = `${API.BASE_URL}${API.VERSION}${API_URL.LOGIN}`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    const data: LoginResponseAuthType = await res.json();
    if (res.status === 200) {
      await generateLoginSession(data);
      return {
        status: "SUCCESS",
        ...data,
      };
    } else {
      return {
        status: "ERROR",
        success: false,
        message: "Invalid User",
      };
    }
  } catch (error) {
    return {
      status: "ERROR",
      success: false,
      message: "Unknown Error Occurred! Please Try Again Later",
    };
  }
};


// logout user
export const authServerLogoutUserAction = async () => {
  await destroyLoginSession();
  return true;
};
