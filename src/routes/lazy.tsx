import { Loader } from 'lucide-react';
import React from 'react';

// @suspense
export const Suspense = ({ children }: { children: React.ReactNode }) => {
    return <React.Suspense fallback={<Loader />}>{children}</React.Suspense>;
};
