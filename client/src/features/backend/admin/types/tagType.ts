export interface AdminTagType {
    name: string;
    id: string;
}

export interface AdminTagResponseData {
    success: boolean,
    message?: string,
    count:number,
    tag?: {
        total: number,
        data: AdminTagType[]
    }
}