import { H3Event } from "h3";

export default defineEventHandler(async (event: H3Event) => {
  const { prisma } = event.context;
  const result = await prisma.$queryRaw`SELECT 1;`
  return result;
});
