import { useRoutes } from 'react-router-dom';
import rootRoutes from '~/routes/routes';

const App = () => {
    const router = useRoutes(rootRoutes);
    return router;
};
export default App;
