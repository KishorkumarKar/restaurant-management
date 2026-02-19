import AdminImportForm from "@/features/backend/admin/components/import-form";
import BackendCommonComponentsSidebar from "@/features/backend/common/components/sidebar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurant :: Import",
};

export default function ImportPage() {
  return (
    <>
      <BackendCommonComponentsSidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 flex flex-col justify-center items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Import : Category, Tag Or Restaurant
            </h2>
          </div>
          <AdminImportForm />
        </div>
      </div>
    </>
  );
}
