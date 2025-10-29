const dummyProducts = [
    { id: 1, name: 'iPhone 15 Pro', price: 27990000, image: 'https://via.placeholder.com/300x200' },
    { id: 2, name: 'Samsung S24 Ultra', price: 25990000, image: 'https://via.placeholder.com/300x200' },
    { id: 3, name: 'Xiaomi 14', price: 18990000, image: 'https://via.placeholder.com/300x200' },
];

const ProductList = () => {
    return (
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
            {dummyProducts.map((product) => (
                <div key={product.id} className='rounded-lg bg-white p-4 shadow-md transition-shadow hover:shadow-lg'>
                    <img src={product.image} alt={product.name} className='h-48 w-full rounded-md object-cover' />
                    <h3 className='mt-4 text-lg font-semibold'>{product.name}</h3>
                    <p className='mt-2 font-bold text-blue-600'>{product.price.toLocaleString()}₫</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
