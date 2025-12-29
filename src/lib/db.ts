import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Only initialize Prisma if DATABASE_URL is available
export const prisma = process.env.DATABASE_URL
  ? (globalForPrisma.prisma ??
    new PrismaClient({
      log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    }))
  : null as any;

if (process.env.NODE_ENV !== 'production' && process.env.DATABASE_URL) {
  globalForPrisma.prisma = prisma;
}
