"use server";
import { API, API_URL } from "@/config";
import { LoginAuthType, LoginResponseAuthType } from "../types/auth.type";
import { redirect } from "next/navigation";
import {
  destroyLoginSession,
  generateLoginSession,
  getLoginSession,
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

export const validateUser = async (): Promise<LoginResponseAuthType> => {
  try {
    let url = `${API.BASE_URL}${API.VERSION}${API_URL.VALIDATE}`;
    let session = await getLoginSession();
    if (session === undefined) {
      throw new Error("ACCESS_DENIED");
    }
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${session?.value}`,
      },
    });
    const data: LoginResponseAuthType = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "ACCESS_DENIED") {
        throw error;
      }
      return {
        status: "ERROR",
        success: false,
        message: error.message,
      };
    }
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

export const requireAuth = async () => {
  const session = await validateUser().catch((error) => {
    if (error instanceof Error) {
      if (error.message === "ACCESS_DENIED") {
        redirect("/login");
      }
      console.log("Error", error.message);
    } else {
      console.log("Error", error);
    }
  });
  return session;
};
