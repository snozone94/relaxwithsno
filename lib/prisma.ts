import { PrismaClient } from '@prisma/client';

/**
 * Singleton Prisma client.
 *
 * Using a single Prisma client instance across API routes prevents
 * exhausting database connections during development and in serverless
 * environments. The client is lazily instantiated when first
 * imported.
 */
let prisma: PrismaClient | undefined;

if (!prisma) {
  prisma = new PrismaClient();
}

export default prisma!;