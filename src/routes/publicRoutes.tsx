import { Home } from 'lucide-react';
import MainLayout from '~/layouts/MainLayout';
import LoginPage from '~/pages/LoginPage';
import RegisterPage from '~/pages/RegisterPage';
import ProductDetailPage from '~/pages/ProductDetailPage';

const publicRoutes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/register',
        element: <RegisterPage />,
    },
    {
        path: '/product/:id',
        element: <ProductDetailPage />,
    },
];

export default publicRoutes;
