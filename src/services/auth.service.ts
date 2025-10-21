import instance from '~/configs/axios';
import { IUser } from '~/@types/user.type';

export interface RegisterPayload {
    userName: string;
    email: string;
    password: string;
    phone: string;
}

export interface LoginPayload {
    email: string;
    password: string;
}

export interface AuthResponse {
    statusCode: number;
    message: string;
    data: {
        user: IUser;
        accessToken: string;
    };
}

export interface RegisterResponse {
    statusCode: number;
    message: string;
    data: IUser;
}

export const authService = {
    // Đăng ký tài khoản mới
    register: async (payload: RegisterPayload): Promise<RegisterResponse> => {
        const response = await instance.post<RegisterResponse>('/auth/register', payload);
        return response.data;
    },

    // Đăng nhập
    login: async (payload: LoginPayload): Promise<AuthResponse> => {
        const response = await instance.post<AuthResponse>('/auth/login', payload);
        return response.data;
    },

    // Đăng xuất (xóa token khỏi localStorage)
    logout: () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user');
    },
};
