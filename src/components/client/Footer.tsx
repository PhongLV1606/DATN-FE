const Footer = () => {
    return (
        <footer className='mt-10 bg-gray-900 py-6 text-gray-300'>
            <div className='mx-auto max-w-7xl text-center text-sm'>
                © {new Date().getFullYear()} MyShop. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
