import { useState, useEffect } from 'react';

const slides = [
    {
        id: 1,
        image: '/images/banner1.png',
        title: 'Khám phá thế giới công nghệ!',
        subtitle: 'Các sản phẩm mới nhất đang chờ bạn 🔥',
    },
    {
        id: 2,
        image: '/images/banner2.png',
        title: 'Ưu đãi cực khủng!',
        subtitle: 'Giảm giá đến 50% cho khách hàng thân thiết 💸',
    },
    {
        id: 3,
        image: '/images/banner3.png',
        title: 'Mua sắm dễ dàng hơn bao giờ hết',
        subtitle: 'Giao hàng siêu tốc & hỗ trợ 24/7 🚚',
    },
];

const Banner = () => {
    const [current, setCurrent] = useState(0);

    // Tự động chuyển slide sau mỗi 4 giây
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className='relative w-full overflow-hidden'>
            {/* Slides container */}
            <div
                className='flex transition-transform duration-700 ease-in-out'
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((slide) => (
                    <div key={slide.id} className='relative h-[400px] min-w-full sm:h-[500px] md:h-[600px]'>
                        <img src={slide.image} alt={slide.title} className='h-full w-full object-cover' />
                        {/* Overlay nội dung */}
                        <div className='absolute inset-0 flex flex-col items-center justify-center bg-black/40 px-4 text-center text-white'>
                            <h2 className='mb-3 text-3xl font-bold drop-shadow-lg sm:text-4xl md:text-5xl'>
                                {slide.title}
                            </h2>
                            <p className='text-lg sm:text-xl'>{slide.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dots */}
            <div className='absolute bottom-5 left-0 right-0 flex justify-center gap-3'>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-3 w-3 rounded-full transition-all ${
                            current === index ? 'scale-125 bg-white' : 'bg-white/50'
                        }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Banner;
