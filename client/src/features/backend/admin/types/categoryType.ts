export interface AdminCategoryType {
    name: string;
    id: string;
}

export interface AdminCategoryResponseData {
    success: boolean,
    message?: string,
    count:number,
    category?: {
        total: number,
        data: AdminCategoryType[]
    }
}