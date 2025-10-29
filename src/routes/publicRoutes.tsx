// import { Home } from 'lucide-react';
// import MainLayout from '~/layouts/MainLayout';
// import LoginPage from '~/pages/LoginPage';
// import RegisterPage from '~/pages/RegisterPage';
// import ProductDetailPage from '~/pages/ProductDetailPage';

// const publicRoutes = [
//     {
//         path: '/',
//         element: <MainLayout />,
//         children: [
//             {
//                 index: true,
//                 element: <Home />,
//             },
//         ],
//     },
//     {
//         path: '/login',
//         element: <LoginPage />,
//     },
//     {
//         path: '/register',
//         element: <RegisterPage />,
//     },
//     {
//         path: '/product/:id',
//         element: <ProductDetailPage />,
//     },
// ];

// export default publicRoutes;

import MainLayout from '~/layouts/MainLayout';
import HomePage from '~/pages/client/HomePage';
import LoginPage from '~/pages/LoginPage';
import RegisterPage from '~/pages/RegisterPage';
import ProductDetailPage from '~/pages/client/ProductDetailPage';

const publicRoutes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: '/product/:id',
                element: <ProductDetailPage />,
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
];

export default publicRoutes;
