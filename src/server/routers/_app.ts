import { TRPCError } from '@trpc/server';
import { prisma } from '../prisma';
import { publicProcedure, router } from '../trpc';

export const appRouter = router({
  healthcheck: publicProcedure.query(async () => {
      throw new TRPCError({ code: 'BAD_REQUEST' });
  }),
});

export type AppRouter = typeof appRouter;
