// const HomePage = () => {
//     return <div className='bg-amber-500 p-4'>HomePage</div>;
// };

// export default HomePage;

import Banner from '~/components/client/Banner';
import ProductList from '~/components/client/ProductList';

const HomePage = () => {
    return (
        <div className='bg-gray-50'>
            <Banner />
            <div className='mx-auto max-w-7xl px-4 py-10'>
                <h2 className='mb-6 text-2xl font-semibold text-gray-800'>Sản phẩm nổi bật</h2>
                <ProductList />
            </div>
        </div>
    );
};

export default HomePage;
