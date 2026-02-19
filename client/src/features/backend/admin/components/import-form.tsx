"use client";

import Button from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  adminImportAction,
  downloadSampleFile,
} from "../server/importForm.actions";
import LoaderComponentPage from "@/components/loaderComponent";
import NotificationComponentPage from "@/components/notificationComponent";
import { adminImportResponseType } from "../types/importForm.type";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import Link from "next/link";

const AdminImportForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [importType, setImportType] = useState("");
  const [loader, setLoader] = useState(false);
  const [formSubmit, setFormSubmit] = useState<adminImportResponseType>({});

  const router = useRouter();
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!file || !importType) {
      setFormSubmit({
        status: "ERROR",
        message: "Please select type and file",
      });
      return;
    }
    try {
      setLoader(true);
      console.log(importType);
      const result = await adminImportAction({
        type: importType,
        upload_file: file,
      });
      // setLoader(false);
      setFormSubmit({ ...result });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "ACCESS_DENIED") {
          // setFormSubmit({ status: "ERROR", message: error.message });
          router.replace("/login");
        } else {
          setFormSubmit({ status: "ERROR", message: error.message });
        }
      } else {
        setFormSubmit({ status: "ERROR", message: "Import failed:" });
      }
    } finally {
      setLoader(false); // ✅ Always stops loader
    }
  };

  const downloadFile = async (type: string) => {
    try {
      const fileData = await downloadSampleFile(type);
      const blob = new Blob([fileData], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${type}-sample.csv`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "ACCESS_DENIED") {
          router.replace("/login");
        } else {
          setFormSubmit({ status: "ERROR", message: error.message });
        }
      } else {
        setFormSubmit({ status: "ERROR", message: "Download Failed" });
      }
    }
  };
  useEffect(() => {
    if (formSubmit) {
      const timer = setTimeout(() => {
        setFormSubmit({});
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [formSubmit]);

  return (
    <div className="border-1 border-default border-dashed rounded-3xl rounded-3xl p-4 w-1/2">
      {loader && <LoaderComponentPage />}
      {formSubmit && formSubmit.status && formSubmit.message && (
        <NotificationComponentPage
          className={formSubmit.status}
          message={formSubmit.message}
        />
      )}
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Select Category
          </label>
          <select
            onChange={(e) => setImportType(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Choose an option</option>
            <option value="tag">Tag</option>
            <option value="category">Category</option>
            <option value="restaurant">Restaurant</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Upload File
          </label>
          <input
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            type="file"
            className="w-full text-sm text-gray-600 
                        
                 file:mr-4 file:py-2 file:px-4
                 file:rounded-lg file:border-0
                 file:text-sm file:font-medium
                 file:bg-blue-50 file:text-blue-600
                 hover:file:bg-blue-100"
          />
        </div>
        <div className="ml-2.5flex space-x-4">
          <h1>Sample download :- </h1>
          <Link
            className="text-blue-600 hover:underline"
            onClick={() => downloadFile("tag")}
            href={""}
          >
            Tag
          </Link>
          <Link
            className="text-blue-600 hover:underline"
            onClick={() => downloadFile("category")}
            href={""}
          >
            Category
          </Link>
          <Link
            className="text-blue-600 hover:underline"
            onClick={() => downloadFile("restaurant")}
            href={""}
          >
            Restaurant
          </Link>
        </div>

        <Button variant={"submit"} type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AdminImportForm;
