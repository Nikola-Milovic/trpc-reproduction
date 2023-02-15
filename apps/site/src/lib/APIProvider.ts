import type { AppRouter } from "@example/backend/src/api";
export type { AppRouter } from "@example/backend/src/api";
import { createTRPCReact } from "@trpc/react-query";

export const trpc = createTRPCReact<AppRouter>();
