import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            // eslint-disable-next-line no-alert
            alert('Mật khẩu xác nhận không khớp!');
            return;
        }
        console.log('Register:', formData);
    };

    return (
        <div className='bg-background flex min-h-screen items-center justify-center p-4'>
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
                                        value={formData.name}
                                        onChange={(e) => handleChange('name', e.target.value)}
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

                            <Button type='submit' className='w-full'>
                                Đăng ký
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
    );
}
