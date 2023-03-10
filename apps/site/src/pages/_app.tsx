import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from '@trpc/client';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { trpc } from "@/trpc";
import { useState } from "react";
import superjson from "superjson";

const API_URL = "http://localhost:3000";

function MyApp({ Component, pageProps }: any) {
    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() =>
        trpc.createClient({
            transformer: superjson,
            links: [
                httpBatchLink({
                    url: API_URL + '/trpc',
                }),
            ],
        }),
    );

    return (

        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                    <Component {...pageProps} />
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </trpc.Provider>
    );
}

export default MyApp;
