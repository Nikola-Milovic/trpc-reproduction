import { TRPCError, initTRPC } from "@trpc/server";
import superjson from "superjson";
import { Context } from './context'

export const trpc = initTRPC.context<Context>().create({
    transformer: superjson,
    errorFormatter: ({ error, type, path, input, ctx }) => {
        console.error("ERROR OCCURED: %o", error.message);
    },
});

export const isAuthed = trpc.middleware(({ ctx, next }) => {
    if (!ctx.user) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    return next({
        ctx: {
            user: ctx.user,
        },
    });
});

export const protectedProcedure = trpc.procedure.use(isAuthed);
