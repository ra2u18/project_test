import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { CreateNextContextOptions } from '@trpc/server/adapters/next';

import { prisma } from './prisma';

interface CreateInnerContextOptions extends Partial<CreateNextContextOptions> {
  session: null | undefined;
}

export async function createContextInner(_opts?: CreateInnerContextOptions) {
  return { prisma };
}

export async function createContext(opts?: trpcNext.CreateNextContextOptions) {
  const { prisma } = await createContextInner();
  return { prisma, req: opts?.req, res: opts?.res };
}

export type Context = trpc.inferAsyncReturnType<typeof createContextInner>;
