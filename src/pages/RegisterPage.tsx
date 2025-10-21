import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { Eye, EyeOff, Mail, Lock, User, Phone, Smartphone } from 'lucide-react';
import { authService } from '~/services/auth.service';

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });
    const navigate = useNavigate();

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            message.error('Mật khẩu xác nhận không khớp!');
            return;
        }

        setIsLoading(true);

        try {
            const { confirmPassword, ...registerData } = formData;
            const response = await authService.register(registerData);

            message.success(response.message || 'Đăng ký thành công!');

            setTimeout(() => {
                navigate('/login');
            }, 1500);
        } catch (error: any) {
            console.error('Register error:', error);
            const errorMessage = error?.response?.data?.message || 'Đăng ký thất bại. Vui lòng thử lại!';
            message.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='bg-background flex min-h-screen'>
            {/* Left Side - Image and Branding */}
            <div className='bg-primary/5 hidden w-1/2 flex-col items-center justify-center p-12 lg:flex'>
                <div className='mb-8 text-center'>
                    <div className='mb-4 flex items-center justify-center gap-3'>
                        <Smartphone className='text-primary size-12' />
                        <h2 className='text-foreground text-4xl font-bold'>TechStore</h2>
                    </div>
                    <p className='text-muted-foreground mb-8 text-xl font-medium'>Công nghệ trong tầm tay bạn</p>
                </div>

                <div className='relative'>
                    <div className='bg-primary/10 absolute inset-0 -rotate-6 rounded-3xl'></div>
                    <div className='relative rounded-3xl bg-white p-8 shadow-2xl'>
                        <img
                            src='https://cdn.mediamart.vn/images/product/apple-iphone-17-pro-max-256gb-cam-vu-tru_c6f8b672.webp'
                            alt='iPhone 17 Pro Max'
                            className='h-auto w-full max-w-sm rounded-2xl object-cover'
                        />
                    </div>
                </div>

                <div className='mt-8 text-center'>
                    <p className='text-muted-foreground text-lg italic'>
                        &ldquo;Trải nghiệm đỉnh cao với iPhone 17 Pro Max&rdquo;
                    </p>
                </div>
            </div>

            {/* Right Side - Registration Form */}
            <div className='flex w-full flex-col items-center justify-center p-4 lg:w-1/2'>
                <div className='w-full max-w-md'>
                    <div className='mb-8 text-center'>
                        <h1 className='text-foreground mb-2 text-3xl font-bold'>Tạo tài khoản</h1>
                        <p className='text-muted-foreground'>Đăng ký để bắt đầu sử dụng dịch vụ</p>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Đăng ký</CardTitle>
                            <CardDescription>Điền thông tin để tạo tài khoản mới</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className='space-y-4'>
                                <div className='space-y-2'>
                                    <label htmlFor='name' className='text-foreground text-sm font-medium'>
                                        Họ và tên
                                    </label>
                                    <div className='relative'>
                                        <User className='text-muted-foreground absolute left-3 top-1/2 size-4 -translate-y-1/2' />
                                        <Input
                                            id='name'
                                            type='text'
                                            placeholder='Nguyễn Văn A'
                                            value={formData.userName}
                                            onChange={(e) => handleChange('userName', e.target.value)}
                                            className='pl-10'
                                            required
                                        />
                                    </div>
                                </div>

                                <div className='space-y-2'>
                                    <label htmlFor='email' className='text-foreground text-sm font-medium'>
                                        Email
                                    </label>
                                    <div className='relative'>
                                        <Mail className='text-muted-foreground absolute left-3 top-1/2 size-4 -translate-y-1/2' />
                                        <Input
                                            id='email'
                                            type='email'
                                            placeholder='name@example.com'
                                            value={formData.email}
                                            onChange={(e) => handleChange('email', e.target.value)}
                                            className='pl-10'
                                            required
                                        />
                                    </div>
                                </div>

                                <div className='space-y-2'>
                                    <label htmlFor='phone' className='text-foreground text-sm font-medium'>
                                        Số điện thoại
                                    </label>
                                    <div className='relative'>
                                        <Phone className='text-muted-foreground absolute left-3 top-1/2 size-4 -translate-y-1/2' />
                                        <Input
                                            id='phone'
                                            type='tel'
                                            placeholder='0123456789'
                                            value={formData.phone}
                                            onChange={(e) => handleChange('phone', e.target.value)}
                                            className='pl-10'
                                            required
                                            pattern='[0-9]{10,11}'
                                        />
                                    </div>
                                </div>

                                <div className='space-y-2'>
                                    <label htmlFor='password' className='text-foreground text-sm font-medium'>
                                        Mật khẩu
                                    </label>
                                    <div className='relative'>
                                        <Lock className='text-muted-foreground absolute left-3 top-1/2 size-4 -translate-y-1/2' />
                                        <Input
                                            id='password'
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder='••••••••'
                                            value={formData.password}
                                            onChange={(e) => handleChange('password', e.target.value)}
                                            className='pl-10 pr-10'
                                            required
                                            minLength={6}
                                        />
                                        <button
                                            type='button'
                                            onClick={() => setShowPassword(!showPassword)}
                                            className='text-muted-foreground hover:text-foreground absolute right-3 top-1/2 -translate-y-1/2 transition-colors'
                                        >
                                            {showPassword ? <EyeOff className='size-4' /> : <Eye className='size-4' />}
                                        </button>
                                    </div>
                                </div>

                                <div className='space-y-2'>
                                    <label htmlFor='confirmPassword' className='text-foreground text-sm font-medium'>
                                        Xác nhận mật khẩu
                                    </label>
                                    <div className='relative'>
                                        <Lock className='text-muted-foreground absolute left-3 top-1/2 size-4 -translate-y-1/2' />
                                        <Input
                                            id='confirmPassword'
                                            type={showConfirmPassword ? 'text' : 'password'}
                                            placeholder='••••••••'
                                            value={formData.confirmPassword}
                                            onChange={(e) => handleChange('confirmPassword', e.target.value)}
                                            className='pl-10 pr-10'
                                            required
                                            minLength={6}
                                        />
                                        <button
                                            type='button'
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className='text-muted-foreground hover:text-foreground absolute right-3 top-1/2 -translate-y-1/2 transition-colors'
                                        >
                                            {showConfirmPassword ? (
                                                <EyeOff className='size-4' />
                                            ) : (
                                                <Eye className='size-4' />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                <div className='text-muted-foreground text-xs'>
                                    Bằng cách đăng ký, bạn đồng ý với{' '}
                                    <Link to='/terms' className='text-primary hover:underline'>
                                        Điều khoản dịch vụ
                                    </Link>{' '}
                                    và{' '}
                                    <Link to='/privacy' className='text-primary hover:underline'>
                                        Chính sách bảo mật
                                    </Link>
                                </div>

                                <Button type='submit' className='w-full' disabled={isLoading}>
                                    {isLoading ? 'Đang đăng ký...' : 'Đăng ký'}
                                </Button>
                            </form>

                            <div className='mt-6'>
                                <div className='relative'>
                                    <div className='absolute inset-0 flex items-center'>
                                        <div className='border-border w-full border-t'></div>
                                    </div>
                                    <div className='relative flex justify-center text-sm'>
                                        <span className='bg-card text-muted-foreground px-2'>Hoặc</span>
                                    </div>
                                </div>

                                <div className='mt-6 text-center text-sm'>
                                    <span className='text-muted-foreground'>Đã có tài khoản? </span>
                                    <Link to='/login' className='text-primary font-medium hover:underline'>
                                        Đăng nhập ngay
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
