import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Dashboard from '@/components/Dashboard';
import Layout from './Layout';
import DashUsers from '@/components/DashUsers';
import DashLeaderboard from '@/components/DashLeaderboard';
import DashBanners from '@/components/DashBanners';
import DashTransactions from '@/components/DashTransactions';
import DashWithDrawl from '@/components/DashWithDrawl';
import DashBlocked from '@/components/DashBlocked';
import DashHelp from '@/components/DashHelp';

type TabType = 'dashboard' | 'users' | 'leaderboard' | 'banners' | 'transactions' | 'withdrawl' | 'blocked' | 'help' | '';

const Home: React.FC = () => {
    const location = useLocation();
    const [tab, setTab] = useState<TabType>('dashboard');

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');
        
        if (tabFromUrl && ['dashboard', 'users', 'leaderboard', 'banners', 'transactions', 'withdrawl', 'blocked', 'help'].includes(tabFromUrl)) {
            setTab(tabFromUrl as TabType);
        } else {
            setTab('dashboard');
        }
        
        console.log(tabFromUrl);
    }, [location.search]);

    return (
        <Layout>
            {tab === 'dashboard' && <Dashboard />}
            {tab === 'users' && <DashUsers />}
            {tab === 'leaderboard' && <DashLeaderboard />}
            {tab === 'banners' && <DashBanners />}
            {tab === 'transactions' && <DashTransactions />}
            {tab === 'withdrawl' && <DashWithDrawl />}
            {tab === 'blocked' && <DashBlocked />}
            {tab === 'help' && <DashHelp />}
        </Layout>
    );
};

export default Home;
