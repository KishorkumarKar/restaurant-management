export interface adminImportType {
    type: string;
    upload_file: File | null;
}
export interface adminImportResponseType {
    data?: { error?: string, name?: string }[];
    message?: string;
    success?: boolean;
    status?: "ERROR" | "SUCCESS";
}
