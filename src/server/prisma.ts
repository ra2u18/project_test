import { PrismaClient } from '@prisma/client';
import { config } from './config/default';

const prismaGlobal = global as typeof global & {
  prisma?: PrismaClient;
};

export const prisma: PrismaClient =
  prismaGlobal.prisma ||
  new PrismaClient({
    log:
      config.NODE_ENV === 'development'
        ? ['query', 'error', 'warn']
        : ['error'],
  });

if (config.NODE_ENV !== 'production') {
  prismaGlobal.prisma = prisma;
}
