import { PrismaClient } from '@prisma/client';

// When using Prisma's Data Proxy, it's recommended to instantiate a new client for each request
// rather than using a global singleton. The Data Proxy handles connection pooling.
export const prisma = new PrismaClient();
