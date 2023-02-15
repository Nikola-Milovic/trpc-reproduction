import { inferAsyncReturnType } from "@trpc/server";
import type { NodeHTTPCreateContextFnOptions } from "@trpc/server/adapters/node-http";

import { IncomingMessage, ServerResponse } from "http";

export const sessionContext = async ({}: NodeHTTPCreateContextFnOptions<IncomingMessage, ServerResponse>) => {
    try {
        return {
            user: {
            },
        };
    } catch (error) {
        return {};
    }
};

export type Context = inferAsyncReturnType<typeof sessionContext>;
