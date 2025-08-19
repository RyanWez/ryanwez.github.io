// When using Prisma's Data Proxy, it's recommended to instantiate a new client for each request
// rather than using a global singleton. The Data Proxy handles connection pooling.
import { PrismaClient } from '@prisma/client/edge';

export const prisma = new PrismaClient();
