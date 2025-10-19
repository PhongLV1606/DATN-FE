import { useQuery } from '@tanstack/react-query';
import { IAPIResponseWithPagination } from '~/@types/apiResponse';
import { IProductAdmin } from '~/@types/product';
import axiosInstance from '~/configs/axios';
import { IQuery } from '~/stores/filter';

export const PRODUCT_QUERY_KEY = {
    PRODUCTS: 'products',
};
export const useGetAllForAdminProducts = (params?: IQuery) => {
    return useQuery({
        queryKey: [PRODUCT_QUERY_KEY.PRODUCTS, ...Object.values(params || {}), ...Object.keys(params || {})],
        queryFn: () =>
            axiosInstance
                .get<IAPIResponseWithPagination<IProductAdmin>>('/products/admin/all', { params })
                .then((res) => res.data),
    });
};
