export interface IPaginationMeta {
    page: number;
    totalDocs: number;
    totalPages: number;
}

export type IAPIResponse<T> = {
    success: boolean;
    message: string;
    data: T;
};

export type IAPIResponseWithPagination<T> = {
    success: boolean;
    message: string;
    data: T[];
    meta: IPaginationMeta;
};
