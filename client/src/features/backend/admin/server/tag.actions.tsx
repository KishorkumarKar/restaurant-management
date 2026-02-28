"use server";
import { API, API_URL } from "@/config";
import { getLoginSession } from "@/utils/sessionManagement";
import { AdminTagResponseData } from "../types/tagType";

export const getTagList = async (page: number = 1, count: number = 2) => {
  try {
    let session = await getLoginSession();
    if (session === undefined) {
      throw new Error("ACCESS_DENIED");
    }
    let url = `${API.BASE_URL}${API.VERSION}${API_URL.Admin.tag.list}`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${session?.value}`,
        page: String(page),
        count: String(count),
      },
    });
    if (response.status == 401) throw new Error("ACCESS_DENIED");
    else if (response.status == 403) throw new Error("INVALID_USER");
    const responseData: AdminTagResponseData = await response.json();
    if (!responseData.success) {
      throw new Error(responseData.message);
    } else {
      return {
        status: "SUCCESS",
        page,
        count,
        ...responseData,
      };
    }
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "ACCESS_DENIED") {
        throw new Error("ACCESS_DENIED");
      }
      throw error;
    }
    throw new Error("No data");
  }
};
