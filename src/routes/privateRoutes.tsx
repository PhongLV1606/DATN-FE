import AdminLayout from '~/layouts/AdminLayout';
import DashboardPage from '~/pages/admin/DashboardPage';
import ProductList from '~/pages/admin/product/ProductList';
import { Suspense } from '~/routes/lazy';

const privateRoutes = [
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: (
                    <Suspense>
                        <DashboardPage />
                    </Suspense>
                ),
            },
            {
                path: '/admin/products',
                element: <ProductList />,
            },
        ],
    },
];

export default privateRoutes;
