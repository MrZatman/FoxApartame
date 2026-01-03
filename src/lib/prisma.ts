import { PrismaClient } from '../generated/prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: InstanceType<typeof PrismaClient> | undefined
}

// @ts-ignore - Prisma 7 config is in prisma.config.ts
export const prisma = globalForPrisma.prisma ?? new PrismaClient(undefined as any)

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma