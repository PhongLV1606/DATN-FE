import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Xử lý đăng nhập ở đây
        console.log('Login:', { email, password });
    };

    return (
        <div className='bg-background flex min-h-screen items-center justify-center p-4'>
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

                            <Button type='submit' className='w-full'>
                                Đăng nhập
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
    );
}
