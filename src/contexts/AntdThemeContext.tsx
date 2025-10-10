import { ConfigProvider, theme } from 'antd';
import type { ReactNode } from 'react';
import Loader from '~/components/Loader';
import { useAntdTheme } from '~/stores/ThemeAntd';
// import Loader from '@talab/ui/modules/common/loader/index';

export default function AntdThemeContext({ children }: { children: ReactNode }) {
    const isDark = useAntdTheme((state) => state.isDark);
    return (
        <ConfigProvider
            spin={{
                indicator: <Loader />,
            }}
            theme={{
                cssVar: true,
                algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
                token: {
                    colorPrimary: '#ff6a35',
                    colorInfo: '#ff6a35',
                    wireframe: false,
                    sizeStep: 5,
                    sizeUnit: 2,
                    fontSize: 12,
                    colorLink: '#ff6a35',
                    colorLinkHover: '#ff8a5b',
                    linkHoverDecoration: 'underline',
                    linkDecoration: 'wavy',
                },
            }}
        >
            {children}
        </ConfigProvider>
    );
}
