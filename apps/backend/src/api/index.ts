import z from "zod";
import * as trpcExpress from '@trpc/server/adapters/express';
import { sessionContext } from './context'
import { trpc } from './trpc'
import { TRPCError } from "@trpc/server";

const appRouter = trpc.router({
    hello: trpc.procedure.query(() => {
        throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: 'An unexpected error occurred, please try again later.',
        });
    }),
});


export default (app: any) => {
    app.use(
        "/trpc",
        trpcExpress.createExpressMiddleware({
            router: appRouter,
            createContext: sessionContext,
        })
    );
};

export type AppRouter = typeof appRouter;
