"use server";
import { API, API_URL } from "@/config";
import {
  adminImportType,
  adminImportResponseType,
  downloadFileType,
} from "../types/importForm.type";
import {
  destroyLoginSession,
  generateLoginSession,
  getLoginSession,
} from "@/utils/sessionManagement";

export const adminImportAction = async (
  importData: adminImportType,
): Promise<adminImportResponseType> => {
  try {
    if (!importData.upload_file) {
      return {
        status: "ERROR",
        success: false,
        message: "File is required",
      };
    }
    const formData = new FormData();
    formData.append("upload_file", importData.upload_file);
    let aptEndPoint = importData.type as keyof typeof API_URL.IMPORT;
    let url = `${API.BASE_URL}${API.VERSION}${API_URL.IMPORT[aptEndPoint]}`;
    let session = await getLoginSession();
    if (session === undefined) {
      throw new Error("ACCESS_DENIED");
    }
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${session?.value}`,
      },
      body: formData,
    });
    const responseData: adminImportResponseType = await response.json();
    if (!responseData.success) {
      return {
        status: "ERROR",
        success: responseData.success,
        message: responseData.message,
      };
    }
    const totalError = responseData.data?.filter(
      (item) => item.error !== undefined,
    ).length;
    console.log(responseData);
    return {
      status: "SUCCESS",
      success: responseData.success,
      message: `Data Imported total error count ${totalError}`,
      data: responseData.data,
    };
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "ACCESS_DENIED") {
        throw new Error("ACCESS_DENIED");
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

export const downloadSampleFile = async (type: string) => {
  try {
    let session = await getLoginSession();
    if (session === undefined) {
      console.log("========");
      throw new Error("ACCESS_DENIED");
    }
    let url = `${API.BASE_URL}${API.VERSION}${API_URL.IMPORT.DOWNLOAD}${type}`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${session?.value}`,
      },
    });

    if (!response.ok) throw new Error("Download failed");

    return await response.arrayBuffer();
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "ACCESS_DENIED") {
        throw new Error("ACCESS_DENIED");
      }
      throw error;
    }
    throw new Error("Download failed");
  }
};
