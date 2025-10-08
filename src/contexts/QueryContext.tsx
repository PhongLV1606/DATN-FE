import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: true,
            retry: 3,
            staleTime: 0,
            refetchInterval: 10000 * 60,
        },
    },
});

export const QueryContext = ({ children }: { children?: React.ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
    );
};
