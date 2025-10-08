import { useSiteTitleStore } from '~/stores/SiteTitle';

const DashboardPage = () => {
    const setTitle = useSiteTitleStore((state) => state.setSiteTitle);

    setTitle('Dashboard');
    return <div>DashboardPage</div>;
};

export default DashboardPage;
