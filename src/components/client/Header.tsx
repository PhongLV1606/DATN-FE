import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaShoppingCart, FaUserCircle, FaSearch, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Header = () => {
    const [openDropdown, setOpenDropdown] = useState(false);

    return (
        <header className='sticky top-0 z-50 bg-white shadow-md'>
            {/* Thanh thông tin nhỏ trên cùng */}
            <div className='bg-blue-600 py-2 text-sm text-white'>
                <div className='mx-auto flex max-w-7xl items-center justify-between px-4'>
                    <div className='flex items-center gap-4'>
                        <span className='flex items-center gap-1'>
                            <FaEnvelope /> support@wd58.vn
                        </span>
                        <span className='flex items-center gap-1'>
                            <FaMapMarkerAlt /> Hà Nội, Việt Nam
                        </span>
                    </div>
                    <span>Miễn phí giao hàng cho đơn từ 500K 🎉</span>
                </div>
            </div>

            {/* Thanh header chính */}
            <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-3'>
                {/* Logo */}
                <Link to='/' className='flex items-center gap-2 text-2xl font-bold text-blue-700'>
                    <img src='/images/logo.png' alt='Logo WD58' className='h-8 w-8 object-contain' />
                    WD58
                </Link>

                {/* Menu điều hướng */}
                <nav className='hidden space-x-8 font-medium text-gray-700 md:flex'>
                    <Link to='/' className='hover:text-blue-600'>
                        Trang chủ
                    </Link>
                    <Link to='/products/1' className='hover:text-blue-600'>
                        Sản phẩm
                    </Link>
                    <Link to='/about' className='hover:text-blue-600'>
                        Giới thiệu
                    </Link>
                    <Link to='/contact' className='hover:text-blue-600'>
                        Liên hệ
                    </Link>
                </nav>

                {/* Icon */}
                <div className='flex items-center gap-5 text-gray-700'>
                    <FaSearch className='cursor-pointer text-xl hover:text-blue-600' />
                    <FaShoppingCart className='cursor-pointer text-xl hover:text-blue-600' />

                    {/* Dropdown user */}
                    <div className='relative'>
                        <FaUserCircle
                            className='cursor-pointer text-2xl hover:text-blue-600'
                            onClick={() => setOpenDropdown(!openDropdown)}
                        />
                        {openDropdown && (
                            <div className='absolute right-0 z-50 mt-2 w-44 rounded-md border bg-white py-2 shadow-lg'>
                                <Link to='/profile' className='block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50'>
                                    Trang cá nhân
                                </Link>
                                <Link to='/orders' className='block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50'>
                                    Đơn hàng
                                </Link>
                                <hr className='my-1' />
                                <Link to='/login' className='block px-4 py-2 text-sm text-red-600 hover:bg-red-50'>
                                    Đăng xuất
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
