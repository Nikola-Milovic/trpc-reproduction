import type { AppRouter } from "@example/backend/src/server";
export type { AppRouter } from "@example/backend/src/server";
import { createTRPCReact } from "@trpc/react-query";

export const trpc = createTRPCReact<AppRouter>();
