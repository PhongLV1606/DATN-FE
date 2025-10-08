import { Suspense } from '~/routes/lazy';
import privateRoutes from '~/routes/privateRoutes';
import publicRoutes from '~/routes/publicRoutes';

const rootRoutes = [...publicRoutes, ...privateRoutes].map((route) => {
    route.children = route.children?.map((child) => {
        if (child.element) {
            child.element = <Suspense>{child.element}</Suspense>;
        }
        return child;
    });
    return route;
});

export default rootRoutes;
