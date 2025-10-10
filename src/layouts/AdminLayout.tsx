import { Outlet } from 'react-router-dom';
import { SidebarInset, SidebarProvider } from '~/components/ui/sidebar';
import { SiteHeader } from '~/components/SideHeader';
import { AppSidebar } from '~/components/Sidebar';
import { Suspense } from '~/routes/lazy';

export default function AdminLayout() {
    return (
        <SidebarProvider
            style={
                {
                    '--sidebar-width': 'calc(var(--spacing) * 72)',
                    '--header-height': 'calc(var(--spacing) * 12)',
                } as React.CSSProperties
            }
        >
            <AppSidebar variant='inset' />
            <SidebarInset>
                <SiteHeader />
                <div className='flex flex-1 flex-col'>
                    <div className='@container/main flex flex-1 flex-col gap-2'>
                        <div className='flex flex-col gap-4 py-4 md:gap-6 md:py-6'>
                            <div className='px-4 lg:px-6'>
                                <Suspense>
                                    <Outlet />
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
