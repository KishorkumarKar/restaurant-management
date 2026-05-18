"use server";
import { API, API_URL } from "@/config";
import { AdminTagResponseData } from "../../admin/types/tagType";

export const getTagList = async (
  searchData: string="",
  page: number = 1,
  count: number = 2,
  token:string=""
) => {
  try {
    let url = `${API.BASE_URL}${API.VERSION}${API_URL.Admin.tag.list}`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        searchData: searchData,
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
        ...responseData,
      };
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("No data");
  }
};