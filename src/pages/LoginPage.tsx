import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { Eye, EyeOff, Mail, Lock, Smartphone } from 'lucide-react';
import { authService } from '~/services/auth.service';
import { setAccessToken, setUserInfo } from '~/configs/axios';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await authService.login({ email, password });

            setAccessToken(response.data.accessToken);
            setUserInfo(response.data.user);

            message.success(response.message || 'Đăng nhập thành công!');

            setTimeout(() => {
                navigate('/');
            }, 1000);
        } catch (error: any) {
            console.error('Login error:', error);
            const errorMessage = error?.response?.data?.message || 'Đăng nhập thất bại. Vui lòng thử lại!';
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

            {/* Right Side - Login Form */}
            <div className='flex w-full flex-col items-center justify-center p-4 lg:w-1/2'>
                <div className='w-full max-w-md'>
                    <div className='mb-8 text-center'>
                        <h1 className='text-foreground mb-2 text-3xl font-bold'>Chào mừng trở lại</h1>
                        <p className='text-muted-foreground'>Đăng nhập để tiếp tục</p>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Đăng nhập</CardTitle>
                            <CardDescription>Nhập email và mật khẩu của bạn để đăng nhập</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className='space-y-4'>
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
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className='pl-10'
                                            required
                                        />
                                    </div>
                                </div>

                                <div className='space-y-2'>
                                    <div className='flex items-center justify-between'>
                                        <label htmlFor='password' className='text-foreground text-sm font-medium'>
                                            Mật khẩu
                                        </label>
                                        <Link to='/forgot-password' className='text-primary text-sm hover:underline'>
                                            Quên mật khẩu?
                                        </Link>
                                    </div>
                                    <div className='relative'>
                                        <Lock className='text-muted-foreground absolute left-3 top-1/2 size-4 -translate-y-1/2' />
                                        <Input
                                            id='password'
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder='••••••••'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className='pl-10 pr-10'
                                            required
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

                                <Button type='submit' className='w-full' disabled={isLoading}>
                                    {isLoading ? 'Đang đăng nhập...' : 'Đăng nhập'}
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
                                    <span className='text-muted-foreground'>Chưa có tài khoản? </span>
                                    <Link to='/register' className='text-primary font-medium hover:underline'>
                                        Đăng ký ngay
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
