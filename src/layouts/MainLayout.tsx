import { Button } from 'antd';
import { Outlet } from 'react-router-dom';
import { Suspense } from '~/routes/lazy';

const MainLayout = () => {
    return (
        <div className='bg-red-100'>
            main
            <Button type='primary'>Antd Button</Button>
            <Suspense>
                <Outlet />
            </Suspense>
        </div>
    );
};

export default MainLayout;
