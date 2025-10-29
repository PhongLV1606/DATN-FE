import { Check, Heart, Minus, Plus, RotateCcw, Shield, ShoppingCart, Star, Truck } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import { Card, CardContent } from '~/components/ui/card';
import { Separator } from '~/components/ui/separator';

export default function ProductDetailPage() {
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState('silver');
    const [selectedStorage, setSelectedStorage] = useState('256GB');
    const [isFavorite, setIsFavorite] = useState(false);

    const product = {
        id: 1,
        name: 'iPhone 15 Pro Max',
        price: 29990000,
        originalPrice: 34990000,
        discount: 14,
        rating: 4.8,
        reviews: 1234,
        inquantity: true,
        images: [
            'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=80',
            'https://images.unsplash.com/photo-1695048133082-ff8e5e3a6c0f?w=800&q=80',
            'https://images.unsplash.com/photo-1695048133143-22070f6748e5?w=800&q=80',
            'https://images.unsplash.com/photo-1695048133144-d0b80b0df3d3?w=800&q=80',
        ],
        colors: [
            { name: 'Titan Tự Nhiên', value: 'natural', hex: '#E5E5E5' },
            { name: 'Titan Xanh', value: 'blue', hex: '#5F6F7A' },
            { name: 'Titan Trắng', value: 'white', hex: '#F5F5F0' },
            { name: 'Titan Đen', value: 'black', hex: '#3A3A3C' },
        ],
        storage: ['128GB', '256GB', '512GB', '1TB'],
        description:
            'iPhone 15 Pro Max là đỉnh cao của công nghệ smartphone với chip A17 Pro mạnh mẽ, camera 48MP tiên tiến và thiết kế titan cao cấp.',
        features: [
            'Chip A17 Pro với hiệu năng vượt trội',
            'Camera chính 48MP với zoom quang học 5x',
            'Màn hình Super Retina XDR 6.7 inch',
            'Khung viền titan chuẩn hàng không vũ trụ',
            'Nút Action có thể tùy chỉnh',
            'Hỗ trợ sạc nhanh USB-C',
        ],
        specifications: [
            { label: 'Màn hình', value: '6.7" Super Retina XDR' },
            { label: 'Chip', value: 'A17 Pro' },
            { label: 'Camera sau', value: '48MP + 12MP + 12MP' },
            { label: 'Camera trước', value: '12MP TrueDepth' },
            { label: 'Pin', value: 'Sử dụng cả ngày' },
            { label: 'Hệ điều hành', value: 'iOS 17' },
        ],
    };

    const handleQuantityChange = (type: 'increase' | 'decrease') => {
        if (type === 'increase') {
            setQuantity((prev) => prev + 1);
        } else if (type === 'decrease' && quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(price);
    };

    return (
        <div className='bg-background min-h-screen'>
            <div className='border-border border-b'>
                <div className='container mx-auto px-4 py-4'>
                    <div className='flex items-center gap-2 text-sm'>
                        <Link to='/' className='text-muted-foreground hover:text-foreground'>
                            Trang chủ
                        </Link>
                        <span className='text-muted-foreground'>/</span>
                        <Link to='/products' className='text-muted-foreground hover:text-foreground'>
                            Sản phẩm
                        </Link>
                        <span className='text-muted-foreground'>/</span>
                        <span className='text-foreground'>{product.name}</span>
                    </div>
                </div>
            </div>

            <div className='container mx-auto px-4 py-8'>
                <div className='grid gap-8 lg:grid-cols-2'>
                    <div className='space-y-4'>
                        <div className='bg-accent/30 relative overflow-hidden rounded-2xl'>
                            <img
                                src={product.images[selectedImage]}
                                alt={product.name}
                                className='h-auto w-full object-cover'
                            />
                            {product.discount > 0 && (
                                <Badge className='absolute left-4 top-4' variant='destructive'>
                                    -{product.discount}%
                                </Badge>
                            )}
                            <button
                                onClick={() => setIsFavorite(!isFavorite)}
                                className='bg-background/80 hover:bg-background absolute right-4 top-4 rounded-full p-2 transition-colors'
                            >
                                <Heart
                                    className={`size-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-foreground'}`}
                                />
                            </button>
                        </div>

                        <div className='grid grid-cols-4 gap-2'>
                            {product.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`border-border hover:border-primary overflow-hidden rounded-lg border-2 transition-all ${
                                        selectedImage === index
                                            ? 'border-primary ring-primary ring-2 ring-offset-2'
                                            : ''
                                    }`}
                                >
                                    <img
                                        src={image}
                                        alt={`${product.name} ${index + 1}`}
                                        className='h-auto w-full object-cover'
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className='space-y-6'>
                        <div>
                            <h1 className='text-foreground mb-2 text-3xl font-bold'>{product.name}</h1>
                            <div className='flex items-center gap-4'>
                                <div className='flex items-center gap-1'>
                                    <div className='flex'>
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`size-4 ${
                                                    i < Math.floor(product.rating)
                                                        ? 'fill-yellow-400 text-yellow-400'
                                                        : 'text-muted-foreground'
                                                }`}
                                            />
                                        ))}
                                    </div>
                                    <span className='text-foreground text-sm font-medium'>{product.rating}</span>
                                </div>
                                <Separator orientation='vertical' className='h-4' />
                                <span className='text-muted-foreground text-sm'>{product.reviews} đánh giá</span>
                                <Separator orientation='vertical' className='h-4' />
                                <Badge variant={product.inquantity ? 'default' : 'destructive'}>
                                    {product.inquantity ? 'Còn hàng' : 'Hết hàng'}
                                </Badge>
                            </div>
                        </div>

                        <Separator />

                        <div>
                            <div className='flex items-baseline gap-3'>
                                <span className='text-primary text-4xl font-bold'>{formatPrice(product.price)}</span>
                                {product.originalPrice > product.price && (
                                    <span className='text-muted-foreground text-xl line-through'>
                                        {formatPrice(product.originalPrice)}
                                    </span>
                                )}
                            </div>
                            <p className='text-muted-foreground mt-2 text-sm'>Đã bao gồm VAT</p>
                        </div>

                        <Separator />

                        <div>
                            <h3 className='text-foreground mb-3 font-semibold'>Màu sắc: {selectedColor}</h3>
                            <div className='flex flex-wrap gap-2'>
                                {product.colors.map((color) => (
                                    <button
                                        key={color.value}
                                        onClick={() => setSelectedColor(color.value)}
                                        className={`border-border hover:border-primary flex items-center gap-2 rounded-lg border-2 px-4 py-2 transition-all ${
                                            selectedColor === color.value
                                                ? 'border-primary ring-primary ring-2 ring-offset-2'
                                                : ''
                                        }`}
                                    >
                                        <span
                                            className='size-5 rounded-full border'
                                            style={{ backgroundColor: color.hex }}
                                        ></span>
                                        <span className='text-sm'>{color.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className='text-foreground mb-3 font-semibold'>Dung lượng</h3>
                            <div className='grid grid-cols-4 gap-2'>
                                {product.storage.map((storage) => (
                                    <button
                                        key={storage}
                                        onClick={() => setSelectedStorage(storage)}
                                        className={`border-border hover:border-primary rounded-lg border-2 py-3 text-center transition-all ${
                                            selectedStorage === storage
                                                ? 'border-primary bg-primary/5 ring-primary ring-2 ring-offset-2'
                                                : ''
                                        }`}
                                    >
                                        <span className='text-foreground font-medium'>{storage}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <Separator />

                        <div>
                            <h3 className='text-foreground mb-3 font-semibold'>Số lượng</h3>
                            <div className='flex items-center gap-4'>
                                <div className='border-border flex items-center rounded-lg border'>
                                    <button
                                        onClick={() => handleQuantityChange('decrease')}
                                        className='hover:bg-accent p-3 transition-colors disabled:opacity-50'
                                        disabled={quantity <= 1}
                                    >
                                        <Minus className='size-4' />
                                    </button>
                                    <span className='text-foreground w-12 text-center font-semibold'>{quantity}</span>
                                    <button
                                        onClick={() => handleQuantityChange('increase')}
                                        className='hover:bg-accent p-3 transition-colors'
                                    >
                                        <Plus className='size-4' />
                                    </button>
                                </div>
                                <span className='text-muted-foreground text-sm'>Còn 50 sản phẩm</span>
                            </div>
                        </div>

                        <div className='flex gap-3'>
                            <Button size='lg' className='flex-1' disabled={!product.inquantity}>
                                <ShoppingCart className='mr-2 size-5' />
                                Thêm vào giỏ
                            </Button>
                            <Button size='lg' variant='outline' className='flex-1' disabled={!product.inquantity}>
                                Mua ngay
                            </Button>
                        </div>

                        <Card>
                            <CardContent className='grid gap-4 p-4 sm:grid-cols-3'>
                                <div className='flex items-center gap-3'>
                                    <div className='bg-primary/10 text-primary rounded-full p-2'>
                                        <Truck className='size-5' />
                                    </div>
                                    <div>
                                        <p className='text-foreground text-sm font-medium'>Miễn phí vận chuyển</p>
                                        <p className='text-muted-foreground text-xs'>Đơn hàng từ 500K</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <div className='bg-primary/10 text-primary rounded-full p-2'>
                                        <Shield className='size-5' />
                                    </div>
                                    <div>
                                        <p className='text-foreground text-sm font-medium'>Bảo hành 12 tháng</p>
                                        <p className='text-muted-foreground text-xs'>Chính hãng Apple</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <div className='bg-primary/10 text-primary rounded-full p-2'>
                                        <RotateCcw className='size-5' />
                                    </div>
                                    <div>
                                        <p className='text-foreground text-sm font-medium'>Đổi trả 30 ngày</p>
                                        <p className='text-muted-foreground text-xs'>Miễn phí đổi trả</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className='mt-12'>
                    <Card>
                        <CardContent className='p-6'>
                            <div className='grid gap-8 lg:grid-cols-2'>
                                <div>
                                    <h2 className='text-foreground mb-4 text-2xl font-bold'>Mô tả sản phẩm</h2>
                                    <p className='text-muted-foreground mb-6 leading-relaxed'>{product.description}</p>
                                    <h3 className='text-foreground mb-3 text-lg font-semibold'>Tính năng nổi bật</h3>
                                    <ul className='space-y-2'>
                                        {product.features.map((feature, index) => (
                                            <li key={index} className='flex items-start gap-2'>
                                                <Check className='text-primary mt-0.5 size-5 shrink-0' />
                                                <span className='text-muted-foreground'>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h2 className='text-foreground mb-4 text-2xl font-bold'>Thông số kỹ thuật</h2>
                                    <div className='space-y-3'>
                                        {product.specifications.map((spec, index) => (
                                            <div
                                                key={index}
                                                className='border-border flex justify-between border-b pb-3 last:border-0'
                                            >
                                                <span className='text-muted-foreground font-medium'>{spec.label}</span>
                                                <span className='text-foreground'>{spec.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
