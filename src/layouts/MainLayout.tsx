import { Outlet } from 'react-router-dom';
import { Suspense } from '~/routes/lazy';

const MainLayout = () => {
    return (
        <div>
            main
            <Suspense>
                <Outlet />
            </Suspense>
        </div>
    );
};

export default MainLayout;
