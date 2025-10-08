export type IAPIResponse<T> = {
    success: boolean;
    message: string;
    status: number;
    data: T;
};
