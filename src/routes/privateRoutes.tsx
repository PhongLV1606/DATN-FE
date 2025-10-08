import AdminLayout from '~/layouts/AdminLayout';
import DashboardPage from '~/pages/DashboardPage';
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
        ],
    },
];

export default privateRoutes;
