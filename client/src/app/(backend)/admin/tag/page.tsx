import { requireAuth } from "@/features/auth/server/auth.actions";
import AdminTagTable from "@/features/backend/admin/components/tag/tagTable";
import { getTagList } from "@/features/backend/admin/server/tag.actions";
import { AdminTagType } from "@/features/backend/admin/types/tagType";
import { redirect } from "next/navigation";

const tagData: AdminTagType[] = [
  {
    name: "INV-1001",
    id: "1111",
  },
  {
    name: "INV-1001sss",
    id: "1111",
  },
];

interface PageProps {
  searchParams: {
    page?: string;
  };
}

export default async function Page() {
  await requireAuth();

  const tagListData = await getTagList().catch((error) => {
    if (error instanceof Error) {
      if ((error.message = "INVALID_USER")) {
        redirect("/admin/dashboard");
      }
    }
    throw error;
  });
  return (
    <div className="p-4 sm:ml-64">
      {tagListData.tag && (
        <AdminTagTable tagData={tagListData.tag.data} totalCount={tagListData.tag.total} size={tagListData.count} searchKeys={["name"]} />
      )}
    </div>
  );
}
