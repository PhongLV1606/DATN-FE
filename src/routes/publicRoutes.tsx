import { Home } from 'lucide-react';
import MainLayout from '~/layouts/MainLayout';

const privateRoutes = [
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
];

export default privateRoutes;
