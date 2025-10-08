import * as React from 'react';
import {
    IconChartBar,
    IconDashboard,
    IconDatabase,
    IconFolder,
    IconListDetails,
    IconReport,
    IconTags,
    IconUsers,
} from '@tabler/icons-react';
import { Sidebar, SidebarContent, SidebarFooter } from '~/components/ui/sidebar';
import { NavMain } from '~/components/NavMain';
import { NavDocuments } from '~/components/NavDocument';
import { NavUser } from '~/components/NavUser';

const data = {
    navMain: [
        {
            title: 'Dashboard',
            url: '/admin',
            icon: IconDashboard,
        },
        {
            title: 'Blog',
            url: '/admin/post',
            icon: IconListDetails,
        },
        {
            title: 'Phân tích',
            url: '/admin/analytic',
            icon: IconChartBar,
        },
        {
            title: 'Dự án',
            url: '/admin/project',
            icon: IconFolder,
        },
        {
            title: 'Thành viên',
            url: '/admin/user',
            icon: IconUsers,
        },
        {
            title: 'Thẻ',
            url: '/admin/tag',
            icon: IconTags,
        },
    ],

    documents: [
        {
            name: 'Thư viện Dữ liệu',
            url: '/admin/data-library',
            icon: IconDatabase,
        },
        {
            name: 'Logging',
            url: '/admin/logging',
            icon: IconReport,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const user = {
        name: 'name',
        email: 'm@example.com',
        avatar: '',
    };
    return (
        <Sidebar collapsible='offcanvas' {...props}>
            <SidebarContent>
                <NavMain items={data.navMain} />
                <NavDocuments items={data.documents} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={user} />
            </SidebarFooter>
        </Sidebar>
    );
}
