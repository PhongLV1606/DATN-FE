// import { Button } from 'antd';
// import { Outlet } from 'react-router-dom';
// import { Suspense } from '~/routes/lazy';

// const MainLayout = () => {
//     return (
//         <div className='bg-red-100'>
//             main
//             <Button type='primary'>Antd Button</Button>
//             <Suspense>
//                 <Outlet />
//             </Suspense>
//         </div>
//     );
// };

// export default MainLayout;

import { Outlet } from 'react-router-dom';
import Footer from '~/components/client/Footer';
import Header from '~/components/client/Header';

const MainLayout = () => {
    return (
        <div className='flex min-h-screen flex-col'>
            <Header />
            <main className='flex-grow'>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
