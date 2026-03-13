"use client";
import { CommonTable } from "@/features/backend/common/components/table";
import { AdminTagResponseData, AdminTagType } from "../../types/tagType";
import { useState } from "react";
import { getTagList, getHandelSearchData } from "../../server/tag.actions";
import { requireAuth } from "@/features/auth/server/auth.actions";
import { useRouter } from "next/navigation";
interface TableProps {
  tagData: AdminTagType[];
  totalCount: number;
  size: number;
  searchKeys: (keyof AdminTagType)[];
}
const AdminTagTable = ({
  tagData,
  searchKeys,
  totalCount,
  size,
}: TableProps) => {
  const [totalDataCount, setTotalDataCount] = useState(totalCount);
  const [page, setPage] = useState(1);
  const [tagResult, setTagResult] = useState(tagData);
  const router = useRouter();
  const getNextData = async (pageNumber: number, searchData: string = "") => {
    await requireAuth();
    let tagListData: AdminTagResponseData;

    try {
      tagListData = await getTagList(searchData, pageNumber);
      size = tagListData.count;
      totalCount = tagListData.tag?.total ?? 0;
      tagData = tagListData.tag?.data ?? [];
      setTagResult(tagData);
      setTotalDataCount(totalCount);
      setPage(pageNumber);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "INVALID_USER") {
          router.replace("/admin/dashboard");
        }
      }
      throw error; // important
    }

    console.log(tagListData, pageNumber);
  };

  const getSearchData = async (data: string) => {
    console.log(data);

    try {
      const tagListData = await getHandelSearchData(data);
      size = tagListData.count;
      const pageNumber = tagListData.page;
      totalCount = tagListData.tag?.total ?? 0;
      tagData = tagListData.tag?.data ?? [];
      setTagResult(tagData);
      setTotalDataCount(totalCount);
      setPage(pageNumber);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "INVALID_USER") {
          router.replace("/admin/dashboard");
        }
      }
      throw error; // important
    }
  };

  return (
    <CommonTable
      action={["edit", "delete"]}
      page={page}
      size={size}
      totalCount={totalDataCount}
      tableData={tagResult}
      searchKeys={searchKeys}
      tableColumns={[{ header: "Tag Name", accessor: "name" }]}
      getNextData={getNextData}
      title="Invoice List"
      description="Overview of invoices"
      getSearchData={getSearchData}
    />
  );
};

export default AdminTagTable;
