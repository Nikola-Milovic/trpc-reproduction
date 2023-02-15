import z from "zod";
import * as trpcExpress from '@trpc/server/adapters/express';
import { sessionContext } from './context'
import { trpc } from './trpc'
import { TRPCError } from "@trpc/server";

const appRouter = trpc.router({
    hello: trpc.procedure.input(z.string().nullish()).query(({ input, ctx }) => {
        console.log("received, %v", input)
        throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: `failed to hello`,
            cause: Error("failed to hello"),
        });
    }),
});


export default (app) => {
    app.use(
        "/trpc",
        trpcExpress.createExpressMiddleware({
            router: appRouter,
            createContext: sessionContext,
        })
    );
};

export type AppRouter = typeof appRouter;
