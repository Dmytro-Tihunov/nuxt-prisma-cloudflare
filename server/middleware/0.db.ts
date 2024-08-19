import type { H3Event } from "h3";
import type { D1Database } from "@cloudflare/workers-types";
import { PrismaClient } from "@prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";

let prisma: PrismaClient;

declare module "h3" {
  interface H3EventContext {
    prisma: PrismaClient;
    cloudflare: {
      env: {
        DB: D1Database;
      };
    };
  }
}

export default defineEventHandler(async (event: H3Event) => {
  const { DB } = event.context.cloudflare.env;
  const adapter = new PrismaD1(DB);
  if(!prisma) {
  prisma = new PrismaClient({ adapter });
  }
  event.context.prisma = prisma;
});
